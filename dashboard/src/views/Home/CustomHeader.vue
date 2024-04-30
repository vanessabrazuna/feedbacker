<script setup>
import logoWhite from '@/assets/images/logo_white.png'
import NavigationMenu from '@/components/Menu/NavigationMenu.vue'
</script>

<template>
  <header class="h-[700px] w-full bg-brand-main flex justify-center">
    <div class="header-group flex flex-col w-4/5 max-w-6xl">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img :src="logoWhite" alt="logo" class="w-full" />
        </div>

        <NavigationMenu />
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white leading-10">
          Tenha um feedback. <br />
          E faça seus clientes mais <br class="hidden lg:inline-block" />
          felizes!
        </h1>
        <p class="text-lg font-medium text-white mt-3 leading-7">
          Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block" />
          simples widget na página.
        </p>
        <div>
          <button
            class="px-6 py-1.5 mt-8 font-bold bg-white text-brand-main rounded-full focus:outline-none hover:underline"
          >
            Crie uma conta grátis
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-position: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
