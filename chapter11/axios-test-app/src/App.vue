<template lang="">
  <div>
    <h1>실행중이니</h1>
  </div>
</template>
<script setup>
import axios from 'axios';

const requestAPI = () => {
  const url = 'http://localhost:3000/todos/1';
  axios
    .get(url)
    .then((response) => {
      console.log('# 응답객체 : ', response);
    })
    .catch();
};
</script>
<style lang=""></style>
