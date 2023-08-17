import { uniqueId } from "@form-create/utils";
import { localeProps, makeOptionsRule, makeRequiredRule } from "../../utils";

const label = '多选框'
const name = 'checkbox'

export default {
  icon: 'icon-checkbox',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.checkbox.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {},
      options: [1, 2].map(value => {
        return {
          label: opt + value,
          value,
        }
      }),
      value: ['']
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(), 
      makeOptionsRule(t, 'options'),
      {
        type: 'input', 
        field: 'defaultValue', 
        title: '默认选中值',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch', 
        field: 'disabled', 
        title: '是否禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'max',
        title: '可被勾选的 checkbox 的最大数量',
        props: { min: 0 }
      },
      {
        type: 'switch', 
        field: 'indeterminate', 
        title: '是否为半选',
        value: false,
        props: {
          size: 'small'
        }
      },
    ]);
  }
};