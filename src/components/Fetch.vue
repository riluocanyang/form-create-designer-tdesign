<template>
  <div class="_fc_fetch">
    <DragForm
      v-model:api="api"
      :modelValue="formValue"
      :rule="rule"
      :option="option"
      @change="input"
    />
  </div>
</template>

<script>
import debounce from "@form-create/utils/lib/debounce";
import is from "@form-create/utils/lib/type";
import { designerForm } from "../utils/form";
import { defineComponent } from "vue";

const exampleParseFunction = `function (res){
    const { data, code, message} = res;
    if (code != 2000) return message;
    const types = data.map(item => {
        return { label: item.name, value: item.id };
    })
   return types;
}`;

export default defineComponent({
  name: "Fetch",
  props: {
    modelValue: [Object, String],
    defaultValue: [Object, String],
    to: String,
  },
  components: {
    DragForm: designerForm.$form(),
  },
  inject: ["designer"],
  computed: {
    formValue() {
      const val = this.modelValue || this.defaultValue;
      if (!val) return {};
      if (is.String(val)) {
        return {
          action: val,
        };
      }
      if (!val._parse && val.parse) {
        return { ...val, _parse: "" + val.parse };
      } else if (is.Function(val._parse)) {
        return { ...val, _parse: "" + val._parse };
      }
      return val;
    },
  },
  data() {
    const t = this.designer.setupState.t;
    return {
      api: {},
      fetch: {},
      t,
      option: {
        form: {
          labelPosition: "right",
          size: "small",
          labelWidth: "150px",
        },
        submitBtn: false,
      },
      rule: [
        {
          type: "input",
          field: "action",
          title: t("fetch.action") + ": ",
          validate: [{ required: true, message: t("fetch.actionRequired") }],
        },
        {
          type: "select",
          field: "method",
          title: t("fetch.method") + ": ",
          value: "GET",
          options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" },
          ],
          control: [
            {
              value: "POST",
              rule: [
                {
                  type: "select",
                  field: "dataType",
                  title: t("fetch.dataType") + ": ",
                  value: "FormData",
                  options: [
                    { label: "FormData", value: "FormData" },
                    { label: "JSON", value: "JSON" },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "Struct",
          field: "data",
          title: t("fetch.data") + ": ",
          value: {},
          props: {
            defaultValue: {},
          },
        },
        {
          type: "Struct",
          field: "headers",
          title: t("fetch.headers") + ": ",
          props: {
            defaultValue: {
              Authorization: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ",
            },
          },
        },
        {
          type: "input",
          field: "_parse",
          title: t("fetch.parse") + ": ",
          info: t("fetch.parseInfo"),
          value: exampleParseFunction,
          // props: {
          //   type: "textarea",
          //   autosize: {
          //     minRows: 12,
          //   }
          // },
          validate: [
            {
              validator: (v) => {
                if (!v) return true;
                try {
                  this.parseFn(v);
                  return true
                  // return { result: true, message: '', type: 'success'}
                } catch (e) {
                  return { result: false, message: t("fetch.parseValidate"), type: 'error'}
                }
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    parseFn(v) {
      return eval(`(function () {
                return ${v}
            })()`);
    },
    _input() {
      this.api.submit((formData) => {
        formData.to = this.to || "options";
        if (formData._parse) formData.parse = this.parseFn(formData._parse);
        this.$emit("update:modelValue", formData);
      });
    },
    input: debounce(function () {
      this._input();
    }, 1000),
  },
  mounted() {
    this._input();
  },
});
</script>
<style>
._fc_fetch {
  background-color: rgba(46, 51, 56, 0.05);
  padding: 10px;
}
</style>
