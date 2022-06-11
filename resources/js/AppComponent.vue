<template>
    <div>
         <HeaderComponent/>

        <!-- ricorda di wrappare tutto in un div -->
        <!--div>work in progress</div-->
        <router-view></router-view> <!--per renderizzare la parte navigabile;individua il posto dove andare a renderizzare i componenti associati ad una rotta vue.Per renderizzare quello che clicco-->
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
export default {
    name:'AppComponent',
    components:{
        HeaderComponent
    }
}
</script>

<style>

</style>
