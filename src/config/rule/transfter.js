import uniqueId from '@form-create/utils/lib/unique';
import { h } from 'vue';
import { localeProps } from '../../utils';

const label = '穿梭框';
const name = 't-transfer';

const generateData = () => {
  return Array.from({ length: 10 }).map((v, i) => ({
    label: 'Option ' + i,
    value: i,
    disabled: i % 4 === 0
  }))
};

export default {
  icon: 'icon-transfer',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.t-transfer.name'),
      info: '',
      $required: false,
      props: {
        data: generateData(),
      },
      value: ['']
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'Struct',
        field: 'data',
        title: 'Transfer 的数据源',
        props: { defaultValue: [] }
      },
      {
        type: 'Struct',
        field: 'defaultValue',
        title: '默认值',
        props: { defaultValue: [] }
      },
      {
        type: 'switch',
        field: 'search',
        title: '搜索框配置',
        props: {
          size: 'small'
        },
        // control: [
        //   {
        //     value: true,
        //     rule: [
        //       {
        //         type: 'input',
        //         field: 'targetFilterPlaceholder',
        //         info: t('bug.transfter'),
        //         title: '目标项搜索框中的占位符'
        //       }
        //     ]
        //   }
        // ]
      },
      {
        type: 'switch',
        field: 'showCheckAll',
        title: '是否显示全选',
        value: true,
        props: {
          size: 'small',
        }
      },
      {
        type: 'select',
        field: 'targetSort',
        title: '目标数据列表排列顺序',
        value: 'original',
        options: [
          { label: 'original', value: 'original' },
          { label: 'push', value: 'push' },
          { label: 'unshift', value: 'unshift' },
        ]
      }
    ])
  }

};
