export default function field({ t }) {
  return [
    {
      type: 'input',
      field: 'field',
      value: '',
      title: t('form.field'),
    }, {
      type: 'input',
      field: 'title',
      value: '',
      title: t('form.title'),
    }, {
      type: 'input',
      field: 'info',
      value: '',
      title: t('form.info'),
    }, {
      type: 'Struct',
      field: '_control',
      value: [],
      title: t('form.control'),
      props: {
        defaultValue: [],
        validate(val) {
          if (!Array.isArray(val)) return false;
          if (!val.length) return true;
          return !val.some(({ rule }) => {
            return !Array.isArray(rule);
          });
        }
      }
    }, {
      type: 'col',
      props: {
        span: 12
      },
      children: [
        {
          type: 't-space',
          children: [
            {
              type: 't-button',
              props: {
                theme: 'primary',
                size: 'small',
              },
              inject: true,
              on: {
                click({ $f }) {
                  const rule = $f.activeRule;
                  if (rule) {
                    rule.__fc__.updateKey();
                    rule.value = undefined;
                    rule.__fc__.$api.sync(rule);
                  }
                },
              },
              native: true,
              children: [{ type: 'i', class: 'fc-icon icon-delete' }, t('form.clear')]
            }, {
              type: 't-button',
              props: {
                theme: 'success',
                size: 'small',
                // icon: () => <IconRefresh style={{width: '16px'}} />
              },
              inject: true,
              on: {
                click({ $f }) {
                  const rule = $f.activeRule;
                  if (rule) {
                    rule.__fc__.updateKey(true);
                    rule.__fc__.$api.sync(rule);
                  }
                },
              },
              native: true,
              children: [
                { type: 'template', slot: 'icon', children: [{type: 't-icon', props: {name: 'refresh', width: '16px'}}]},
                t('form.refresh')
              ]
            },
          ]
        }
      ]
    }
  ];
}
