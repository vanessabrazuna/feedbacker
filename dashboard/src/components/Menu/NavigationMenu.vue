<script setup>
import { X } from 'lucide-vue-next'
import { ref } from 'vue'
import BurgerMenu from '@/components/Menu/BurgerMenu.vue'

const open = ref(false)

// export default {
//   setup(_, { emit }) {
//     return { emit }
//   }
// }

function isOpenMenu() {
  open.value = !open.value

  return {
    open,
    isOpenMenu
  }
}
</script>

<template>
  <nav>
    <div
      class="absolute right-6 top-6 cursor-pointer md:hidden bg-white rounded-full ring-opacity-0 shadow-none p-0"
      @click="isOpenMenu()"
    >
      <BurgerMenu />
    </div>

    <div
      class="flex gap-5 md:gap-0 md:flex-row flex-col md:items-center md:justify-center md:px-0 px-3 md:pb-0 pt-64 md:pt-0 md:static absolute bg-white md:bg-transparent md:w-auto w-full top-0 h-full duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <div
        class="absolute right-6 top-6 cursor-pointer md:hidden rounded-full bg-white"
        @click="isOpenMenu()"
      >
        <button
          class="flex items-center justify-center text-brand-main rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
        >
          <X class="flex flex-col justify-between w-[25px] h-[25px]" />
        </button>
      </div>

      <button
        class="px-6 py-1.5 font-bold bg-brand-main text-white rounded-full focus:outline-none hover:underline"
      >
        Crie uma conta
      </button>
      <button
        class="px-6 py-1.5 font-bold bg-white text-brand-main ring-1 ring-brand-main rounded-full focus:outline-none hover:underline"
        @click="() => emitLogin('login')"
      >
        Entrar
      </button>
    </div>
  </nav>
</template>
