<script>
import { ref } from "vue"
import BurgerMenu from "@/components/Menu/BurgerMenu.vue"
import { X } from "lucide-vue-next"

const open = ref(false)

export default {
  setup(_, { emit }) {
    function isOpenMenu() {
      open.value = !open.value
    }
    return {
      open,
      isOpenMenu,
      emit,
    }
  },
  components: { BurgerMenu, X },
}
</script>

<template>
  <header class="header">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img
            class="w-full"
            src="../../assets/images/logo_white.png"
            alt="logo"
          />
        </div>

        <nav>
          <div
            class="absolute right-6 top-6 cursor-pointer md:hidden bg-white rounded-full ring-opacity-0 shadow-none p-0"
            @click="isOpenMenu()"
          >
            <BurgerMenu />
          </div>

          <div
            class="flex gap-5 md:gap-0 md:flex-row flex-col items-center justify-center md:px-0 px-3 md:pb-0 md:static absolute bg-white md:bg-transparent w-full top-0 h-full duration-700 ease-in"
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

            <div class="flex flex-col md:flex-row gap-4 md:gap-0 w-full">
              <button
                id="header-create-account-button"
                @click="() => emit('create-account')"
                class="px-6 py-1.5 font-bold bg-brand-main text-white rounded-full focus:outline-none hover:underline"
              >
                Crie uma conta
              </button>
              <button
                id="header-login-button"
                @click="() => emit('login')"
                class="px-6 py-1.5 font-bold bg-white text-brand-main ring-1 ring-brand-main rounded-full focus:outline-none hover:underline"
              >
                Entrar
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Tenha um feedback. <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks com um
          <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>
        <div>
          <button
            @click="() => emit('create-account')"
            id="cta-create-account-button"
            class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-main focus:outline-none"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>
