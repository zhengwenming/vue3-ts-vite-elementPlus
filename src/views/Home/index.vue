<template>
  <HelloWorld :msg="msg"></HelloWorld>
</template>

<script lang="ts">
import HelloWorld from "@/views/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    return {
      msg: "hello World",
    };
  },
});
</script>