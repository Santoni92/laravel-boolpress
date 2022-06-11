<template>
  <div class="container">
      <div class="row">

          <div class="col-12  text-center">
              My Posts
          </div>

          <div v-if="posts.lenght>0">
            <PostCardListComponent :posts="posts"/>
          </div>

          <div v-else>Caricamento in corso</div>

        </div>
    </div>
</template>

<script>
import PostCardListComponent from '../components/PostCardListComponent'
export default {
    name:'BlogComponent',
    components:{
        PostCardListComponent
    },
    data(){
        return {
            posts: []
        }
    },
    mounted(){  //oppure created()
        window.axios.get('http://127.0.0.1:8000/api/posts').then( (response)=>{
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
