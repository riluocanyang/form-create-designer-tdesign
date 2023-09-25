import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../utils/index';

const label = '级联选择器';
const name = 't-cascader';

export default {
  icon: 'icon-cascader',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.cascader.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {
        options: [1, 2].map(value => {
          return {
            label: opt + value,
            value,
            children: [],
          }
        }),
      }
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      makeOptionsRule(t, 'props.options', false),
      {
        type: 'input',
        field: 'placeholder',
        title: '提示信息'
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '值是否可清除',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'filterable',
        title: '是否可搜索',
        info: t('components.cascader.props.filterableInfo'),
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'multiple',
        title: '是否支持多选',
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'max',
        title: '多选标签的最大显示数量',
        props: { 
          min: 0,
          placeholder: '全部显示'
        }
      },
      {
        type: 'select',
        field: 'valueMode',
        title: '选中值模式',
        value: 'all',
        info: t('components.cascader.props.checkStrategyInfo'),
        options: [
          { label: t('components.cascader.props.all'), value: 'all' },
          { label: t('components.cascader.props.parent'), value: 'parentFirst' },
          { label: t('components.cascader.props.child'), value: 'onlyLeaf' } 
        ]
      },
      {
        type: 'input',
        field: 'option',
        title: '自定义单个级联选项'
      },
      {
        type: 'input',
        field: 'keys',
        title: 'value / label / children 在 options 中对应的字段别名'
      },
      {
        type: 'switch',
        field: 'reserveKeyword',
        title: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
        value: true,
        props: {
          checkedValue: false,
          uncheckedValue: true,
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showAllLevels',
        title: '是否在选择器中显示选项路径',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'checkStrictly',
        title: '父子节点选中状态不再关联',
        value: false,
        props: {
          size: 'small'
        }
      },
    ]);
  }
};
