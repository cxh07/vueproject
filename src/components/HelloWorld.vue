<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-table

      :data="usrelist"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>

    </el-table>
    <el-table

      :data="usrelist1"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',

        data() {
            return {
                 usrelist:[],
                usrelist1:[],
                msg: 'Welcome to Your Vue.js App',

            }
        },
        methods:{
          m:function () {
              if(this.usrelist){
                  this.loading=false

              }          }

        },
        // created() {
        //     this.$http.get('http://127.0.0.1:5000/test/get')
        //         .then(function (data) {
        //             console.log(data.body)
        //             this.usrelist=data.body
        //         })
        //
        //     this.$http.post('http://127.0.0.1:5000/test/post')
        //         .then(function (data) {
        //             console.log(data.body)
        //             this.usrelist1=data.body
        //         })
        //
        // }
        // ,
        mounted() {
             this.$http.get('http://127.0.0.1:5000/test/get')
                .then(function (data) {
                    console.log(data.body)
                    this.usrelist=data.body
                })

            this.$http.post('http://127.0.0.1:5000/test/post')
                .then(function (data) {
                    console.log(data.body)
                    this.usrelist1=data.body
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
