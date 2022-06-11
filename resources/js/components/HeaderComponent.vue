<template>
  <header>
        <nav class="navbar navbar-light bg-white">
            <ul class="nav">
                <!--li class="nav-item">
                    <router-link :to="{name:'home'}">Contatti</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'contacts'}">Contatti</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'chi-siamo'}">Chi siamo</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'blog'}">My Posts</router-link>
                </li-->
                <li class="nav-item mr-5" v-for="(menuItem,index) in menu" :key="index">
                    <router-link :to="{name: menuItem.linkName}">{{ menuItem.label }}</router-link>
                </li>
            </ul>
        </nav>
  </header>
</template>

<script>
export default {
    name:'HeaderComponent',
    data(){
        return{
            menu:[
                {linkName:'home',label:'Home'},
                {linkName:'blog',label:'MyPosts'},
                {linkName:'chi-siamo',label:'Chi Siamo'},
                {linkName:'contacts',label:'Contacts'}
            ]
        }
    }
}
</script>

<style>

</style>
