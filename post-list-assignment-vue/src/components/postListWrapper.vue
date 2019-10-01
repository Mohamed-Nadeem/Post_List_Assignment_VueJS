<template>
  <div>
    <PostList :postLists="items" @handle-move-click="handleMove" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/postList.vue'
export default {
  name: 'PostListWrapper',
  props: {
    items: Array
  },
  components: {
    PostList
  },
  methods: {
    handleMove(value) {
      this.$emit('handle-move', value)
    }
  }
}
</script>

<style scoped></style>
