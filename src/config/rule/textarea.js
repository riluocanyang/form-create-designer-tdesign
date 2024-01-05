import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';
const label = '多行文本框';
const name = 't-textarea';

export default {
  icon: 'icon-input',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.textarea.name'),
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
        { type: 'textarea', field: 'defaultValue', title: '默认值', props: { defaultValue: '' } },
        {
          type: 'Struct',
          field: 'autosize',
          title: '高度设置',
          props: { 
            defaultValue: {
              minRows: 2,
              maxRows: 2
            } 
          }
        },
        { type: 'input', field: 'placeholder', title: '输入框占位文本' },
        { type: 'inputNumber', field: 'maxlength', title: '用户最多可以输入的字符个数', props: { min: 0, size: "small" } },
        { type: 'switch', field: 'readonly', title: '是否只读', props: { size: "small" } },
        { type: 'switch', field: 'autofocus', title: '自动获取焦点', props: { size: "small" } },
        {
          type: 'select',
          field: 'status',
          title: '文本框状态',
          options: [
            { label: 'default', value: 'default' }, 
            { label: 'success', value: 'success' }, 
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' },
          ]
        },
        
      ]
    );
  }
};