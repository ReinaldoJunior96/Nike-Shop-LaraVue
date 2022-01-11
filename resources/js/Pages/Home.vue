<template>
  <div class="">
    <div class="flex justify-center items-center gap-10 mt-24 mb-12">
      <img class="w-22" src="https://laravel.com/img/logotype.min.svg" alt="" />
      <img class="w-10" src="https://vuejs.org/images/logo.svg" alt="" />
      <img
        class="w-16"
        src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
        alt=""
      />
    </div>
    <div class="flex justify-center px-36">
      <div class="bg-white w-full rounded-md shadow-lg h-[700px]">
        <Menu/>
        <Produtos />
      </div>
    </div>
  </div>
</template>

<script>
import Produtos from "../componentes/Produtos.vue";
import Menu from "../componentes/Menu.vue";
export default {
  components: {
    Produtos,
    Menu,
  },
};
</script>

<style>
</style>