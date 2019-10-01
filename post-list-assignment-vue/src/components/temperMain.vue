<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="temper-main-class">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <span class="labels-col">Sortable List</span>
            <div>
              <PostListWrapper
                :items="current.items"
                @handle-move="handleMove"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <span class="labels-col">Go to previous step</span>
            <ol id="timeTravelList">
              <li
                v-for="historyList in historyLists"
                class="timeTravel-button"
                :key="historyList"
              >
                <button
                  class="btn btn-primary time-button-class"
                  @click="jumpTo(historyList)"
                >
                  {{ moves[historyList] }}
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary btn-block"
        @click="refreshPage"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostListWrapper from '@/components/postListWrapper.vue'
import _ from 'lodash'

export default {
  name: 'TemperMain',
  props: {
    msg: String
  },
  components: {
    PostListWrapper
  },
  data() {
    return {
      history: [
        {
          items: [
            { id: 1, title: 'Post 1', bgColor: '#f9cb9c' },
            { id: 2, title: 'Post 2', bgColor: '#fee599' },
            { id: 3, title: 'Post 3', bgColor: '#e06666' },
            { id: 4, title: 'Post 4', bgColor: '#b6d7a7' }
          ]
        }
      ],
      stepNumber: 0
    }
  },
  methods: {
    handleMove(value) {
      const id = value.id
      const direction = value.direction
      const UP = -1
      const DOWN = 1
      const history = _.slice(this.history, 0, this.stepNumber + 1)
      const current = history[history.length - 1]
      const items = _.slice(current.items)

      const position = _.findIndex(items, i => i.id === id)
      if (position < 0) {
        alert('Given item not found.')
      } else if (
        (direction === UP && position === 0) ||
        (direction === DOWN && position === items.length - 1)
      ) {
        return
      }

      const item = items[position]
      const newItems = _.filter(items, i => i.id !== id)
      newItems.splice(position + direction, 0, item)
      this.history = history.concat([{ items: newItems }])
      this.stepNumber = history.length
    },
    refreshPage() {
      window.location.reload()
    },
    jumpTo(step) {
      this.stepNumber = step
    }
  },
  computed: {
    current() {
      const history = this.history
      return history[this.stepNumber]
    },
    moves() {
      const history = this.history
      const moveTitles = []
      history.map((step, move) => {
        const desc = move ? 'Go to move number ' + move : 'Go to start'
        moveTitles.push(desc)
      })
      return moveTitles
    },
    historyLists() {
      const history = this.history
      const listOfMoves = []
      history.map((step, move) => {
        listOfMoves.push(move)
      })
      return listOfMoves
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
@media (min-width: 576px) {
  .col-sm-4 {
    max-width: 45.333333% !important;
    flex: 0 0 44.333333% !important;
  }
}
.timeTravel-button {
  display: grid;
  padding: 1%;
}

.temper-main-class {
  background-color: beige;
  padding: 3%;
}

.col-sm-4 {
  text-align: center;
}

.labels-col {
  font-family: 'Times New Roman', Times, serif;
  font-size: x-large;
  font-weight: 500;
  width: 100% !important;
}

.container {
  margin-bottom: 4%;
}
</style>
