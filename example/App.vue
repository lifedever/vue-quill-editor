<template>
    <div id="app">
        <h1>编辑器演示</h1>
        <p>tip： 打开console查看调试信息</p>
        <div>
            <button @click="() => readOnly = !readOnly">
                <span v-if="readOnly">只读</span>
                <span v-if="!readOnly">非只读</span>
            </button>
            <button @click="callMethod('getText')">获取纯文本内容</button>
            <button @click="callMethod('getHtml')">获取html内容</button>
            <button @click="callMethod('getLength')">获取内容长度</button>
            <button @click="callMethod('blur')">失去焦点</button>
            <button @click="callMethod('focus')">获取焦点</button>
            <button @click="callMethod('hasFocus')">是否获取焦点</button>
            <button @click="handleLimitCount" v-if="maxLength">取消字数限制</button>
            <button @click="handleLimitCount" v-else>限制100字长度输入</button>
        </div>
        <div style="width: 1200px; margin-top: 10px; display: flex; flex-direction: row;">
            <div style="flex: 1;">
                <div>
                    <quill-editor :read-only="readOnly"
                                  :max-length="maxLength"
                                  show-counter
                                  ref="editor"
                                  :image="imageConfig"
                                  height="100"
                                  v-model="item.text1">
                    </quill-editor>
                </div>
                <div>
                    <quill-editor :read-only="readOnly"
                                  :max-length="maxLength"
                                  show-counter
                                  ref="editor1"
                                  :image="imageConfig"
                                  height="100"
                                  v-model="item.text2">
                    </quill-editor>
                </div>
                <div>
                    <quill-editor :read-only="readOnly"
                                  :max-length="maxLength"
                                  show-counter
                                  ref="editor2"
                                  :image="imageConfig"
                                  height="100"
                                  v-model="item.text3">
                    </quill-editor>
                </div>
            </div>
            <div style="flex: 1; padding-left: 10px;    word-break: break-all;" class="ql-container">
                <p>第一个编辑器内容</p>
                <div style=" background: #fff; padding: 12px;" class="ql-editor" v-html="item.text1"></div>
                <p>第二个编辑器内容</p>
                <div style=" background: #fff; padding: 12px;" class="ql-editor" v-html="item.text2"></div>
                <p>第三个编辑器内容</p>
                <div style=" background: #fff; padding: 12px;" class="ql-editor" v-html="item.text3"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuillEditor from "../src/";
    export default {
        name: 'App',
        components: {
            QuillEditor
        },
        data() {
            return {
                maxLength: 20,
                readOnly: false,
                imageConfig: {
                    multiple: false,
                    serverUrl: 'http://localhost:12388/api/facade/open/general/edit/upload'
                },
                content: '',
                item: {
                    text1: '1234<img src="https://static.oschina.net/uploads/user/276/552167_50.jpg?t=1358392807000" />',
                    text2: '',
                    text3: '789'
                }
            }
        },
        watch: {
            content() {
            }
        },
        methods: {
            callMethod(method) {
                let obj = this.$refs['editor'][method]()
                alert(obj)
                console.log(obj)
            },
            handleLimitCount() {
                if (this.maxLength) {
                    this.maxLength = undefined
                }else{
                    this.maxLength = 100
                }
            }
        }
    }
</script>

<style>
    body {
        background: #f0f0f0;
    }

    #app {
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
