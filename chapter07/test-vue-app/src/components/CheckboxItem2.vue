<template lang="">
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem',
  props: ['idol'],
};
</script>
<style lang=""></style>
