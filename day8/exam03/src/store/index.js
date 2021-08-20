import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      todos : []
    }
  },
  mutations: {
    updateTodos(state) {
      
    }

  },
  actions: {
    updateTodos(context) {
      //axios
      //console.log(this.axios)
      (async ()=> {
        try{
       let url = 'https://jsonplaceholder.typicode.com/todos';
       let {status,data} = await this.axios.get(url);
       console.log(status);
       console.log(data);
       state.todos=data;
        }
       catch(e)
       {
         console.log(e)
       }
     })();
     }
  },
  modules: {
  }
})
