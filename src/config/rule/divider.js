import { localeProps } from '../../utils';

const label = '分割线';
const name = 't-divider';

export default {
  icon: 'icon-divider',
  label,
  name,
  rule() {
    return {
      type: name,
      props: {},
      wrap: { show: false },
      native: false,
      children: [''],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'select',
        field: 'layout',
        title: '布局',
        value: 'center',
        options: [
          { label: 'horizontal', value: 'horizontal' },
          { label: 'vertical', value: 'vertical' },
        ]
      },
      {
        type: 'input',
        field: 'content',
        title: '子元素',
      },
      {
        type: 'select',
        field: 'align',
        title: '文本位置',
        value: 'center',
        options: [
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
          { label: 'center', value: 'center' }
        ]
      },
      {
        type: 'switch',
        field: 'dashed',
        title: '是否虚线',
        value: false,
        props: {
          size: 'small'
        }
      },
    ]);
  }
};
