import uniqueId from '@form-create/utils/lib/unique';
import Cookies from 'js-cookie'
import { localeProps, makeInterfaceOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../../utils/index';

const label = '机构选择器';
const name = 't-cascader';
const customName = 'custom-dept';

export default {
  icon: 'icon-cascader',
  label,
  name: customName,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.customDept.name'),
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
        multiple: true,
        checkStrictly: true,
        keys: {
          label: 'deptName',
          value: 'deptId',
          children: 'children'
        }
      }
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
      {
        type: 'Fetch', 
        field: 'formCreateEffect>fetch', 
        title: '接口数据',
        props: {
          to: 'props.options',
          defaultValue: {
            data: {
              "tenantId": "1655464631367020545",
            },
            action: "/authService/sys-dept/allDeptTree",
            method: "POST",
            headers: {
              // "Authorization": "eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2V4IjoyLCJyb2xlSWRzIjpbMTY1NTQ4ODEzNzE2MDc0OTA1OCwxNjU1NDY2Mjg0ODQ5NzM3NzI5XSwidXNlck1vYmlsZSI6IjEzMjIzMjMzMjMyIiwidXNlckFjY291bnQiOiJGTDAwMDAwMyIsImRlcHRJZCI6MTcwNTAzODc0NzE1NzMyNzg3MywidGVuYW50SWQiOjE2NTU0NjQ2MzEzNjcwMjA1NDUsInJvbGVDb2RlcyI6WyJCUE1fQURNSU4iLCJPUEVSQVRJT04iXSwidGVuYW50Q29kZSI6IkJQTU5fQ09ERSIsInBvc3RJZCI6MTY1NTQ2NjA5MDUzMTgyNzcxMywidXNlck5hbWUiOiLllJDlt6UiLCJleHAiOjE3MDQ0NDEyODIsInVzZXJJZCI6MTY1NTQ2Njc4MjAxMzE3Mzc2Mn0.a_nTSERKkwoe-_b-PSmAk-Wo-E9lQLy3gUOvNskKOtA"
              "Authorization": Cookies.get('Authorization')
                
            },
            dataType: "JSON",
            "_parse": "function (res){\n   return res.obj;     \n}",
          }
        },
      },
      {
        type: 'switch', 
        field: 'multiple', 
        title: '是否多选',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'checkStrictly',
        title: '父子节点选中状态不再关联',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'Struct', 
        field: 'defaultValue', 
        title: '默认选中值',
        value: ['123', '345'],
        props: { defaultValue: ['123', '345'] }
      },
      {
        type: 'Struct',
        field: 'keys',
        title: 'value / label / children 在 options 中对应的字段别名',
        value: {
          label: 'deptName',
          value: 'deptId',
          children: 'children'
        },
        props: { 
          defaultValue: {
            label: 'deptName',
            value: 'deptId',
            children: 'children'
          } 
        }
      },
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
        type: 'inputNumber',
        field: 'max',
        title: '多选标签的最大显示数量',
        props: { 
          min: 0,
          placeholder: '全部显示'
        }
      },
    ]);
  }
};
