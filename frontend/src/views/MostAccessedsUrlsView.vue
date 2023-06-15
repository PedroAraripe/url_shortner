<template>
  <div class="mx-3">
    <div class="mt-4">
      <div class="row">
        <div class="col-12 d-flex mb-4 mb-lg-3">
          <h2 class="d-none d-lg-block">Top 100 mais acessadas</h2>
          <h3 class="d-lg-none">Top 100 mais acessadas</h3>
        </div>
      </div>
      <div class="p-3 rounded-bottom rounded-top">
        <div v-if="!urls.length" class="p-2 py-5">
          Sem urls para serem listadas
        </div>
      </div>
    </div>
    <UrlsTable :urls="urls" />
  </div>
</template>

<script lang="ts" setup>
import UrlsTable from "@/components/UrlsTable";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const getAccessedUrls = () => {
  return store.dispatch("GET_TOP_URLS");
};

getAccessedUrls();

const urls = computed(() => store.state.urls_most_accesseds);
</script>
