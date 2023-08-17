import { localeProps } from '../../utils';

const label = '间距';
const name = 't-space';

export default {
  icon: 'icon-space',
  label,
  name,
  rule() {
    return {
      type: name,
      wrap: {
        show: false
      },
      native: false,
      style: {
        width: '100%',
        height: '20px',
      },
      children: []
    };
  },
  props(_, { t }) {
    return [
      {
        type: 'object',
        field: 'formCreateStyle',
        native: true,
        props: {
          rule: localeProps(t, name + '.props', [
            {
              type: 'input',
              field: 'height',
              title: 'height',
              props: {
                size: 'small'
              }
            },
          ])
        }
      },
      {
        type: 'switch',
        field: 'breakLine',
        title: '是否自动换行',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'align',
        title: '类型',
        options: [
          { label: 'start', value: 'start' }, 
          { label: 'end', value: 'end' },
          { label: 'center', value: 'center' }, 
          { label: 'baseline', value: 'baseline' },
        ]
      },
      {
        type: 'select',
        field: 'direction',
        title: '类型',
        options: [
          { label: 'vertical', value: 'vertical' }, 
          { label: 'horizontal', value: 'horizontal' },
        ]
      },

    ];
  }
};
