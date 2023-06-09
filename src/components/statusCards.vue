<script setup>
import {ref} from "vue"
import Shop from './icons/Shop.vue'
import Users from './icons/Users.vue'
import Payment from './icons/Payment.vue'
import {Icon} from "@iconify/vue"



const status = [
    {
        title: "GEBRUIKERS",
        percentage : "+2,43",
        aantal : "122200",
        status : "Omhoog",
        icon : Shop,
    },
    {
        title: "SHOPS",
        percentage : "-4,43",
        aantal : "340",
        status : "Omlaag",
        icon : Users,
    },
    {
        title: "PAYMENTS",
        percentage : "-7,43",
        aantal : "422023",
        status : "Omlaag",
        icon : Payment,
    },
];
</script>

<template>
    <div class="flex gap-5">
    <div v-for="status in status" :key="status.id" class="flex-row p-5 w-1/3 rounded-lg bg-slate-950 opacity-60 mx-5 gap-y-2">
    <h1 class="font-extrabold text-2xl text-zinc-300 text-end mr-6"> <span>{{status.aantal}}</span></h1>
    <div class="flex-row">      
         <Component class="w-32 h-32 ml-10" :is ="status.icon"/>
         <div class="flex justify-end items-center">
         <h1 class="font-extrabold text-xl mx-1" :class="status.status==='Omlaag'? 'text-orange-700': 'text-green-900'">{{status.percentage}}</h1>
         <div class="text-gray-500">      
         <Icon class="w-7 h-7" :class="status.status==='Omlaag'?'text-orange-700':'text-green-900'" icon="ic:baseline-percent"/>
         </div>   
         </div>         
    </div>
     <h1 class="font-medium text-lg text-gray-300 underline underline-offset-8"> <span>{{status.title}}</span></h1> 
    </div>   

    </div>
</template>
