import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '日期选择器';
const name = 'dateRangePicker';

export default {
  icon: 'icon-date',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.dateRangePicker.name'),
      info: '',
      $required: false,
      props: {},
      value: ['2022-01-01 11:11:11', '2022-08-08 12:12:12']
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'Struct',
        field: 'pickerOptions',
        title: '当前时间日期选择器特有的选项',
        props: { defaultValue: {} }
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否支持清除',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'enableTimePicker',
        title: '是否显示时间选择',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'mode',
        title: '日期选择器的类型',
        value: 'date',
        options: [
          { label: t('aboutTime.year'), value: 'year' },
          { label: t('aboutTime.quarter'), value: 'quarter' },
          { label: t('aboutTime.month'), value: 'month' }, 
          { label: t('aboutTime.week'), value: 'week' },
          { label: t('aboutTime.date'), value: 'date' },
        ]
      },
      {
        type: 'input',
        field: 'placeholder',
        title: '非范围选择时的占位内容'
      },
      {
        type: 'input',
        field: 'format',
        title: '显示在输入框中的格式',
      },
    ]);
  }
};
