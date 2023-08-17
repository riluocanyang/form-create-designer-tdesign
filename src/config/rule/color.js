import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

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
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
        props: {
          size: 'small'
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
        type: 'ColorPicker',
        field: 'defaultValue',
        title: '默认的颜色值',
        props: {
          defaultValue: '#000000'
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
