<template>
    <div>
        <h1>
            <img id="vue-logo" src="../assets/logo.png">
            Easy use of tinymce in vue js
            <br>
            <a class="btn btn-default" href="https://github.com/dyonir/vue2-persian-datepicker">
                <i class="fa fa-github"></i>
                View on GitHub
            </a>
        </h1>
        <div class="col-md-6 col-sm-6 col-xs-12">
                <h3>Tinymce:</h3>
                
            <tinymce id="dt1" v-model="dt1" :other_options="options1"></tinymce>
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
      options1:  { 'height': 300 }
    }
  },
  methods: {
      resetContent(){
          this.dt1 = this.initial;
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
