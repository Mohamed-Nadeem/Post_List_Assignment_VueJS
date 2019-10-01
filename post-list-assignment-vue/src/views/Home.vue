<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TemperMain msg="Welcome to the Temper Front-End Assignment!" />
  </div>
</template>

<script>
// @ is an alias to /src
import TemperMain from '@/components/temperMain.vue'

export default {
  name: 'home',
  components: {
    TemperMain
  }
}
</script>
