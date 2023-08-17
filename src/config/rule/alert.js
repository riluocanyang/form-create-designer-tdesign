import { localeProps } from '../../utils';

const label = '提示';
const name = 'CustomAlert';

export default {
  icon: 'icon-alert',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      props: {
        title: t('components.t-alert.name'),
        type: 'info',
        message: t('components.t-alert.message')
      },
      children: []
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'title',
        title: '标题'
      },
      {
        type: 'select',
        field: 'theme',
        title: '类型',
        value: 'info',
        options: [
          { label: 'default', value: 'default' },
          { label: 'success', value: 'success' },
          { label: 'warning', value: 'warning' },
          { label: 'info', value: 'info' },
          { label: 'error', value: 'error' }
        ]
      },
      {
        type: 'input',
        field: 'message',
        title: '内容'
      },
      {
        type: 'switch',
        field: 'close',
        title: '是否可关闭',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'center',
        title: '组件居中',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'width',
        title: '设置宽度',
        value: false,
        children: [
          { type: 'span', children: ['百分比宽度'], slot: 'checked' },
          { type: 'span', children: ['精确值宽度'], slot: 'unchecked' },
        ],
        control: [
          {
            value: true,
            rule: [
              {
                type: 'input',
                field: 'widthPercent',
                props: { placeholder: '宽度' },
                children: [
                  {
                    type:'i',
                    slot: 'suffix',
                    children: ['%']
                  },
                ]
              }
            ]
          },
          {
            value: false,
            rule: [
              {
                type: 'input',
                field: 'widthPx',
                props: { placeholder: '宽度' },
                children: [
                  {
                    type:'i',
                    slot: 'suffix',
                    children: ['px']
                  },
                ]
              }
            ]
          }
        ]
      }
    ]);
  }
};
