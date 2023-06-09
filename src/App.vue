<script>
import dashboardSidebar from './components/dashboardSidebar.vue'
import introKaart from './components/introKaart.vue'
import statusCards from './components/statusCards.vue'
import overzicht from './components/overzicht.vue'

export default {

  components: {
    dashboardSidebar,
    statusCards,
    introKaart , 
    overzicht,  
  }
  

};
</script>

<template>
  <div class="flex bg-slate-800 w-full h-full">
      <dashboard-sidebar /> 
    <div class="flex flex-col flex-1 bg-slate-800"> 
      <router-view v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <div :key="route.name">  
      <component :is="Component"></component>
    </div>
  </transition>
</router-view>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>




// altijd in u template lowercase me - gebruiken!
// comp doorgevne via components: .. 







