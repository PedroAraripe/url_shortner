<template>
  <div class="mx-3">
    <RegisterUrl />

    <div class="mt-4">
      <ItemListUrl
        v-for="(urlItem, index) in urlsSaved"
        :key="urlItem.url_register_id"
        :url-item="urlItem"
        :index="index"
      />
      <!-- is-top-charts="true" -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegisterUrl from "@/components/RegisterUrl";
import ItemListUrl from "@/components/ItemListUrl";
</script>

<style lang="scss" scoped></style>
