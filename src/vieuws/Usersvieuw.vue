<template>
    <div>
    <intro-kaart/>
    <div class="flex ml-3 mb-3">
            <span class="text-white text-center"><Icon icon="mingcute:user-3-fill" class="items-center w-12 h-12"/></span>
            <h1 class="text-white text-4xl ml-4 font-bold">USERS</h1>
        </div>
    </div>
    <userlist/>
</template>

<script setup>
import introKaart from "../components/introKaart.vue"
import Userlist from "../components/userlist.vue"
import {Icon} from '@iconify/vue'
import UsersVue from "../components/icons/Users.vue"



</script>

