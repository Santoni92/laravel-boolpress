//questo è il file in cui andiamo a scrivere le rotte gestite internamente da vue

import Vue from 'vue';  //diciamo di importare vue

import VueRouter from 'vue-router'; //diciamo di importare il plugin

Vue.use(VueRouter); //diciamo di usare il plugin

import HomeComponent from './pages/HomeComponent';
import ContactsComponent from './pages/ContactsComponent';
import WhoWeAreComponent from './pages/WhoWeAreComponent'
import BlogComponent from './pages/BlogComponent';
import NotFoundComponent from './pages/NotFoundComponent';
const router = new VueRouter({
    mode:'history', //è facoltativo;'history' permette l'utilizzo di url normali
    routes:[ //array di rotte disponibili nella parte di front office
        {
            path:'/',   //a quale indirizzo è associata questa rotta(è un url virtuale)
            name:'home',    //do il nome alla rotta
            component:HomeComponent //gli dico quale componente vue è associato a questa rotta
        },
        {
            path:'/contacts',
            name:'contacts',
            component:ContactsComponent
        },
        {
            path:'/chi-siamo',
            name:'chi-siamo',
            component:WhoWeAreComponent
        },
        {
            path:'/blog',
            name:'blog',
            component:BlogComponent
        },
        {   //deve essere messa all'ultimo posto
            path:'/*',
            name:'notFound',
            component:NotFoundComponent
        }
    ]
})
export default router;  //esporto la const router contenente l'array di rotte
