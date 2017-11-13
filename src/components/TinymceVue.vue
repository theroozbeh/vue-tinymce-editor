<template>
  <div>
      <textarea :id="id">{{ content }}</textarea>
  </div>
</template>

<script>
   // Import TinyMCE
    import tinymce from 'tinymce/tinymce';

    // A theme is also required
    import 'tinymce/themes/modern/theme';

    // Any plugins you want to use has to be imported
    import 'tinymce/plugins/advlist';
    import 'tinymce/plugins/wordcount';
    import 'tinymce/plugins/autolink';
    import 'tinymce/plugins/autosave';
    import 'tinymce/plugins/charmap';
    import 'tinymce/plugins/codesample';
    import 'tinymce/plugins/contextmenu';
    import 'tinymce/plugins/emoticons';
    import 'tinymce/plugins/codesample';
    import 'tinymce/plugins/fullscreen';
    import 'tinymce/plugins/hr';
    import 'tinymce/plugins/imagetools';
    import 'tinymce/plugins/insertdatetime';
    import 'tinymce/plugins/link';
    import 'tinymce/plugins/media';
    import 'tinymce/plugins/noneditable';
    import 'tinymce/plugins/paste';
    import 'tinymce/plugins/print';
    import 'tinymce/plugins/searchreplace';
    import 'tinymce/plugins/tabfocus';
    import 'tinymce/plugins/template';
    import 'tinymce/plugins/textpattern';
    import 'tinymce/plugins/visualblocks';
    import 'tinymce/plugins/anchor';
    import 'tinymce/plugins/autoresize';
    import 'tinymce/plugins/bbcode';
    import 'tinymce/plugins/code';
    import 'tinymce/plugins/colorpicker';
    import 'tinymce/plugins/directionality';
    import 'tinymce/plugins/fullpage';
    import 'tinymce/plugins/help';
    import 'tinymce/plugins/image';
    import 'tinymce/plugins/importcss';
    import 'tinymce/plugins/legacyoutput';
    import 'tinymce/plugins/lists';
    import 'tinymce/plugins/nonbreaking';
    import 'tinymce/plugins/pagebreak';
    import 'tinymce/plugins/preview';
    import 'tinymce/plugins/save';
    import 'tinymce/plugins/spellchecker';
    import 'tinymce/plugins/table';
    import 'tinymce/plugins/textcolor';
    import 'tinymce/plugins/toc';
    import 'tinymce/plugins/visualchars';
    
    import 'tinymce/skins/lightgray/skin.min.css'
    import 'tinymce/skins/lightgray/content.min.css'
    
    // Object.assign polyfill
    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
          'use strict';
          if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      });
    }
   
    export default {
        name: 'tinymce',
        props: { 
                'id' : {
                    type : String,
                    required : true
                },
                'htmlClass' : { default : '', type : String},
                'value' : { default : '' },
                'plugins' : { default : function(){ 
                                    return [
                                        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                                        'searchreplace wordcount visualblocks visualchars code fullscreen',
                                        'insertdatetime media nonbreaking save table contextmenu directionality',
                                        'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr'
                                    ];
                                } , type: Array
                            },
                toolbar1: { default :'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat', type: String},
                toolbar2: { default : '', type: String },
                other_options: { default : function() { return {}; }, type: Object}
        },
        data(){
            return {
                content : '',
                editor : null,
                cTinyMce : null,
                checkerTimeout: null,
                isTyping : false
            }; 
        },
        mounted(){
            this.content = this.value;
            this.init();  
        },
        beforeDestroy () {
            this.editor.destroy();
        },
        watch: {
            value : function (newValue){
                if(!this.isTyping){
                    if(this.editor !== null)
                        this.editor.setContent(newValue);
                    else
                        this.content = newValue;
                }
            }
        },
        methods: {
            init(){
                let options = Object.assign({
                    selector: '#' + this.id,
                    skin: false,
                    toolbar1: this.toolbar1,
                    toolbar2: this.toolbar2,
                    plugins: this.plugins,
                  },
                  this.other_options, 
                  {
                    init_instance_callback : (editor) => {
                      this.editor = editor;
                      editor.on('KeyUp', (e) => {
                         this.submitNewContent();
                      });
                      editor.on('Change', (e) => {
                          if(this.editor.getContent() !== this.value){
                             this.submitNewContent();
                          }
                      });
                      editor.on('init', (e) => {
                          editor.setContent(this.content);
                          this.$emit('input', this.content);
                      });
                      this.$emit('init_instance', editor);
                    }
                });
                tinymce.init(options);
            },
            submitNewContent(){
                this.isTyping = true;
                if(this.checkerTimeout !== null)
                    clearTimeout(this.checkerTimeout);
                    this.checkerTimeout = setTimeout(()=>{
                        this.isTyping = false;
                    }, 300);

                this.$emit('input', this.editor.getContent());
            }
        }
    }
</script>
