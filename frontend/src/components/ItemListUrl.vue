<template>
  <div class="row wrapper-item-list py-1">
    <div class="col-1 d-flex justify-content-start align-items-center">
      {{ index + 1 }}
    </div>
    <div class="col-7 d-flex justify-content-start d-flex align-items-center">
      <div class="main-url-content ellipsis-item">
        {{ urlItem.url_basic }}
      </div>
    </div>

    <div
      class="col-3 col-lg-4 ellipsis-item d-flex justify-content-end align-items-center"
    >
      <router-link :to="`/r/${urlItem.shortned_param}`">
        <span class="p-1">
          {{ urlItem.shortned_param }}
        </span>
      </router-link>
    </div>

    <div class="col-1 d-flex justify-content-end align-items-center">
      <span class="text-danger p-2 delete-clickable" @click="handleDeleteUrl">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  urlItem: Object,
  isTopUrls: Boolean,
  index: Number,
});

const deleteUrl = (url_register_id) => {
  return store.dispatch("DELETE_URL", url_register_id);
};

const handleDeleteUrl = (e) => {
  e.preventDefault();
  deleteUrl(props.urlItem.url_register_id);
};
</script>

<style lang="scss" scoped>
form {
  d-flex input {
    border: 2px solid black;
  }
}

.wrapper-item-list {
  .ellipsis-item {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .delete-clickable {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
