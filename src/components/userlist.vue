<script setup>
import {Icon} from '@iconify/vue'
import {reactive, ref, shallowRef} from "vue"
import bank from "../components/icons/Bank.vue"

const showForm = ref(false);

const ID =ref(null);
const naam =ref();
const achternaam =ref();
const email =ref();
const geslacht =ref();

const Verwijder = (i) => {
    items.splice(i,1);
}

const clearInput = () => {
    ID.value = "";
    naam.value ="";
    achternaam.value ="";
    email.value ="";
}

const update = () => {
    items.push(
        {
            id : ID.value,
            naam : naam.value,
            Achternaam : achternaam.value,
            Email : email.value,
            Geslacht : geslacht.value,
            icon : bank,
        })       
};

const options = reactive([
    {
        text:'man',
        value:'m'
    },
    {
        text:'vrouw',
        value:'v'
    }
]);

const items = reactive([
    {
        id: "#DJF9220",
        naam : "Vandevelde",
        Achternaam : "Vermassen",
        Email : "Omhoog",
        Geslacht : "m",
        icon: bank,
    },
      {
        id: "#DJF9220",
        naam : "Vandevelde",
        Achternaam : "Vermassen",
        Email : "Omhoog",
        Geslacht : "m",
        icon: bank,
    },
      {
        id: "#DJF9220",
        naam : "Vandevelde",
        Achternaam : "Vermassen",
        Email : "Omhoog",
        Geslacht : "f",
        icon: bank,
    },
   
]);

</script>

<template>
    <div class="flex-col justify-between rounded-lg mx-10 bg-white opacity-60">
        <div class="flex items-center justify-between m-3">
            <h2 class="text-black font-medium">GEBRUIKERS</h2>
            <button @click="items.reverse()" class="inline-flex items-center rounded-lg px-4 bg-slate-200 hover:text-white">
               <Icon icon="material-symbols:format-list-bulleted-rounded" class="w-10 h-10"/>
            </button>
        </div>
        <table class="w-full">
            <thead class="font-bold">
            <tr class="text-black opacity-50">
            <td class="border-b-2 border-gray-600 px-3"></td>
            <td class="border-b-2 border-gray-600 px-3">ID</td>
            <td class="border-b-2 border-gray-600">Naam</td>
            <td class="py-4 border-b-2 border-gray-600">Achternaam</td>
            <td class="py-4 border-b-2 border-gray-600 text-center">Email</td>
            <td class="py-4 border-b-2 border-gray-600 text-center"></td>
            </tr>
        </thead>
            <tbody>
                <tr v-for="(items,i) in items" :key="items.id">
                    <td class="w-4">
                        <div class="flex items justify-between gap-y-3 p-3 rounded-full m-3" :class="items.Geslacht==='v' ? 'bg-fuchsia-900' : 'bg-slate-300'">
                           <Component :is="items.icon" class="w-10 h-10 "/>                                               
                            </div>                                       
                    </td>
                    <td>
                        <span class="text-black">{{items.id}}</span>
                    </td>
                     <td>
                        <span class="text-black">{{items.Achternaam}}</span>
                    </td>
                     <td>
                        <span class="text-black">{{items.naam}}</span>
                    </td>
                     <td>
                        <span class="text-black">{{items.Email}}</span>
                    </td>
                    <td>
                    <div class="flex flex-row items-center">
                    <button class=" bg-slate-200">####</button>
                    <button @click="Verwijder(i)" class="p-4">###</button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  
    <div class="flex flex-row">
        <button v-if="showForm" @click="showForm = !showForm" class="p-5 m-3">
            <Icon icon="ic:sharp-remove-circle-outline" class="w-10 h-10 rounded-full bg-white opacity-60 hover:scale-125"/>
        </button>
         <button v-else  @click="showForm = !showForm" class="p-5 m-3">
            <Icon icon="mingcute:add-circle-line" class="w-10 h-10 rounded-full bg-white opacity-60 hover:scale-125"/>
        </button>
    <div>

        <div v-if="showForm" class="flex flex-row m-4 p-4 gap-x-2">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="ID" v-model="ID">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="naam" type="text" placeholder="Naam" v-model="naam">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="achternaam" type="text" placeholder="Achternaam" v-model="achternaam">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="email">

            <select v-model="geslacht">
            <option v-for="option in options" :key="option.id" :value="option.value" class="mx-5">
                {{option.text}}
            </option>
            </select>

        <button @click="update">
            <Icon icon=ic:baseline-check-circle class="w-4 h-4 rounded-full bg-white opacity-60 hover:scale-125"/>
        </button>
        <button @click="clearInput">
            <Icon icon="mdi:bookmark-remove" class="w-4 h-4 rounded-full bg-white opacity-60 hover:scale-125"/>
        </button>
        </div>
        
    </div>
    

    </div>
</template>

<style>

</style>
