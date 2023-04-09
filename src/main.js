import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { createStore } from 'vuex'
import './assets/main.css'

// Create a new store instance.
const store = createStore({
    state () {
      return {
        user_data:"Allison Vasquez"
      }
    },
   getters:{
    getUserdata(state){
        console.log(state.user_data)
        return state.user_data
     
    }
   }
  })
  
  
const app = createApp(App)

// app.use(router)
app.use(store)
app.mount('#app')
