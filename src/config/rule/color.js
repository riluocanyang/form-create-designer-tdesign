import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '颜色选择器';
const name = 'colorPicker';

export default {
  icon: 'icon-color',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.colorPicker.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      {
        type: 'CustomColorPicker',
        field: 'defaultValue',
        title: '默认的颜色值',
        value: '', // 必须加，否则 modelValue 不生效
        props: {
          defaultValue: ''
        }
      },
      {
        type: 'switch',
        field: 'enableAlpha',
        title: '是否可调节 alpha 通道',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否支持清除',
        value: false,
        props: {
          size: 'small'
        }
      },
    ]);
  }
};
