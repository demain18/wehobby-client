<template>
  <div id="container">
    <h1>Testing Lab</h1>
    <ul>
      <li v-for="item in todos" v-bind:key="item.id"> 
        
        <input 
          type="checkbox" 
          :checked="item.done"
          @change="toggle(item)" 
        />

        <span :class="{done: item.done}">
          {{item.title}}
        </span> 

        <button @click="remove(item)">
        지우기
        </button> 

      </li>
    </ul>
    <p> 
      <input 
        type="text" 
        placeholder="할 일을 적으셈" 
        v-model="todoTitle" 
        @keyup.enter="addTodo" 
      /> 
      <button @click="addTodo">입력</button>
    </p>
  </div>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'

  export default {
    data: function () {
      return {
        todoTitle: ''
      };
    },
    computed: {
      todos() {
        return this.$store.state.todo.list;
      }
    },
    methods: {
      addTodo() {
        this.$store.commit('todo/add', this.todoTitle);
        this.todoTitle = '';
      },
      ...mapMutations({
        toggle: 'todo/toggle',
        remove: 'todo/remove'
      })
    }

  }

</script>

<style>
  #container {
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 20px;
    color: #3a3a3a;
  }

  #container h1 {
    border-bottom: 2px solid #8e99ff;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

</style>
