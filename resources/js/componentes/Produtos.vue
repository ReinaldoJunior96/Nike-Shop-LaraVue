<template>
  <!-- UI card from https://uxplanet.org/ultimate-guide-for-designing-ui-cards-59488a91b44f -->
  <div class="flex flex-col justify-cente">
    <div class="pl-24 pt-10">
      <h1 class="text-2xl text-claro">Nike Dunk SB</h1>
    </div>

    <div class="relative flex flex-wrap justify-evenly">
      <div
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
            src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-dunk-low-retro-DD1391-600-1-11624383736.jpg"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </p>
        </div>
        <div class="mt-4 pl-2 mb-2 flex justify-between">
          <div>
            <p class="text-lg font-semibold text-claro mb-0">Nike SB Dun Low Pro</p>
            <p class="text-md text-gray-800 mt-0">R$ 640,00</p>
          </div>
          <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <i class="far fa-heart text-xl text-gray-400 hover:text-red-500"></i>
          </div>
        </div>
      </div>

      <div
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
            src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-unissex-BQ6817-010-1-11632839318.jpg"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </p>
        </div>
        <div class="mt-4 pl-2 mb-2 flex justify-between">
          <div>
            <p class="text-lg font-semibold text-claro mb-0">Nike SB Dunk Low Pro</p>
            <p class="text-md text-gray-800 mt-0">R$ 900,00</p>
          </div>
          <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <i class="far fa-heart text-xl text-gray-400 hover:text-red-500"></i>
          </div>
        </div>
      </div>

      <div
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
            src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-BQ6817-101-1-11624978768.jpg"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </p>
        </div>
        <div class="mt-4 pl-2 mb-2 flex justify-between">
          <div>
            <p class="text-lg font-semibold text-claro mb-0">Nike SB Dunk Low "Laser Blue"</p>
            <p class="text-md text-gray-800 mt-0">R$ 950,00</p>
          </div>
          <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <i class="far fa-heart text-xl text-gray-400 hover:text-red-500"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produtos",
};
</script>

<style>
</style>