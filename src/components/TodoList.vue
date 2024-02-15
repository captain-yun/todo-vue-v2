<template>
    <body>
        <h1>todo-list</h1>
        <form @submit.prevent="createTodo()" id="form">
        <input v-model="input" type="text" class="input" id="input" placeholder="Enter your todo" autocomplete="off">
        <ul class="todos" id="todos">
            <!-- <li @click="todo.done = !todo.done" @contextmenu.prevent="remove(todo)"
             :class="{completed : todo.done == true}" v-for="todo in todos" :key="todo">{{ todo.content }}</li> -->
             <TodoItem v-for="todo in todos" :key="todo" :todo="todo" 
             @toggleCompleted="toggleCompleted(todo)" @remove="remove(todo)"/>
        </ul>
        </form>
        <small>왼쪽 클릭: 항목 완료 <br> 오른쪽 클릭: 해당 항목 삭제</small>        
    </body>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
    data() {
        return {
            input: "",
            todos: [
                { id: 0, content: "vue3로 todolist 만들기", done: false },
                { id: 1,  content: "프로젝트 주제 선정하기", done: false },
                { id: 2, content: "발표 준비하기", done: true },
            ]
        };
    },
    methods: {
        remove(todo) {
            let index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);
            }
            this.deleteTodoAPI(todo);
        },
        toggleCompleted(todo) {
            todo.done = !todo.done;
            this.putTodoAPI(todo);
        },
        createTodo() {
            this.todos.push({ content: this.input, done: false });
            this.postTodoAPI();
            this.input = "";
        },
        fetchTodosAPI() {
            this.axios        
            .get(`/api/todos`)
            .then((res) => {
                this.todos = res.data;
            })        
            .catch((res) => {          
                console.error(res);        
            });
        },
        postTodoAPI() {
            this.axios        
            .post(`/api/todos`, {
                content: this.input, done: false
            })
            .then((res) => {
                console.log(res.data)
            })        
            .catch((res) => {          
                console.error(res);        
            });
        },
        putTodoAPI(todo) {
            this.axios        
            .put(`/api/todos/${todo.id}`, {
                content: todo.content, done: todo.done
            })
            .then((res) => {
                console.log(res.data)
            })        
            .catch((res) => {          
                console.error(res);        
            });
        },
        deleteTodoAPI(todo) {
            this.axios        
            .delete(`/api/todos/${todo.id}`)
            .then((res) => {
                console.log(res.data)
            })        
            .catch((res) => {          
                console.error(res);        
            });
        }
    },
    mounted() {
        this.fetchTodosAPI();
    },
    components: { TodoItem }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
    box-sizing: border-box;
}

/* body {
    background-color: #f5f5f5;
    color: #444;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
} */

h1 {
    color: black;
    font-size: 5rem;
    text-align: center;
}

form {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 400px;
}

.input {
    border: none;
    color: #444;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
}

.input::placeholder {
    color: grey;
}

.input:focus {
    outline-color: skyblue;
}

.todos {
    background-color: #fff;
    padding: 0;
    margin: 0;
    list-style-type: none;
    text-align: left;
}

.todos li {
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
}

.todos li.completed {
    color: #b6b6b6;
    text-decoration: line-through;
}

small {
    color: #b5b5b5;
    margin-top: 3rem;
    text-align: center;
}

</style>