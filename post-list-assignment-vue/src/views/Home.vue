<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TemperMain
      v-if="!isLoaded"
      :posts="posts"
      msg="Welcome to the Temper Front-End Assignment!"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TemperMain from '@/components/temperMain.vue'
import getPosts from '@/service/getPosts.js'

export default {
  name: 'home',
  components: {
    TemperMain
  },
  data() {
    return {
      posts: [],
      isLoaded: true
    }
  },
  created: async function() {
    const reducedPosts = []
    try {
      await getPosts().then(data => {
        data.forEach(post => {
          if (reducedPosts.length < 5) {
            reducedPosts.push(post)
          }
        })
        this.isLoaded = false
        this.posts = reducedPosts
      })
    } catch (e) {
      alert(e)
    }
  }
}
</script>
