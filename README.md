# vue-tinymce-editor

> This a component provides easy use of tinymce for vue developers

## Demo
You can see a demo and an example in this page:
[Demo & examples](https://dyonir.github.io/vue-tinymce-editor/)

## Instalation
```bash
$ npm install vue-tinymce-editor
```

## How to use
```js
import Vue from 'vue'
import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce)
```


You may use the component in your markup
```html
<tinymce id="d1" v-model="data"></tinymce>
```

```js
export default{
    data(){
        return {
            data : ''
        };
    }
}
```

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| id | required, String | | id of component's textarea |
| toolbar1 | String | `'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat'` | Toolbar 1 of tinymce |
| toolbar2 | String | '' | Toolbar 2 of tinymce |
| plugins | Array | `['advlist autolink lists link image charmap print preview hr anchor pagebreak', 'searchreplace wordcount visualblocks visualchars code fullscreen', 'insertdatetime media nonbreaking save table contextmenu directionality','template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample']` | plugins of tinymce you need to load |
| other_options | Array | {} | other tinymce options. you can also override our initial options |
| readonly | Boolean | false | Enables or disables the Editor |

## Events

| Event | Parameter | Description |
|----------|------|---------|
| editorChange | Event | This event will be called when tinymce calls onchane |
| editorInit | Editor | This event will be called after editor is initialized |


## Localization
If you wish to use tinymce in other languages, please follow these steps:
1. Download the language pack you wish to use from [here](https://www.tinymce.com/download/language-packages/).
2. Unpack the language file into your desired path, which is accessible from outside and there is a URL pointing to it.
3. Finally, set language_url in other_options to the URL pointing to the language file.

For example:

```js
export default{
    data(){
        return {
            data : '',
            options: {
                language_url: 'http://example.com/js/langs/fa_IR.js' //This url points to location of persian language file.
            }
        };
    }
}
```
```html
<tinymce id="d1" v-model="data" :other_options="options"></tinymce>
```

## Direct access to tinymce editor
You can access the tinymce itself by setting a ref to this component:
```html
<tinymce id="d1" v-model="data" ref="tm"></tinymce>
```
Then you can access the editor by calling:

```js
this.$refs.tm.editor
```

