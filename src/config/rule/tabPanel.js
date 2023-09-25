import { localeProps } from '../../utils';
import tabname from '../../utils/tabname';

const label = '标签页';
const name = 't-tab-panel';

export default {
  label,
  name,
  inside: true,
  drag: true,
  dragBtn: false,
  mask: false,
  rule({ t }) {
    return {
      type: name,
      props: {
        label: t('components.tab.name'),
        value: String(tabname()),
      },
      children: []
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'input',
        field: 'label',
        title: '选项卡名称'
      },
      {
        type: 'input',
        field: 'value',
        title: '标签页标识',
        info: t('components.tab-pane.props.nameInfo')
      },
      {
        type: 'switch',
        field: 'removable',
        title: '当前选项卡是否允许移除',
        info: t('components.tab-pane.props.closableInfo'),
      },
      {
        type: 'switch',
        field: 'draggable',
        title: '选项卡组件开启允许拖动排序时'
      },
    ]);
  }
};
