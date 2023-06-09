<template>
    <div>
<intro-kaart/>
<div class="flex ml-3 mb-3">
            <span class="text-white text-center"><Icon icon="mingcute:home-3-fill" class="items-center w-12 h-12"/></span>
            <h1 class="text-white text-4xl ml-4 font-bold">HOME</h1>
        </div>
<status-cards/>
<overzicht/>
    </div>
</template>

<script setup>
import introKaart from '../components/introKaart.vue'
import statusCards from '../components/statusCards.vue'
import overzicht from '../components/overzicht.vue'
import {Icon} from '@iconify/vue'
</script>

