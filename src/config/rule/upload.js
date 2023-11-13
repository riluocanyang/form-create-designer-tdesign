import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule, makeExternalCommonRule } from '../../utils';

const label = '上传';
const name = 't-upload';

export default {
  icon: 'icon-upload',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.upload.name'),
      info: '',
      $required: false,
      props: {
        action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
        onSuccess(res, file) {
          file.url = res.data.url;
        },
        onFail(e) {
          console.log(e);
        }
      },
      // value: [new File(["foo"], "foo.txt")],
      // value: [{}],
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      ...makeExternalCommonRule(),
      {
        type: 'input',
        field: 'action',
        title: '请求提交的地址'
      },
      {
        type: 'Struct',
        field: 'headers',
        title: 'HTTP 请求需要附加的 Headers',
        props: { defaultValue: {} }
      },
      {
        type: 'switch',
        field: 'multiple',
        title: '是否支持多个文件',
        props: {
          size: 'small'
        }
      },
      {
        type: 'Struct',
        field: 'data',
        title: '提交表单需要附加的数据',
        props: {
          defaultValue: {}
        }
      },
      {
        type: 'input',
        field: 'name',
        title: '文件在提交表单中的字段名'
      }, 
      {
        type: 'switch',
        field: 'withCredentials',
        title: '是否携带 Cookie',
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'accept',
        info: t('components.upload.props.acceptInfo'),
        title: '接受的文件类型（thumbnail-mode 模式下此参数无效）'
      }, 
      {
        type: 'switch',
        field: 'autoUpload',
        title: '选择文件时候是否默认上传',
        value: true,
        props: {
          size: 'small'
        }
      }, 
      {
        type: 'inputNumber',
        field: 'max',
        title: '限制上传文件数量',
        value: 1,
        props: { min: 1 },
      },
      {
        type: 'switch',
        field: 'allowUploadDuplicateFile',
        title: '是否允许重复上传相同文件名的文件',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'draggable',
        title: '是否启用拖拽上传',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showUploadProgress',
        title: '是否显示上传进度',
        value: true,
        props: {
          size: 'small'
        }
      },
      
      {
        type: 'input',
        field: 'sizeLimit',
        title: '图片文件大小限制，默认单位 KB',
      },
      {
        type: 'switch',
        field: 'showThumbnail',
        title: '是否在文件列表中显示缩略图',
        value: true,
      },
    ]);
  }
};
