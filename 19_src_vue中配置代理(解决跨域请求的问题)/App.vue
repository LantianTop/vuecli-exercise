<template>
  <div>
    <button @click="SendStudentMessage">获取学生信息</button>
    <button @click="SendCarMessage">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios';
export  default {
    name:"App1",
    methods:{
      SendStudentMessage(){
         axios.get("/api/students").then(
             response =>{
                console.log("请求成功了",response.data)
             },
             error =>{
               console.log("请求失败了",error.message)
             }
             )
      },
      SendCarMessage(){
        axios.get("/demo/cars").then(
            response=>{
              console.log("请求成功了",response.data)
            },
            error=>{
              console.log("请求失败了",error.message)
            }
        )
      }
    }

}

</script>



