<template>
  <div class="w-full flex items-center p-3 h-20 px-12 shadow">
    <div class="font-light flex items-center gap-2">
      <img
        class="w-10"
        src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        alt=""
      />
      <h1 class="text-2xl text-claro">Nike Shop</h1>
    </div>
    <div class="flex flex-1 justify-end relative">
      <div class="dropcart">
        <i class="fas fa-shopping-cart text-lg cursor-pointer text-claro"></i>
        <div
          class="
            
            z-50
            flex-col
            absolute
            top-10
            -right-10
            bg-claro
            p-5
            rounded-md
            droplist
          "
        >
          <i
            class="fas fa-sort-up absolute fa-2x -top-3 right-9 text-claro"
          ></i>
          <ul class="text-white">
            <li class="border-b-2">
              <i class="fas fa-window-close text-red-500 mr-2"></i> Nike SB Dun
              Low Pro | x1 | R$ 640,00
            </li>
            <li class="border-b-2">
              <i class="fas fa-window-close text-red-500 mr-2"></i> Nike SB Dun
              Low Pro | x1 | R$ 640,00
            </li>
            <li class="mt-3">
              Total:
              <span class="bg-green-400 p-1 rounded">R$ 1280,00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
</style>