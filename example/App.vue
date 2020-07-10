<template>
    <div id="app">
        <h1>编辑器演示</h1>
        <div>
            <button @click="() => readOnly = !readOnly">
                <span v-if="readOnly">只读</span>
                <span v-if="!readOnly">非只读</span>
            </button>
        </div>
        <div style="width: 1200px; margin-top: 10px; display: flex; flex-direction: row;">
            <div style="flex: 1;">
                <quill-editor :read-only="readOnly"
                              :image="imageConfig"
                              :auto-height="false"
                              v-model="content"></quill-editor>
            </div>
            <div style="flex: 1; padding-left: 10px;    word-break: break-all;">
                <div style=" background: #fff; padding: 12px;" v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import 'quill/dist/quill.snow.css'

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                readOnly: false,
                imageConfig: {
                    serverUrl: 'http://localhost:12388/api/facade/open/general/edit/upload'
                },
                content: `<h1>标题一标题一</h1><h2>标题二标题二</h2><h3>标题三标题三</h3><h4>标题四标题四</h4><h5>标题五标题五</h5><h6>标题六标题六</h6>`
            }
        },
        watch: {
            content() {
                console.log(this.content)
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
