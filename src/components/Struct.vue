<template>
  <div class="_fc_struct">
    <t-button @click="visible = true" style="width: 100%">{{
      title || t("struct.title")
    }}</t-button>
    <t-dialog
      v-model:visible="visible"
      :close-btn="false"
      :header="title || t('struct.title')"
      width="500px"
      :footer="false"
    >
      <template #body>
        <template v-if="isLoading">
          <t-skeleton text :repeat="2" /> <t-skeleton text style="width: 60%" />
        </template>
        <div ref="editor" v-if="visible" v-show="!isLoading"></div>
        <span class="_fc_err" v-if="err">
          {{ t("struct.error") }}{{ err !== true ? err : "" }}
        </span>
        <span class="dialog-footer" style="float: right; margin-top: 16px">
          <t-space>
            <t-button theme="default" @click="visible = false" size="small">{{
              t("struct.cancel")
            }}</t-button>
            <t-button theme="primary" @click="onOk" size="small">{{
              t("struct.submit")
            }}</t-button>
          </t-space>
        </span>
      </template>
    </t-dialog>
  </div>
</template>
<script>
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { basicSetup, EditorView } from "codemirror";
import { deepParseFn, toJSON } from "../utils/index";
import { deepCopy } from "@form-create/utils/lib/deepextend";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Struct",
  props: {
    modelValue: [Object, Array, Function, String],
    title: String,
    defaultValue: {
      require: false,
    },
    validate: Function,
  },
  inject: ["designer"],
  data() {
    return {
      editor: null,
      visible: false,
      err: false,
      oldVal: null,
      t: this.designer.setupState.t,
      isLoading: false,
    };
  },
  watch: {
    modelValue() {
      this.load();
    },
    visible(n) {
      if (n) {
        this.load();
      } else {
        this.err = false;
      }
    },
  },
  methods: {
    load() {
      const val = toJSON(
        this.modelValue
          ? deepParseFn(deepCopy(this.modelValue))
          : this.defaultValue
      );
      this.oldVal = val;
      this.$nextTick(() => {
        this.initCodeContent(val);
      });
    },
    initCodeContent(val) {
      this.isLoading = true;
      setTimeout(() => {
        if (this.editor) {
          this.editor.destroy();
        }
        this.editor = new EditorView({
          doc: val || "Press Ctrl-Space in here...\n",
          extensions: [basicSetup, javascript(), json()],
          parent: this.$refs.editor,
          options: {
            lineNumbers: true,
            line: true,
            //括号匹配
            matchBrackets: true,
          },
        });
        this.isLoading = false;
      }, 500);
    },
    onOk() {
      const str = this.editor.state.doc;
      let val;
      try {
        val = eval("(function (){return " + str + "}())");
      } catch (e) {
        this.err = ` (${e})`;
        return;
      }
      if (this.validate && false === this.validate(val)) {
        this.err = true;
        return;
      }
      this.visible = false;
      if (toJSON(val, null, 2) !== this.oldVal) {
        this.$emit("update:modelValue", val);
      }
    },
  },
});
</script>

<style>
._fc_struct {
  width: 100%;
}
._fc_err {
  color: red;
  float: left;
  text-align: left;
  width: 65%;
}
</style>
