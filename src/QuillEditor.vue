<template>
    <div>
        <div ref="editor"
             class="vue-quill-editor"
             :style="style">
            <slot></slot>
        </div>
        <div v-if="showCounter" class="ql-counter-desc">
            已输入 {{textLength}}<span v-if="maxLength">/{{maxLength}}</span> 字
        </div>
    </div>
</template>

<script>
    import Quill from 'quill'
    import ImageResize from './modules/imageResize/ImageResize';
    Quill.register('modules/imageResize', ImageResize);
    export default {
        name: "QuillEditor",
        data() {
            return {
                quill: undefined,
                imageConfig: {
                    serverUrl: undefined,
                    fileName: 'file',
                    withCredentials: true,
                    multiple: true,
                },
                textLength: 0
            }
        },
        created() {

        },
        mounted() {
            this.initParams()
            this.initQuill()
        },
        props: {
            borderColor: {
                type: String,
                default: '#eee'
            },
            maxLength: Number,
            showCounter: Boolean,
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '请输入内容……'
            },
            toolbar: {
                type: Array,
                default() {
                    return [
                        [{'header': [1, 2, 3, 4, 5, false]}],
                        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                        ['link', 'image'],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['blockquote', 'code-block'],
                        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                        [{'align': []}],
                        ['clean'],
                    ]
                }
            },
            image: {
                type: Object
            },
            readOnly: Boolean,
            autoHeight: {
                type: Boolean,
                default: true
            },
            height: {
                type: [Number, String],
                default: 200
            }
        },
        watch: {
            readOnly: {
                handler(){
                    if (this.quill) {
                        this.handleReadOnlyChange()
                    }
                }
            },
        },
        computed: {
            style() {
                return {
                    height: this.autoHeight ? undefined : this.height + 'px',
                    minHeight: this.autoHeight ? this.height + 'px' : undefined,
                    borderColor: this.borderColor
                }
            }
        },
        methods: {
            initParams() {
                this.imageConfig = Object.assign({}, this.imageConfig, this.image)
                console.log('imageConfig', this.imageConfig)
                if (this.imageConfig.serverUrl) {
                    console.log('服务器相应图片上传的格式应为：', {"errno": 0, "data": ["imgurl1", "imgurl2"]})
                }
            },
            initQuill() {
                let config = {
                    modules: {
                        toolbar: {
                            container: this.toolbar,  // Selector for toolbar container
                            handlers: {
                                'image': this.imageConfig.serverUrl ? this.handleImage : undefined
                            }
                        },
                        imageResize: {}
                    },
                    theme: 'snow',
                    placeholder: this.placeholder,
                }
                this.quill = new Quill(this.$refs['editor'], config);
                console.log('init quill config: ', config)
                this.$nextTick(_ => {
                    if (this.value) {
                        this.setHtml(this.value)
                    }
                    this.$emit('input', this.getHtml())
                })
                this.textLength = this.getLength()
                this.bindEvents();

                console.log('editor container', this.quill.container)
                // 设置 只读
                setTimeout(_ => {
                    this.handleReadOnlyChange()
                }, 300)
                this.$nextTick(_ => {

                    // init toolbar style
                    this.$el.querySelector('.ql-toolbar.ql-snow').style.borderColor = this.borderColor
                })
            },
            bindEvents() {
                this.quill.on('text-change', (delta, oldDelta, source) => {
                    let text = this.getText()
                    let html = this.getHtml()
                    let length = this.getLength()
                    if (this.maxLength && length > this.maxLength) {
                        this.quill.deleteText(this.maxLength, length);
                    }

                    this.textLength = this.getLength();
                    this.$emit('input', html);
                    this.$emit('textChange', {delta, oldDelta, source})
                });
                this.quill.on('selection-change', (range, oldRange, source) => {
                    this.$emit('selectionChange', {range, oldRange, source})
                })
                this.quill.on('editor-change', (eventName, ...args) => {
                    this.$emit('editorChange', {eventName, args})
                })
            },
            handleImage() {
                console.log('选择图片进行上传')
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                if (this.imageConfig.multiple) {
                    input.setAttribute('multiple', "true");
                }
                input.setAttribute('accept', 'image/*');
                input.click();

                input.onchange = async () => {
                    const range = this.quill.getSelection(true);
                    this.uploadImage(this.imageConfig.multiple ? input.files : input.files[0]).then(items => {
                        items.forEach(image => {
                            this.quill.insertEmbed(range.index, 'image', image);
                            this.quill.setSelection(range.index + 1);
                        })
                    })
                }
            },
            uploadImage(files) {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    if (this.imageConfig.multiple) {
                        files.forEach(file => {
                            formData.append(this.imageConfig.fileName, file);
                        })
                    } else {
                        formData.append(this.imageConfig.fileName, files);
                    }
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', this.imageConfig.serverUrl, true);
                    if (this.imageConfig.withCredentials) {
                        xhr.withCredentials = true;
                    }
                    xhr.onreadystatechange = e => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                let res = JSON.parse(xhr.responseText);
                                console.log('upload success', res)
                                if (res.errno === 0) {
                                    resolve(res.data)
                                }else {
                                    alert(res.message)
                                }
                            } else {
                                console.log(xhr)
                                alert(`图片上传失败！${xhr.responseText}`)
                                reject(xhr.responseText)
                            }
                        }
                    }
                    xhr.send(formData);
                })
            },
            handleReadOnlyChange() {
                this.quill.enable(!this.readOnly);
                if (this.readOnly) {
                    this.$el.querySelector('.ql-toolbar').style.pointerEvents = 'none'
                }else{
                    this.$el.querySelector('.ql-toolbar').style.pointerEvents = 'unset'
                }
            },
            getEditor() {
                return this.quill
            },
            getHtml() {
                return this.quill.container.firstChild.innerHTML
            },
            setHtml(content) {
                this.quill.container.firstChild.innerHTML = content;
            },
            getText() {
                return this.quill.getText()
            },
            getContents() {
                return this.quill.getContents()
            },
            getLength() {
                return this.quill.getLength() - 1
            },
            blur() {
                this.quill.blur()
            },
            focus() {
                this.quill.focus()
            },
            /**
             * 是否获取焦点
             * @returns {boolean}
             */
            hasFocus() {
                return this.quill.hasFocus()
            }
        },
        beforeDestroy() {
            this.$el.remove()
            this.quill = undefined
        }
    }
</script>

<style scoped>

</style>