<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader :addTodo='addTodo'/>
            <TodoList :todos='todos' :delTodo='delTodo'/>
            <TodoFooter :todos='todos' :checkAllTodos='checkAllTodos'/>
        </div>
    </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import Storage from '../utils/utils.js'

export default {
    methods:{
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        
        delTodo(index){
            this.todos.splice(index,1);
        },

        checkAllTodos(isCheck){
            this.todos.forEach((todo) => {todo.isShow = isCheck});
        }
    },

    data(){
        return{
            todos:Storage.getTodos()
        }
    },
    
    watch:{
        todos:{
            deep:true,
            handler:Storage.setTodos
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



