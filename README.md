vue-quill-editor
----
# USAGE
```shell script
yarn add @gefangshuai/vue-quill-editor
```

# OPTIONS

1. value (v-model): 绑定文本内容
2. placeholder: 无内容时的文本提示
3. toolbar: 工具栏，默认为:
     ```javascript
     [
        [{'header': [1, 2, 3, 4, 5, false]}],
        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['link', 'image'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['blockquote', 'code-block'],
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'align': []}],
        ['clean']
     ]
     ```
4. image: 图片上传的配置信息，如下：
    ```json
    {
        "serverUrl": "图片上传的后台接收地址",
        "fileName": "请求参数，默认 'file'",
        "withCredentials": "是否跨域，默认 true",
        "multiple": "是否允许一次上传多张图片，默认 true"
    }
    ```
    如果不配置，则默认为base64图片插入到编辑器
5. readOnly: 是否只读，默认false。
6. autoHeight: 编辑器高度随内容自适配，默认true。
7. height: 编辑器初始化时的高度，默认'200px'。

# METHODS

1. getHtml(): String
    返回编辑器内容
2. setHtml(content)： 
    为编辑器赋值