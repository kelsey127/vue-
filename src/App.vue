<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader :addTodo='addTodo'/>
            <TodoList :todos='todos' :delTodo='delTodo'/>
            <TodoFooter/>
        </div>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    methods:{
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        
        delTodo(index){
            this.todos.splice(index,1);
        }
    },

    data(){
        return{
            todos:[
                {id:1,title:'美女',isShow:false},
                {id:2,title:'靓女',isShow:true},
                {id:3,title:'大帅',isShow:false},
            ]
        }
    },


    components:{
            TodoHeader,
            TodoList,
            TodoFooter
    }
}
</script>

<style scoped>
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}    
</style>



