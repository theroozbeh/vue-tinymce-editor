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
| toolbar1 | String | `'formatselect \| bold italic  strikethrough  forecolor backcolor \| link \| alignleft aligncenter alignright alignjustify  \| numlist bullist outdent indent  \| removeformat'` | Toolbar 1 of tinymce |
| toolbar2 | String | '' | Toolbar 2 of tinymce |
| plugins | Array | `['advlist autolink lists link image charmap print preview hr anchor pagebreak','searchreplace wordcount visualblocks visualchars code fullscreen','insertdatetime media nonbreaking save table contextmenu directionality','template']` | plugins of tinymce you need to load |
| other_options | Array | {} | other tinymce options. you can also override our initial options |
