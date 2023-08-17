export default function form({ t }) {
  return [
    // {
    //   type: 'radio',
    //   field: 'layout',
    //   value: 'vertical',
    //   title: t('form.layout'),
    //   options: [
    //     { value: 'vertical', label: 'vertical' },
    //     { value: 'inline', label: 'inline' },
    //   ]
    // },
    {
      type: 'radio',
      field: 'labelAlign',
      value: 'left',
      title: t('form.labelAlign'),
      options: [
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
        { value: 'top', label: 'top' },
      ]
    },
    // {
    //   type: 'switch',
    //   field: 'requiredMark',
    //   value: true,
    //   title: t('form.requiredMark'),
    //   props: {
    //     size: 'small',
    //   }
    // },
    {
      type: 'input',
      field: 'labelWidth',
      value: '100px',
      title: t('form.labelWidth'),
    },

    {
      type: 'switch',
      field: 'showErrorMessage',
      value: true,
      title: t('form.showErrorMessage'),
      props: {
        size: 'small',
      }
    },
    {
      type: 'switch',
      field: 'formCreateSubmitBtn',
      value: true,
      title: t('form.submitBtn'),
      props: {
        size: 'small',
      }
    },
    {
      type: 'switch',
      field: 'formCreateResetBtn',
      value: false,
      title: t('form.resetBtn'),
      props: {
        size: 'small',
      }
    },
  ];
}
