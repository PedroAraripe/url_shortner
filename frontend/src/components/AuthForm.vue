<!-- eslint-disable prettier/prettier -->
<template>
<div class="wrapper-form">
  <form @submit="handleSubmit" class="text-left p-4 p-lg-5">
    <div class="form-group">
      <label for="exampleFormControlInput1">Login</label>
      <input v-model="form.login" required type="text" class="form-control" placeholder="login">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Senha</label>
      <input v-model="form.password" required type="password" class="form-control" placeholder="sua senha">
    </div>

    <slot />
  </form>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IUser } from "@/interfaces/IUser";
import { ref } from "vue";
import type { Ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  isLogging: Boolean,
});

const store = useStore();

const form: Ref<IUser> = ref({});

const handleSubmit = (e) => {
  e.preventDefault();

  const action = props.isLogging ? "LOGIN_USER" : "CREATE_USER";
  store.dispatch(action, form.value).then((r) => {
    if (props.isLogging && !(r instanceof Error) && r) {
      router.push({ path: "/" });
    }
  });
};
</script>

<style lang="scss">
.wrapper-form {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (min-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }

  form {
    background: $base-blue;

    label {
      font-weight: bold;
    }
  }
}
</style>
