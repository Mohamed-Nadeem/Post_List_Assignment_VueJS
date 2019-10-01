<template>
  <div>
    <ul class="list-group">
      <li
        v-for="postList in postLists"
        :key="postList.id"
        class="list-group-item post-lists-li"
      >
        <div class="postId">{{ postList.id }}</div>
        <div class="postTitle">{{ postList.title }}</div>
        <div class="badge">
          <a @click="handleMove(postList.id, UP)">&#x25B2;</a>
          <a @click="handleMove(postList.id, DOWN)">&#x25BC;</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    postLists: {
      required: true
    }
  },
  data() {
    return {
      UP: -1,
      DOWN: 1
    }
  },
  methods: {
    handleMove(id, direction) {
      const params = { id: id, direction: direction }
      this.$emit('handle-move-click', params)
    }
  }
}
</script>

<style>
.post-lists-li {
  margin-bottom: 2%;
  transition: all 0.4s ease-out;
  opacity: 1;
}

.post-lists-li:hover {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}

.list-group {
  margin-top: 1%;
}

.time-button-class {
  margin-left: -9%;
}
</style>
