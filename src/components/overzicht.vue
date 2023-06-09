<script setup>
import filter from './icons/Filter.vue'
import {Icon} from "@iconify/vue"
import { reactive } from 'vue';


// ref vs reactive joo
const betalingen = reactive([
    {
        Gebruiker: "Mohammed",
        BegunstigdeWebshop : "H&M",
        Status : "true",
        Bedrag : "€12122",
        icon : filter,
    },
     {
        Gebruiker: "Ali",
        BegunstigdeWebshop : "ZARA",
        Status : "true",
        Bedrag : "€3122",
        icon : filter,
    },
     {
        Gebruiker: "Gustaaf",
        BegunstigdeWebshop : "BOERENBOND",
        Status : "false",
        Bedrag : "323",
        icon : filter,
    },
    {
        Gebruiker: "Mohammed",
        BegunstigdeWebshop : "COLRUYT",
        Status : "true",
        Bedrag : "€3443",
        icon : filter,
    },
     {
        Gebruiker: "Ali",
        BegunstigdeWebshop : "WEBA MEUBLEN",
        Status : "false",
        Bedrag : "€122",
        icon : filter,
    },
     {
        Gebruiker: "Steve",
        BegunstigdeWebshop : "IKEA",
        Status : "true",
        Bedrag : "€233",
        icon : filter,
    }
  
]);

</script>

<template>
    <div class ="p-6 bg-slate-600 opacity-60 rounded lg m-3">
    <div class="flex justify-between items-center pb-1">
        <h3 class="text-bold font-semibold text-left text-white text-2xl">Order Report</h3>
        <div class="flex hover:scale-90">
    <button @click="betalingen.reverse()" class="py-6 px-4 rounded-xl border-2 border-gray-600 font-semibold text-white opacity-60 hover:border-slate-200">
        <Icon icon="material-symbols:format-list-bulleted-rounded" class="w-10 h-10 text-white"/>
    </button>
    </div>
    </div>

    <table class="w-full">
        <thead class="font-bold">
            <tr class="text-white opacity-50">
            <td class="py-4 border-b-2 border-gray-600 px-3">Klant</td>
            <td class="py-4 border-b-2 border-gray-600">BegunstigdeWebshop</td>
            <td class="py-4 border-b-2 border-gray-600">Bedrag</td>
            <td class="py-4 border-b-2 border-gray-600 text-center">Status</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="bet in betalingen" :key="bet.id" class="text-medium text-white p-3 odd: bg-pink-950 opacity-60 even:bg-zinc-800">
                <td class="py-4 text-left font-bold px-4">{{bet.Gebruiker}}</td>
                <td class="py-4 font-light">{{bet.BegunstigdeWebshop}}</td>
                <td class="py-4">{{bet.Bedrag}}</td> 
                <td class="py-4">
                    <div class="flex justify-center">
                        <span class="py-2 w-16 items-center px-2">
                            <div class="w-11 text-center font-bold rounded-full text-white" :class="bet.Status==='true'?'bg-green-800':'bg-red-700'">{{bet.Status}}</div>
                        </span>
                    </div>
                    </td>                   
                    </tr>
        </tbody>
    </table>
    </div>
    
</template>



