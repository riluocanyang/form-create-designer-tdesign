import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';
const label = '输入框';
const name = 'input';

export default {
  icon: 'icon-input',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.input.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props',
      [
        makeRequiredRule(),
        ...makeExternalCommonRule(),
        { type: 'CustomDefaultValue', field: 'defaultValue', title: '默认值', props: { defaultValue: '' } },
        { type: 'input', field: 'placeholder', title: '输入框占位文本' },
        { type: 'input', field: 'label', title: '左侧文本' },
        { type: 'input', field: 'prefixIcon', title: '组件前置图标' },
        { type: 'input', field: 'suffixIcon', title: '组件后置图标' },
        { type: 'input', field: 'suffix', title: '后置图标前的后置内容' },
        { type: 'inputNumber', field: 'maxlength', title: '最大输入长度', props: { min: 0, size: "small" } },
        { type: 'switch', field: 'clearable', title: '是否可清空', props: { size: "small" } },
        { type: 'switch', field: 'autocomplete', title: '是否开启自动填充', props: { size: "small" } },
        { type: 'switch', field: 'showLimitNumber', title: '是否显示输入字数统计', props: { size: "small" } },
        { type: 'switch', field: 'readonly', title: '是否只读', props: { size: "small" } },
        { type: 'switch', field: 'autofocus', title: '自动获取焦点', props: { size: "small" } },
        {
          type: 'select',
          field: 'type',
          title: '类型',
          options: [
            { label: 'text', value: 'text' }, 
            { label: 'number', value: 'number' }, 
            { label: 'password', value: 'password' },
            { label: 'search', value: 'search' },
            { label: 'submit', value: 'submit' },
            { label: 'url', value: 'url' },
            { label: 'tel', value: 'tel' }
          ]
        },
        {
          type: 'select',
          field: 'size',
          title: '大小',
          options: [
            { label: 'small', value: 'small' }, 
            { label: 'medium', value: 'medium' },
            { label: 'large', value: 'large' }, 
          ]
        },
        {
          type: 'select',
          field: 'align',
          title: '文本内容位置',
          options: [
            { label: 'left', value: 'left' }, 
            { label: 'center', value: 'center' },
            { label: 'right', value: 'right' }, 
          ]
        },
      ]
    );
  }
};