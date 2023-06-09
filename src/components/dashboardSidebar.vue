<script setup>
import {Icon} from '@iconify/vue'
import Bank from './icons/Bank.vue'
import Shop from './icons/Shop.vue'
import Users from './icons/Users.vue'
import Setting from './icons/Setting.vue'
import Logout from './icons/Logout.vue'
import loo from './icons/LOO.vue'
</script>

<template>
<aside class="flex items-stretch h-full">
  <div class="flex flex-col bg-slate-950 h-full gap-2">
    <div class="mt-4 p-3">
  <button class="bg-slate-700 rounded-xl border-4 border-gray-300 p2 bg-gradient-to-r from-pink-500 to-yellow-500 self-center opacity-60">
   <loo class="w-24 h-24 p-2"/>
   <span class="justify-center"><h1 class="text-center font-bold">EASIEPAY</h1></span>
  </button>
    </div>
  <button class="rounded-xl border-4 border-gray-900 hover:border-slate-700 p2 self-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
   <router-link class="button" to="/Home"> <bank class="w-20 h-20 p-1"/>
     </router-link>
  </button>
  <button class="bg-slate-700 rounded-xl border-4 border-gray-900  hover:border-slate-700 p2 self-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
     <router-link class="button" to="/Banks"> <shop class="w-20 h-20"/>
     </router-link>
  </button>
   <button class="bg-slate-700 rounded-xl border-4 border-gray-900  hover:border-slate-700 p2 self-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
   <router-link class="button" to="/Users"> <users class="w-20 h-20"/>
     </router-link>
  </button>
   <button class="bg-slate-700 rounded-xl  p2 self-center mt-36 hover:scale-90 hover:rotate-90 ">
      <router-link class="button" to="/Settings"><setting class="w-16 h-16"/></router-link>
  </button>
   <button class="bg-slate-700 rounded-xl p2 self-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 hover:scale-90 mb-5">
    <router-link class="button" to="/Logout"><logout class="w-16 h-16"/></router-link>
  </button>
  </div>
</aside>
</template>