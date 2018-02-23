<template>
    <div>
        <h1>
            <img id="vue-logo" src="../assets/logo.png">
            Easy use of tinymce in vue js
            <br>
            <a class="btn btn-default" href="https://github.com/dyonir/vue-tinymce-editor">
                <i class="fa fa-github"></i>
                View on GitHub
            </a>
        </h1>
        <div class="col-md-6 col-sm-6 col-xs-12">
                <h3>Tinymce:</h3>
            <div class="form-group">
                <label>Language:</label>
                <select v-model="language">
                    <option value="ar">Arabic</option>
                    <option value="be">Belarusian </option>
                    <option value="bn_BD">Bengali  (Bangladesh)</option>
                    <option value="bg_BG">Bulgarian (Bulgaria)  </option>
                    <option value="ca">Catalan </option>
                    <option value="zh_CN">Chinese (China)  </option>
                    <option value="zh_TW">Chinese (Taiwan) </option>
                    <option value="hr">Croatian </option>
                    <option value="cs">Czech </option>
                    <option value="da">Danish </option>
                    <option value="dv">Divehi </option>
                    <option value="nl">Dutch </option>
                    <option value="en_CA">English (Canada) </option>
                    <option value="en_GB">English (United Kingdom) </option>
                    <option value="en_US">English (United States) </option>
                    <option value="et">Estonian </option>
                    <option value="fr_FR">French (France)  </option>
                    <option value="gl">Galician </option>
                    <option value="ka_GE">Georgian (Georgia) </option>
                    <option value="de">German </option>
                    <option value="de_AT">German (Austria) </option>
                    <option value="el">Greek </option>
                    <option value="he_IL">Hebrew (Israel) </option>
                    <option value="hu_HU">Hungarian (Hungary)</option>
                    <option value="ga">Irish</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="kab">Kabyle</option>
                    <option value="kk">Kazakh</option>
                    <option value="km_KH">Khmer (Cambodia) </option>
                    <option value="ko_KR">Korean (Korea)</option>
                    <option value="lv">Latvian</option>
                    <option value="nb_NO">Norwegian Bokmål (Norway)</option>
                    <option value="fa_IR">Persian (Iran) </option>
                    <option value="pl">Polish</option>
                    <option value="pt_BR">Portuguese (Brazil) </option>
                    <option value="pt_PT">Portuguese (Portugal)</option>
                    <option value="ro">Romanian</option>
                    <option value="ru">Russian</option>
                    <option value="sr">Serbian</option>
                    <option value="si_LK">Sinhala (Sri Lanka) </option>
                    <option value="sk">Slovak</option>
                    <option value="sl_SI">Slovenian (Slovenia)</option>
                    <option value="es">Spanish</option>
                    <option value="es_MX">Spanish (Mexico)</option>
                    <option value="sv_SE">Swedish (Sweden)</option>
                    <option value="ta">Tamil</option>
                    <option value="ta_IN">Tamil (India)</option>
                    <option value="th_TH">Thai (Thailand)</option>
                    <option value="tr">Turkish</option>
                    <option value="tr_TR">Turkish (Turkey)</option>
                    <option value="uk">Ukrainian</option>
                    <option value="uk_UA">Ukrainian (Ukraine) </option>
                    <option value="uz">Uzbek</option>
                    <option value="vi_VN">Vietnamese (Viet Nam)</option>
                    <option value="cy">Welsh</option>
                </select>
                </div>
                <tinymce
                    id="dt1"
                    v-model="dt1"
                    v-on:editorInit="initCallBack"
                    v-on:editorChange="editorChange"
                    ref="tm"
                    :toolbar2="toolbar2"
                    :other_options="options1"></tinymce>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
                <h3>Returned html code:</h3>
                <button type="button" @click="resetContent">Reset content</button>
                <br>
                <br>
            <div class="code">
            {{ dt1 }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dt1 : '<h2>This is a component for easy use of tinymce in vuejs.</h2> <p>&nbsp;</p> <p><span style="color: #339966;">I hope you enjoy using it.</span></p>',
      initial : '<h2>This is a component for easy use of tinymce in vuejs.</h2> <p>&nbsp;</p> <p><span style="color: #339966;">I hope you enjoy using it.</span></p>',
      language: window.location.search.substring(1) ? window.location.search.substring(1) : 'en_US',
      toolbar2: 'codesample',
      options1:  { 'height': 300,
        language_url: window.location.search.substring(1) &&  window.location.search.substring(1) != 'en_US' ? 
            (window.location.hostname == 'http://localhost' ? window.location.hostname + ':8080' : 'https://dyonir.github.io/vue-tinymce-editor/')
            + '/static/langs/' + window.location.search.substring(1) + '.js'  : ''  },
      
    }
  },
  computed:{
  },
  watch:{
      language(value){
          window.location = (window.location.hostname == 'http://localhost' ? window.location.hostname + ':8080/?' : 'https://dyonir.github.io/vue-tinymce-editor/?') + value
      }
  },
  mounted(){
      console.log(window.location.search.substring(1));
  },
  methods: {
      resetContent(){
          this.dt1 = this.initial;
      },
      initCallBack(e){
          console.log(this.$refs.tm.editor);
          console.log('init', e);
      },
      editorChange(e){
          console.log('change', e);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .code{
        text-align: left;
        boder-radius: 5px;
        background-color: #e3e3e3;
        padding: 100px 20px;
        max-height: 300px;
        overflow-x: auto;
    }
</style>
