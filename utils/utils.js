export default {

    getTodos(){
         return JSON.parse(localStorage.getItem('todos_key')||'[]')
    },

    setTodos(val){
        localStorage.setItem('todos_key',JSON.stringify(val))
    }

}