<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">404 - Not Found</div>
         <div class="col-12 text-center">
            <router-link :to=" { name:'home' } ">Back to Home</router-link> <!--ci permette di definire dove inviare l'utente quando clicca-->
         </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'NotFoundComponent'
}
</script>

<style>

</style>
