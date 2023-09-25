import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '计数器'
const name = 'inputNumber'

export default {
  icon: 'icon-number',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.inputNumber.name'),
      info: '',
      $required: false,
      props: {}
    }
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [makeRequiredRule(), ...makeExternalCommonRule(), {
      type: 'inputNumber',
      field: 'min',
      title: '设置计数器允许的最小值'
    }, {
      type: 'inputNumber',
      field: 'max',
      title: '设置计数器允许的最大值',
    }, {
      type: 'inputNumber',
      field: 'decimalPlaces',
      title: '数值保留的精度值',
      value: 0,
      props: { min: 0 }
    }, {
      type: 'inputNumber',
      field: 'step',
      title: '计数器步长',
      props: { min: 0 }
    },
    {
      type: 'input',
      field: 'placeholder',
      title: '提示信息',
    }
    ])
  }
};