<script setup>
import Calender from './icons/Calender.vue'
import Klok from './icons/Klok.vue'
import Shop from './icons/Shop.vue'

const klokDag = () => {
    const current = new Date();
    const dateTime = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return dateTime;
}
const klokUur = () => {
    const current = new Date();
    const dateTime = `${current.getUTCHours()}:${current.getMinutes()}`;

    return dateTime;
}

const kal = {
    Kalender: Calender,
    Klok : Klok
}
</script>

<template>
<main class="flex min-w-max">
   <header class="p-4 flex-col">   
    <h1 class="font-semibold text-5xl text-white opacity-60 mb-2">Dashboard</h1> 
    <div class="font-bold text-white opacity-30 flex items-center text-lg"><Component class="mr-2" :is ="kal.Kalender"/>{{klokDag()}}</div> 
    <div class="font-bold text-white opacity-30 flex items-center"><Component class="mr-2" :is ="kal.Klok"/>{{klokUur()}}</div>
   </header>
</main>
 <hr class="h-0.5 mx-4 border-orange-300 opacity-20 py-4" />
</template>


