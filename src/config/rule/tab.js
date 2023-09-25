import { localeProps } from '../../utils';
import tabname from '../../utils/tabname';

const label = '标签页';
const name = 't-tabs';

export default {
  icon: 'icon-tab',
  label,
  name,
  children: 't-tab-panel',
  childrenLen: 2,
  mask: false,
  rule({ t }) {
    return {
      type: 't-tabs',
      style: 'width:100%;',
      props: {
        theme: 'normal',
        defaultValue: String(tabname()),
      },
      children: []
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'defaultValue',
        title: '默认展示标签页的标识',
        info: t('components.tab.props.defaultValueInfo')
      },
      {
        type: 'switch',
        field: 'addable',
        title: '选项卡是否可增加',
        props: {
          size: 'small',
        }
      },
      {
        type: 'radio',
        field: 'placement',
        value: 'click',
        title: '选项卡位置',
        options: [
          { value: 'left', label: 'left' },
          { value: 'top', label: 'top' },
          { value: 'bottom', label: 'bottom' },
          { value: 'right', label: 'right' },
        ]
      },
      {
        type: 'radio',
        field: 'size',
        value: 'medium',
        title: '标签页的尺寸',
        options: [
          { value: 'medium', label: 'medium' },
          { value: 'large', label: 'large' },
        ]
      },
      {
        type: 'select',
        field: 'theme',
        title: '标签类型',
        value: 'normal',
        options: [
          { label: 'card', value: 'card' },
          { label: 'normal', value: 'normal' }
        ],
      },
      {
        type: 'switch',
        field: 'dragSort',
        title: '是否开启拖拽调整顺序',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'barWidth',
        title: '标签条的宽度',
        props: {
          min: 0,
          clearable: true,
        }
      },
      {
        type: 'inputNumber',
        field: 'tabsPadding',
        title: '全部标签最左和最右的 padding',
        value: 0,
        props: {
          min: 0,
        }
      },
    ]);
  }
};
