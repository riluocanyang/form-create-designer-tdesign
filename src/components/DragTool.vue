<template>
  <div
    class="drag-tool"
    @click.stop="active"
    :class="{ active: state.active === id }"
  >
    <div class="drag-mask" v-if="mask"></div>
    <div class="drag-l">
      <div
        class="drag-btn _fc-drag-btn"
        v-if="state.active === id && dragBtn !== false"
        style="cursor: move"
      >
        <t-tooltip trigger="hover">
          <template #content> 拖拽 </template>
          <i class="fc-icon icon-move"></i>
        </t-tooltip>
      </div>
    </div>
    <div class="drag-r">
      <div class="drag-btn" @click="$emit('create')">
        <t-tooltip trigger="hover">
          <template #content> 增加 </template>
          <i class="fc-icon icon-add"></i>
        </t-tooltip>
      </div>
      <div class="drag-btn" @click="$emit('copy')">
        <t-tooltip trigger="hover">
          <template #content> 复制 </template>
          <i class="fc-icon icon-copy"></i>
        </t-tooltip>
      </div>
      <div class="drag-btn" v-if="children" @click="$emit('addChild')">
        <t-tooltip trigger="hover">
          <template #content> 增加子元素 </template>
          <i class="fc-icon icon-add-child"></i>
        </t-tooltip>
      </div>
      <div class="drag-btn drag-btn-danger" @click="$emit('delete')">
        <t-tooltip trigger="hover">
          <template #content> 删除 </template>
          <i class="fc-icon icon-delete"></i>
        </t-tooltip>
      </div>
    </div>
    <slot name="default"></slot>
  </div>
</template>

<script>
import { computed, inject, toRefs, defineComponent } from "vue";

let uni = 1;
export default defineComponent({
  name: "DragTool",
  props: ["dragBtn", "children", "unique", "mask"],
  setup(props) {
    const { unique } = toRefs(props);
    const id = computed(() => unique.value || uni++);
    const state = inject("fcx");
    return {
      id,
      state,
    };
  },
  methods: {
    active() {
      if (this.state.active === this.id) return;
      this.state.active = this.id;
      this.$emit("active");
    },
  },
  beforeDestroy() {
    this.state = {};
  },
});
</script>

<style>
.drag-tool {
  position: relative;
  min-height: 20px;
  box-sizing: border-box;
  padding: 2px;
  outline: 1px dashed #18a058;
  margin-bottom: 1px;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}

.drag-tool .drag-tool {
  margin: 5px;
}

.drag-tool + .drag-tool {
  margin-top: 5px;
}

.drag-tool.active {
  outline: 2px solid #18a058;
}

.drag-tool.active > div > .drag-btn {
  display: flex;
}

.drag-tool .drag-btn {
  display: none;
}

.drag-r {
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1904;
}

.drag-l {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1904;
}

.drag-btn {
  height: 18px;
  width: 18px;
  color: #fff;
  background-color: #18a058;
  text-align: center;
  line-height: 20px;
  padding-bottom: 1px;
  float: left;
  cursor: pointer;
  justify-content: center;
}

.drag-btn + .drag-btn {
  margin-left: 2px;
}

.drag-btn-danger {
  background-color: #ff2e2e;
}

.drag-btn i {
  font-size: 13px;
}

.drag-mask {
  z-index: 1900;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
