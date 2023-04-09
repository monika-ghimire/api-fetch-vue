<template>
  <div class="user-content-wrapper">
    <div class="user-content pt-20 h-60">
      <h1 class="text-5xl">RANDOM USER GENERATOR</h1>
      <p class="mt-4 w-full">
        A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.
      </p>
    </div>

    <div class="user-details-wrapper pb-10 shadow-2xl">
      <div class="h-40 border-b-2 border-indigo-10 z-0">
        <div class="user-img">
          <img
            src="../assets/userimg.jpg"
            class="z-20 rounded-full border-2 border-indigo-10 p-1"
          />
        </div>
      </div>

      <div class="mt-12">
        <p class="text-gray-500">Hi, My name is</p>
        <h1 class="text-3xl"> g</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      userData:null
    }
  },

  computed: {
    ...mapGetters(['getUserdata'])
  },

  methods: {
    getUsers() {
      fetch('https://randomuser.me/api/')
        .then((results) => {
          return results.json()
        })
        .then((data) => {
      
        console.log(data)
        return data
        })
    }
  },

  mounted() {
  
    this.getUsers()
    
      console.log('inside mouted ')
  }
}
</script>

<style scoped>
.user-content-wrapper {
  background: #2c2e31;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 440px;
}
.user-content {
  width: 80%;
  color: white;
  margin: auto;
  text-align: center;
}
.user-details-wrapper {
  background: white;
  /* position: absolute; */
  text-align: center;
  width: 49%;
  margin: auto;
}
.user-img {
  /* top: 60px;
  left: 40%;
position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-img img {
  margin-top: 50px;
}
</style>
