<template>
  <div class="py-4 d-flex">
    <router-link
      v-for="(itemRoute, index) in itemsRoutes"
      :key="itemRoute.path"
      :to="itemRoute.path"
      :class="`${index != itemsRoutes.length - 1 ? 'pr-2 mx-4' : ''}`"
      class="nav-item"
    >
      <div class="h6">
        {{ itemRoute.name }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const itemsRoutes = ref([
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Top 100",
    path: "/most-accessed",
  },
  {
    name: "Login",
    path: "/login",
  },
]);
</script>

<style lang="scss" scoped>
.nav-item {
  * {
    transition: 0.3 all;
  }
  color: rgb(22, 95, 22);

  &:hover {
    color: rgb(49, 148, 49);
    text-decoration: none !important;
  }
}
</style>
