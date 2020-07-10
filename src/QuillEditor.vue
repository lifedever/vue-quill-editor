<template>
    <div>
        <div ref="toolbar"></div>
        <div ref="editor"
             class="vue-quill-editor"
             :style="style">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Quill from 'quill'
    import 'quill/dist/quill.core.css'
    import './style.less'
    import ImageResize from 'quill-image-resize';

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
                }
            }
        },
        created() {

        },
        mounted() {
            this.initParams()
            this.initQuill()
        },
        props: {
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
            readOnly() {
                if (this.quill) {
                    this.quill.enable(!this.readOnly);
                }
            }
        },
        computed: {
            style() {
                return {
                    height: this.autoHeight ? undefined : this.height + 'px',
                    minHeight: this.autoHeight ? this.height + 'px' : undefined
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
                Quill.prototype.getHtml = () => {
                    return this.$refs['editor'].querySelector('.ql-editor').innerHTML
                }

                Quill.prototype.setHtml = html => {
                    this.$refs['editor'].querySelector('.ql-editor').innerHTML = html;
                };
            },
            initQuill() {
                Quill.register('modules/imageResize', ImageResize);

                this.quill = new Quill(this.$refs['editor'], {
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
                    readOnly: this.readOnly
                });

                this.$nextTick(_ => {
                    if (this.value) {
                        this.quill.root.dataset.placeholder = '';
                        this.quill.setHtml(this.value)
                    } else {
                        this.quill.root.dataset.placeholder = this.placeholder
                    }
                    this.$emit('input', this.quill.getHtml())
                })

                this.bindEvents();
            },
            bindEvents() {
                this.quill.on('text-change', (delta, oldDelta, source) => {
                    this.$emit('input', this.quill.getHtml())
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
                                }
                            } else {
                                alert('图片上传失败！')
                                reject(xhr.responseText)
                            }
                        }
                    }
                    xhr.send(formData);
                })
            },
            getEditor() {
                return this.quill
            },
            getHtml() {
                return this.quill.getHtml()
            },
            setHtml(content) {
                this.quill.setHtml(content)
            },
            getText() {
                return this.quill.getText()
            },
            getContents() {
                return this.quill.getContents()
            },
            getLength() {
                return this.quill.getLength()
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