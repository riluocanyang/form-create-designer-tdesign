<template>
  <div class="_fc_table_opt">
    <t-table
      row-key="id"
      :data="modelValue"
      :columns="columns"
      size="small"
      :stripe="false"
    />
    <t-button text @click="add">
      <template #icon>
        <i class="fc-icon icon-add"></i>
      </template>
      {{ t("tableOptions.add") }}
    </t-button>
  </div>
</template>
<script lang="jsx">
import { defineComponent, h, inject } from "vue";
export default defineComponent({
  name: "TableOptions",
  inheritAttrs: false,
  props: {
    modelValue: [Object, Array, String],
  },
  emits: ["input", "update:modelValue"],
  setup(props, { emit }) {
    console.log('TableOptions')
    const t = inject("designer").setupState.t;
    const { modelValue } = props;
    if (!Array.isArray(modelValue)) {
      emit("input", []);
    }

    const createColumns = ({ del }) => {
      return [
        {
          title: "label",
          colKey: "label",
          cell: (h, { row, rowIndex }) => {
            return (
              <t-input
                value={row.label}
                onChange={(v) => {
                  modelValue[rowIndex].label = v;
                  onInput(row);
                }}
              />
            );
          },
        },
        {
          title: "value",
          colKey: "value",
          cell: (h, { row, rowIndex }) => {
            return (
              <t-input
                value={row.value.toString()}
                onChange={(v) => {
                  modelValue[rowIndex].value = v;
                  onInput(row);
                }}
              />
            );
          },
        },
        {
          title: "操作",
          colKey: "action",
          width: 50,
          align: "center",
          cell: (h, { rowIndex }) => {
            return (
              <t-button size="small" onClick={() => del(rowIndex)}>
                {" "}
                <i class="fc-icon icon-delete"></i>
              </t-button>
            );
          },
        },
      ];
    };
    const columns = createColumns({
      del(index) {
        del(index);
      },
    });
    function onInput(item) {
      if (item.label && item.value) {
        input();
      }
    }

    function input() {
      emit("update:modelValue", modelValue);
    }

    function add() {
      modelValue.push({
        label: "",
        value: "",
      });
    }

    function del(idx) {
      modelValue.splice(idx, 1);
      input(modelValue);
    }

    return {
      t,
      add,
      columns,
      modelValue,
    };
  },
});
</script>
<style scoped>
._fc_table_opt {
  width: 100%;
}
</style>
