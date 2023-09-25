import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '滑块';
const name = 'slider';

export default {
  icon: 'icon-slider',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.slider.name'),
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
        type: 'inputNumber',
        field: 'defaultValue',
        title: '默认值',
        props: { min: 0 }
      },
      {
        type: 'inputNumber',
        field: 'min',
        title: '最小值',
        props: { min: 0 }
      },
      {
        type: 'inputNumber',
        field: 'max',
        title: '最大值',
        props: { min: 0 },
      },
      {
        type: 'inputNumber',
        field: 'step',
        title: '步长',
        value: 1,
        props: { min: 0 },
      },
      {
        type: 'switch',
        field: 'range',
        title: '是否为范围选择',
        props: {
          disabled: true,
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'reverse',
        title: '是否倒转轨道',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'vertical',
        title: '是否启用垂直模式',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showTooltip',
        title: '是否展示 tooltip',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'layout',
        title: '滑块布局方向',
        options: [
          { label: 'vertical', value: 'vertical' }, 
          { label: 'horizontal', value: 'horizontal' },
        ]
      }
    ]);
  }
};
