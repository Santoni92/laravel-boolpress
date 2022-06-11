<template>
  <div>
     <div>{{ title }}</div>
     <!-- {{ content }} -->
     <div>{{ trimmedContent }}</div>
      <img :src="'storage/' + cover" :alt="title">
  </div>
</template>

<script>
export default {
    name:'PostCardComponent',
    props:['title','content','cover'],
    computed:{
        trimmedContent(){
            const shortContent = this.content.lenght > 20 ? this.content.substring(0,15) : this.content;
            return shortContent;
        }
    }
}
</script>

<style scoped lang="scss">
    img{
        max-width:200px;
        }
</style>
