<template>
  <div class="_fc_default-value">
    <t-input-adornment :append="tldSelect">
      <t-input placeholder="请输入内容" :value="resValue" @change="handleInputChange" :default-value="defaultValue"/>
    </t-input-adornment>
  </div>
</template>
<script lang="jsx">
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "CustomDefaultValue",
  emits: ["input", "update:modelValue"],
  props: {
    modelValue: [String], // 之前填充的值
    defaultValue: [String], // 通过props传过来的值
  },
  setup(props, { emit }) {
    const { defaultValue, modelValue } = props;
    const selectOptions = [
      {
        label: '当前用户账号',
        value: '${currentUserId}'
      },
      {
        label: '当前用户名',
        value: '${currentUserName}'
      },
      {
        label: '当前用户所属机构id',
        value: '${currentUserDeptId}'
      },
      {
        label: '当前用户所属机构名',
        value: '${currentUserDeptName}'
      },
      {
        label: '流程发起人账号',
        value: '${ZXBPM_STARTER}'
      },
      {
        label: '流程发起人名',
        value: '${ZXBPM_STARTER_NAME}'
      },
      {
        label: '流程发起人所属机构id',
        value: '${ZXBPM_STARTER_DEPT}'
      },
      {
        label: '流程发起人所属机构名',
        value: '${ZXBPM_STARTER_DEPT_NAME}'
      },
      {
        label: '当前时间',
        value: '${currentTime}'
      },
      {
        label: '当前日期',
        value: '${currentDate}'
      }
    ]
    const selectedValue = ref('')
    const inputValue = ref('')
    const resValue = ref(modelValue || defaultValue)

    const tldSelect = ref(() => (
      <t-select
        autoWidth
        options={selectOptions}
        defaultValue="表达式"
        onChange={handleSelectChange}
        style={{ width: '90px'}}
      />
    ));
    
    function handleInputChange(value) {
      resValue.value = value
      emit('update:modelValue', resValue.value);
    }

    function handleSelectChange(value) {
      resValue.value = resValue.value + value
      emit('update:modelValue', resValue.value);
    }

    return {
      defaultValue,
      // modelValue,
      tldSelect,
      selectedValue,
      inputValue,
      resValue,
      handleInputChange
    }
  },
});
</script>
<style scoped>
::v-deep(.t-input--auto-width) {
  width: 90px !important
}
</style>
