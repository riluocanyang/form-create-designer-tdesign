import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../utils/index';

const lable = '单选框';
const name = 'radio'

export default {
  icon: 'icon-radio',
  lable,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.radio.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {},
      options: ['1', '2'].map(value => {
        return {
          label: opt + value,
          value,
        }
      })
    };
  },
  props(_, {t}) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      makeOptionsRule(t, 'options'),
      // {
      //   type: 'Struct', 
      //   field: 'defaultValue', 
      //   title: '默认选中值',
      //   value: '1',
      //   props: { defaultValue: '1' }
      // },
    ])
  }
}