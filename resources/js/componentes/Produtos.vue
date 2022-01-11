<template>
  <!-- UI card from https://uxplanet.org/ultimate-guide-for-designing-ui-cards-59488a91b44f -->
  <div class="flex flex-col justify-cente">
    <div class="pl-24 pt-10">
      <h1 class="text-2xl text-claro">Nike Dunk SB</h1>
    </div>

    <div class="relative flex flex-wrap justify-evenly">
      <div
        v-for="produto in this.$store.state.produtos"
        :key="produto"
        class="
          relative
          max-w-sm
          min-w-[340px]
          bg-white
          shadow-md
          rounded-3xl
          p-2
          mx-1
          my-3
          cursor-pointer
        "
      >
        <div class="overflow-x-hidden rounded-2xl relative">
          <img
            class="h-auto rounded-2xl w-full object-cover"
            :src="produto.photo"
          />
          <p
            class="
              absolute
              right-2
              top-2
              bg-white
              rounded-full
              p-2
              cursor-pointer
              group
            "
          >
            <i
              class="
                fas
                fa-shopping-cart
                text-lg
                cursor-pointer
                text-blue-800
                hover:text-gray-600
              "
              @click="adicionarAoCarrinho(produto)"
            ></i>
          </p>
        </div>
        <div class="mt-4 pl-2 mb-2 flex justify-between">
          <div>
            <p class="text-lg font-semibold text-claro mb-0">
              {{ produto.produto }}
            </p>
            <p class="text-md text-gray-800 mt-0">R$ {{ produto.preco }}</p>
          </div>
          <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <i
              class="far fa-heart text-xl text-gray-400 hover:text-red-500"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produtos",
  methods:{
    adicionarAoCarrinho(param){
      this.$store.commit('addToCart', param)
    }
  }
};
</script>

<style>
</style>