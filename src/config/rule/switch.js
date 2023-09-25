import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '开关';
const name = 'switch';

export default {
  icon: 'icon-switch',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.switch.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      // {
      //   type: 'Struct',
      //   field: 'defaultValue',
      //   title: '默认值',
      //   value: false,
      //   props: { defaultValue: false }
      // },
      {
        type: 'radio',
        field: 'size',
        title: '尺寸',
        info: t('components.switch.props.sizeInfo'),
        value: 'medium',
        options: [
          { value: 'small', label: 'small' },
          { value: 'medium', label: 'medium' },
          { value: 'large', label: 'large' }
        ]
      },
      {
        type: 'input',
        field: 'label',
        title: '开关内容',
        props: {
          label: ['开', '关']
        }
      },
    ]);
  }
};
