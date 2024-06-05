<template>
  <div>
    <div class="row">
      <div class="col p-3">
        <router-link class="btn btn-primary" to="/todos/add">
          할일 추가
        </router-link>
        <button class="btn btn-primary ms-1" @click="fetchTodoList">
          새로 고침
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <TodoItem
            v-for="todoItem in todoList"
            :key="todoItem.id"
            :todoItem="todoItem"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import TodoItem from '@/components/TodoItem.vue';

// todoList의 타입을 명확하게 정의합니다.
const todoList = inject('todoList', []); // 기본값으로 빈 배열 설정

// actions 객체의 구조를 명확히 정의합니다.
const actions = inject('actions', { fetchTodoList: () => {} });

// actions에서 fetchTodoList를 추출합니다.
const { fetchTodoList } = actions;

if (!fetchTodoList) {
  console.error('fetchTodoList가 actions 객체에 정의되지 않았습니다.');
}
</script>
