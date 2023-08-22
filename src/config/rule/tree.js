import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../utils/index';

const label = '树形控件';
const name = 'tree';

export default {
  icon: 'icon-tree',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.tree.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {
        props: {
          label: 'label',
        },
        nodeKey: 'key',
        data: [1, 2].map(value => {
          return {
            label: opt + value,
            key: value,
            children: [
              {
                label: opt + value + value,
                key: value + "" + value,
              }
            ],
          }
        }),
      },
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      makeOptionsRule(t, 'props.data', false),
      {
        type: 'switch',
        field: 'expandMutex',
        title: '是否使用手风琴展开模式',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'expandAll',
        title: '是否展开全部节点',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'draggable',
        title: '节点是否可拖拽',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用树操作',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'disableCheck',
        title: '禁用复选框',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'checkable',
        title: '隐藏节点复选框',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'activable',
        title: '节点是否可高亮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'activeMultiple',
        title: '是否允许多个节点同时高亮',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'transition',
        title: '是否使用过渡动画',
        value: true,
        props: {
          size: 'small'
        }
      },

      {
        type: 'switch',
        field: 'line',
        title: '是否显示连接线',
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'valueMode',
        title: '选中值模式',
        value: 'all',
        info: t('components.tree.props.checkStrategyInfo'),
        options: [
          { label: t('components.tree.props.all'), value: 'all' },
          { label: t('components.tree.props.parent'), value: 'parentFirst' },
          { label: t('components.tree.props.child'), value: 'onlyLeaf' }
        ]
      },
    ]);
  }
};
