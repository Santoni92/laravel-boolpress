<template>
  <div class="container">
      <div class="row">
          <div class="col-12  text-center">
              My Blog
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'BlogComponent',
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:8000/api/posts').then( (response)=>{
            console.log(response);

            if(response.status === 200 && response.data.success)
            {
                this.posts = response.data.results;
            }
        }).catch(error=>{
            console.log(error);
        })
     }
}
</script>

<style>

</style>
