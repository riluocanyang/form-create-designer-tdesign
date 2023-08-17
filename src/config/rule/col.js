import { localeProps } from "../../utils";

const name = "t-col";

export default {
  name,
  label: "格子",
  drag: true,
  dragBtn: false,
  inside: true,
  mask: false,
  rule() {
    return {
      type: name,
      props: { span: 6 },
      children: [],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      {
        type: "slider",
        field: "span",
        title: "栅格占据的列数",
        value: 6,
        props: { min: 0, max: 12 },
      },
      {
        type: "slider",
        field: "offset",
        title: "栅格左侧的间隔格数",
        value: 0,
        props: { min: 0, max: 12 },
      },
      {
        type: "slider",
        field: "push",
        title: "栅格向右移动格数",
        value: 0,
        props: { min: 0, max: 12 },
      },
      {
        type: "slider",
        field: "pull",
        title: "栅格向左移动格数",
        value: 0,
        props: { min: 0, max: 12 },
      },
    ]);
  },
};
