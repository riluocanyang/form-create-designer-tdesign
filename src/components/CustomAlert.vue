<template>
  <t-alert
    :style="[
      {width: width ? `${widthPercent}%` : `${widthPx}px`}, 
      { margin: center ? '0 auto' : '' }
    ]"
  >
    {{ message }}
  </t-alert>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: [String],
    width: [Boolean],
    widthPercent: [String],
    widthPx: [String],
    center: [Boolean],
  },
  setup() {},
});
</script>
<style scoped>
</style>