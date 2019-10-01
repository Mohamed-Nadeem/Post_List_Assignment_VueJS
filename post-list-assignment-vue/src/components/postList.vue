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
.postId {
  display: inline-flex !important;
  margin-right: 3%;
}

.postTitle {
  display: inline-flex;
  margin-right: 3%;
  text-align: justify;
  width: 84%;
}

li.list-group-item.post-lists-li {
  margin-bottom: 2%;
  transition: all 0.4s ease-out;
  opacity: 1;
}

li.list-group-item.post-lists-li:hover {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}

ul.list-group {
  margin-top: 1%;
}

button.btn.btn-primary.time-button-class {
  margin-left: -9%;
}
</style>
