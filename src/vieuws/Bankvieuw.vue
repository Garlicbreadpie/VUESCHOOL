<template>
    <div>
<intro-kaart/>
    </div>
        <div class="flex ml-3">
            <span class="text-white text-center"><Icon icon="mingcute:bank-line" class="items-center w-12 h-12"/></span>
            <h1 class="text-white text-4xl ml-4 font-bold">BANKS</h1>
        </div>
    <div class="flex p-3 m-3">
        <div class="bg-white flex rounded-lg opacity-60 items-center mt-2">
         <Bar/>
        </div>
        <div class="bg-white flex-1 rounded-lg opacity-60 mx-5 gap-y-2 items-center p-5 mt-2 ">
         <Pie/>
        </div>
        <div class="bg-white flex-auto rounded-lg opacity-60 mx-5 gap-y-2 items-center p-5 mt-2">
          <Bars/>
        </div>       
    </div>
</template>

<script setup>
import {Icon} from '@iconify/vue'
import introKaart from '../components/introKaart.vue'
import Bar from '../components/chart1.vue'
import Pie from '../components/chart.ts'
import Bars from '../components/chart2.ts'


</script>

