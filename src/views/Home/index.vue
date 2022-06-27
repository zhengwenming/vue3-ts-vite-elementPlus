<template>
  <div>home</div>
  <img src="@/assets/logo.png" alt="logo">
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {  },
  setup() {
    return {
      msg: "hello World",
    };
  },
});
</script>