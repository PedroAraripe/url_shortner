<template>
  <div class="mx-3">
    <RegisterUrl />

    <div class="mt-4">
      <div class="row">
        <div class="col-12 d-flex">
          <h2 class="d-none d-lg-block">Suas Urls</h2>
          <h3 class="d-lg-none mb-4">Suas Urls</h3>
        </div>
      </div>
      <div class="p-3 rounded-bottom rounded-top wrapper-items-url">
        <div v-if="!urls.length" class="p-2 py-5">
          Sem urls para serem listadas
        </div>

        <ItemListUrl
          v-for="(urlItem, index) in urls"
          :key="urlItem.url_register_id"
          :url-item="urlItem"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegisterUrl from "@/components/RegisterUrl";
import ItemListUrl from "@/components/ItemListUrl";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const urls = computed(() => store.state.urls);
</script>

<style lang="scss" scoped>
.wrapper-items-url {
  background-color: #f0fff8;
}
</style>
