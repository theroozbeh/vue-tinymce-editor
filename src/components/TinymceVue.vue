<template>
  <div>
      <textarea>{{ content }}</textarea>
  </div>
</template>

<script>
   // Import TinyMCE
    import tinymce from 'tinymce/tinymce';

    // A theme is also required
    import 'tinymce/themes/modern/theme';

    // Any plugins you want to use has to be imported
    import 'tinymce/plugins/advlist';
    import 'tinymce/plugins/autolink';
    import 'tinymce/plugins/autosave';
    import 'tinymce/plugins/charmap';
    import 'tinymce/plugins/codesample';
    import 'tinymce/plugins/contextmenu';
    import 'tinymce/plugins/emoticons';
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
   
    export default {
        name: 'tinymce',
        props: { 
                'htmlClass' : { default : '', type : String},
                'value' : { default : '' },
                'plugins' : { default : [
                                    'advlist autolink lists link image charmap print preview hr anchor pagebreak a11ychecker',
                                    'searchreplace wordcount visualblocks visualchars code fullscreen tinymcespellchecker advcode',
                                    'insertdatetime media nonbreaking save table contextmenu directionality',
                                    'template paste textcolor colorpicker textpattern imagetools codesample toc help emoticons hr'
                                ] , type: Array
                            }
                            ,
                toolbar1: { default :'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat', type: String},
                toolbar2: { default : '', type: String },
                other_options: { default : [], type: Array}
        },
        data(){
            return {
                content : ''
            }  
        },
        mounted(){
            this.content = this.value;
            this.init();  
        },
        methods: {
            init(){
                let options = {
                    selector: 'textarea',
                    toolbar1: this.toolbar1,
                    toolbar2: this.toolbar2,
                    plugins: this.plugins,
                    init_instance_callback : (editor) => {
                        editor.on('NodeChange Change KeyUp', (e) => {
                            this.$emit('input', editor.getContent());
                            this.$emit('change', editor, tinymce.activeEditor.getContent());
                        });
                        editor.on('init', (e) => {
                            if(this.content != undefined) editor.setContent(this.content);
                            this.$emit('input', this.content);
                        });
                    }
                };
                tinymce.init(this.concatAssciativeArrays(options, this.other_options));
            },
            concatAssciativeArrays(array1, array2){
                if(array2.length === 0) return array1;
                if(array1.length === 0) return array2;
                let dest = [];
                for ( let key in array1) dest[key] = array1[key];
                for ( let key in array2) dest[key] = array2[key];
                return dest;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
