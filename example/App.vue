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
            <button @click="callMethod('getContents')">获取文本内容</button>
            <button @click="callMethod('getLength')">获取内容长度</button>
            <button @click="callMethod('blur')">失去焦点</button>
            <button @click="callMethod('focus')">获取焦点</button>
            <button @click="callMethod('hasFocus')">是否获取焦点</button>
        </div>
        <div style="width: 1200px; margin-top: 10px; display: flex; flex-direction: row;">
            <div style="flex: 1;">
                <quill-editor :read-only="readOnly"
                              ref="editor"
                              :image="imageConfig"
                              height="300"
                              :auto-height="false"
                              v-model="content">
                    <h1>标题1</h1>
                    <p><br></p>
                    <p><br></p>
                    <p><br></p>
                    <h1>标题2</h1>
                    <p><br></p>
                    <p><br></p>
                    <p><br></p>
                    <h1>标题3</h1>
                    <p><br></p>
                    <p><br></p>
                    <p><br></p>
                </quill-editor>
            </div>
            <div style="flex: 1; padding-left: 10px;    word-break: break-all;" class="ql-container">
                <div style=" background: #fff; padding: 12px;" class="ql-editor" v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                readOnly: false,
                imageConfig: {
                    multiple: false,
                    serverUrl: 'http://localhost:12388/api/facade/open/general/edit/upload'
                },
                content: ''
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
