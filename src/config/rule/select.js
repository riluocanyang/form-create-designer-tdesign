import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../utils/index';

const label = '选择器';
const name = 'select';

export default {
  icon: 'icon-select',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.select.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {},
      options: [1, 2].map(value => {
        return {
          label: opt + value,
          value,
        }
      })
    };
  },
  watch: {
    multiple({ rule }) {
      rule.key = uniqueId();
    }
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      makeOptionsRule(t, 'options'),
      {
        type: 'switch', 
        field: 'multiple', 
        title: '是否多选',
        props: {
          size: 'small'
        }
      }, 
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
        props: {
          size: 'small'
        }
      }, 
      { 
        type: 'switch', 
        field: 'clearable', 
        title: '是否可以清空选项' ,
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
        type: 'input', 
        field: 'placeholder', 
        title: '占位符' 
      }, 
      {
        type: 'switch',
        field: 'filterable',
        title: '是否可以过滤',
        props: {
          size: 'small'
        }
      }, 
      {
        type: 'Struct',
        field: 'filter',
        title: '自定义远程搜索方法'
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
    ]);
  }
};
