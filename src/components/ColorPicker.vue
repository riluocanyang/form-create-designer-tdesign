<template>
  <div class="_fc_color_picker">
    <t-color-picker
      :value="colorValue"
      :default-value="defaultValue"
      :swatchColors="swatches"
      @change="onChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: "CustomColorPicker",
  props: {
    modelValue: [String],  // 对应 value 字段，否则不生效
    defaultValue: [String],
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { defaultValue } = props;
    const colorValue = ref('')
    const swatches = ref([
      '#FFCC33',
      '#18A058',
      '#8b0000'
    ])

    function onChange(value) {
      emit('update:modelValue', value);
    }
    
    watch(
      () => props.modelValue,
      (newValue) => {
        colorValue.value = newValue || defaultValue
      },
      {}
    )
    
    return {
      defaultValue,
      swatches,
      colorValue,
      onChange,
    }
  },
})
</script>
