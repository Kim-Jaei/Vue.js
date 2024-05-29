<template lang="">
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem',
  props: {
    name: String,
    checked: Boolean,
  },
};
</script>
<style lang=""></style>
