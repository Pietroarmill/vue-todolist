const app = new Vue(
    {
        el: "#root",
        data: {
            todos: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Portare il cane fuori",
                    done: true
                },
                {
                    text: "Mettere il mangiare al cane",
                    done: false
                },
                {
                    text: "Lavare l'auto",
                    done: true
                },
            ],
            newTodo: '',

        },
        methods: {
           gestisciClick: function(index) {
               console.log('click su elemento di indixce ', index);
               this.todos[index].done = !this.todos[index].done;
           },
           addTodo: function() {
                this.todos.push(
                        {
                            text: this.newTodo,
                            done: false
                        }
                    
                    );
                this.newTodo = '';
           },
           deleteTodo(index) {
               console.log("cancello l'elemento", index);
            
               this.todos.splice(index, 1);           }
        },
    }
)