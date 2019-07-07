<template>
<li 
    :style="{backgroundColor:bgcolor,color:fontColor}"
    @mouseenter="enterHandler(true)"
    @mouseleave="enterHandler(false)"
>
    <label>
        <input type="checkbox" v-model="todo.isShow"/>
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isDisplay" @click="del">删除</button>
</li>         
</template>


<script>
export default {
    methods: {
        del(){
            if(confirm('您确定要删除吗')){
                this.delTodo(this.index)
            }
        },

        enterHandler(isEnter) {
            if(isEnter){
                this.isDisplay = true,
                this.bgcolor = 'red',
                this.fontColor = 'green'
            }else{
                this.isDisplay = false,
                this.bgcolor = 'white',
                this.fontColor = 'black'
            }
        }
    },

    data() {
        return {
            bgcolor:'white',
            fontColor:'black',
            isDisplay:false
        };
    },
    
    props:{
        todo:Object,
        index:Number,
        delTodo:Function
    }
}
</script>

<style scoped>

li {
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    list-style: none;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>