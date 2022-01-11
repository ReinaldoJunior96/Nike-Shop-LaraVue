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
            hidden
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
            <li
              v-for="produto in this.$store.state.carrinho"
              :key="produto"
              class="border-b-2"
            >
              <i class="fas fa-window-close text-red-500 mr-2"></i>
              {{ produto.produto }} | x1 |
              {{
                produto.preco.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })
              }}
            </li>
          </ul>
          <ul>
            <li class="mt-3">
              <span class="text-white">Total: </span>
              <span class="bg-green-400 ml-3 p-1 rounded"
                >{{
                  calcularTotal.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })
                }}
              </span>
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
  data() {
    return {
      precoUnitario: Number,
    };
  },
  methods: {
    calcularUn(preco) {
      return (this.precoUnitario = preco);
    },
  },
  computed: {
    calcularTotal() {
      var totalCarrinho = 0;
      this.$store.state.carrinho.filter(function (items) {
        totalCarrinho += items.preco;
      });
      return totalCarrinho;
    },
  },
};
</script>

<style>
</style>