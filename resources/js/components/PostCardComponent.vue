<template>
  <div>
      {{ title }}

      <img :src="'storage/' + cover" :alt="title">
  </div>
</template>

<script>
export default {
    name:'PostCardComponent',
    props:['title','cover']
}
</script>

<style>

</style>
