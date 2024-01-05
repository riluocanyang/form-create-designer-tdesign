import uniqueId from '@form-create/utils/lib/unique';
import Cookies from 'js-cookie'
import { localeProps, makeInterfaceOptionsRule, makeRequiredRule, makeExternalCommonRule } from '../../../utils/index';

const label = '人员选择器';
const name = 'select';
const customName = 'custom-user';

export default {
  icon: 'icon-select',
  label,
  name: customName,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.customUser.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {
        multiple: true
      },
      value: [],
      options: ['1', '2'].map(value => {
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
      {
        type: 'Fetch', 
        field: 'formCreateEffect>fetch', 
        title: '接口数据',
        props: {
          to: 'options',
          defaultValue: {
            data: {
              "deptId": "1655464631442518017",
              "pageNo": 1,
              "pageSize": 10000
            },
            action: "/authService/sys-user/list",
            method: "POST",
            headers: {
              // "Authorization": "eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2V4IjoyLCJyb2xlSWRzIjpbMTY1NTQ4ODEzNzE2MDc0OTA1OCwxNjU1NDY2Mjg0ODQ5NzM3NzI5XSwidXNlck1vYmlsZSI6IjEzMjIzMjMzMjMyIiwidXNlckFjY291bnQiOiJGTDAwMDAwMyIsImRlcHRJZCI6MTcwNTAzODc0NzE1NzMyNzg3MywidGVuYW50SWQiOjE2NTU0NjQ2MzEzNjcwMjA1NDUsInJvbGVDb2RlcyI6WyJCUE1fQURNSU4iLCJPUEVSQVRJT04iXSwidGVuYW50Q29kZSI6IkJQTU5fQ09ERSIsInBvc3RJZCI6MTY1NTQ2NjA5MDUzMTgyNzcxMywidXNlck5hbWUiOiLllJDlt6UiLCJleHAiOjE3MDQ0NDEyODIsInVzZXJJZCI6MTY1NTQ2Njc4MjAxMzE3Mzc2Mn0.a_nTSERKkwoe-_b-PSmAk-Wo-E9lQLy3gUOvNskKOtA"
              "Authorization": Cookies.get('Authorization')
            },
            dataType: "JSON",
            "_parse": "function (res){\n   return res?.obj?.list?.map(row=>{\n            return {\n                label: row.userRealName,\n                value: row.userAccount\n            }\n        })\n}",
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
        type: 'Struct', 
        field: 'defaultValue', 
        title: '默认选中值',
        value: ['FL'],
        props: { defaultValue: ['FL'] }
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
