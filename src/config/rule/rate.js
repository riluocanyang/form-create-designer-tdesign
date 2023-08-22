import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '评分';
const name = 't-rate';

export default {
  icon: 'icon-rate',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.rate.name'),
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
        type: 'input',
        field: 'size',
        title: '图标尺寸',
        value: '20px',
        info: t('components.rate.props.sizeInfo'),
      },
      {
        type: 'inputNumber',
        field: 'count',
        title: '图标个数',
        value: 5,
        props: {
          min: 1,
        }
      },
      {
        type: 'inputNumber',
        field: 'defaultValue',
        title: '默认选择评分的值',
        value: 0,
        props: {
          min: 0,
        }
      },
      {
        type: 'inputNumber',
        field: 'gap',
        title: '评分图标的间距',
        value: 4,
        props: {
          min: 1,
        }
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用评分',
        value: false,
        props: {
          size: 'small',
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否可清空',
        info: t('components.rate.props.clearableInfo'),
        props: {
          size: 'small',
        }
      },
      {
        type: 'switch',
        field: 'allowHalf',
        title: '允许只激活一半图标',
        props: {
          size: 'small',
        }
      },
      {
        type: 'ColorPicker',
        field: 'color',
        title: '已激活图标颜色',
        props: {
          defaultValue: '#FFCC33',
        }
      }
    ]);
  }
};
