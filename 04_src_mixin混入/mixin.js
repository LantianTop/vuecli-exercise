//分别暴露方式，不是统一暴露，也不是默认暴露

export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    //挂载完毕就执行
    mounted() {
        console.log('你好啊')
    }
}

export const shareData = {
    data(){
        return {
            x:100,
            y:200
        }
    }
}
