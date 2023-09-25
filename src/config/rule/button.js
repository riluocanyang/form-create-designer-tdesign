import { localeProps } from '../../utils';

const label = '按钮';
const name = 't-button';

export default {
  icon: 'icon-button',
  label,
  name,
  mask: false,
  rule({ t }) {
    return {
      type: name,
      props: {},
      children: [t('components.t-button.name')],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'formCreateChild',
        title: '按钮的内容',
      },
      {
        type: 'select',
        field: 'size',
        title: '按钮的尺寸',
        value: 'medium',
        options: [
          { label: 'large', value: 'large' },
          { label: 'medium', value: 'medium' },
          { label: 'small', value: 'small' },
          { label: 'extra-small', value: 'extra-small' },
        ]
      },
      {
        type: 'select',
        field: 'theme',
        title: '按钮的颜色',
        value: 'primary',
        options: [
          { label: 'default', value: 'default' },
          { label: 'primary', value: 'primary' },
          { label: 'danger', value: 'danger' },
          { label: 'warning', value: 'warning' },
          { label: 'success', value: 'success' },
        ]
      },
      {
        type: 'select',
        field: 'type',
        title: '按钮的类型',
        value: 'default',
        options: [
          { label: 'submit', value: 'submit' },
          { label: 'reset', value: 'reset' },
          { label: 'button', value: 'button' },
        ]
      },
      {
        type: 'select',
        field: 'shape',
        title: '按钮的形状',
        value: 'rectangle',
        options: [
          { label: 'rectangle', value: 'rectangle' },
          { label: 'square', value: 'square' },
          { label: 'round', value: 'round' },
          { label: 'circle', value: 'circle' },
        ]
      },
      {
        type: 'select',
        field: 'variant',
        title: '按钮形式',
        value: 'base',
        options: [
          { label: 'base', value: 'base' },
          { label: 'outline', value: 'outline' },
          { label: 'dashed', value: 'dashed' },
          { label: 'text', value: 'text' },
        ]
      },
      {
        type: 'select',
        field: 'tag',
        title: '按钮需要被渲染成什么标签',
        value: 'button',
        options: [
          { label: 'button', value: 'button' },
          { label: 'a', value: 'a' },
          { label: 'div', value: 'div' },
        ]
      },
      {
        type: 'input',
        field: 'icon',
        title: '图标类名',
      },
      {
        type: 'switch',
        field: 'ghost',
        title: '是否为幽灵按钮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'loading',
        title: '是否加载中状态',
        props: {
          size: 'small'
        }
      },
    ]);
  }
};
