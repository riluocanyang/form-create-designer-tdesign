import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '时间选择器';
const name = 'timePicker';

export default {
  icon: 'icon-time',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.timePicker.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'Struct',
        field: 'pickerOptions',
        title: '当前时间日期选择器特有的选项',
        props: { defaultValue: {} }
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否可清空',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'placeholder',
        title: '选择框的占位符',
      },
      {
        type: 'input',
        field: 'format',
        title: '格式化时间',
      },
    ]);
  }
};
