import { config, fields, collection } from '@keystatic/core';

const isRemote = import.meta.env.PUBLIC_IS_REMOTE_ENVIRONMENT === 'true';

export default config({
  storage: isRemote ? {
    kind: 'github',
    repo: 'yom-ko/yomko.dev',
  } : { kind: 'local' },
  collections: {
    blog: collection({
      label: 'Blog',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      slugField: 'title',
      schema: {
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
        }),
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 30, max: 160 } },
        }),
        // thumbnail: fields.image({
        //   label: 'Thumbnail',
        //   directory: 'public/images',
        //   publicPath: '/images',
        // }),
        // language: fields.select({
        //   label: 'Language',
        //   defaultValue: 'en',
        //   options: [
        //     { label: 'English', value: 'en', },
        //     { label: 'Russian', value: 'ru', }
        //   ]
        // }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value
          }),
        draft: fields.checkbox({ label: 'Draft' }),
        featured: fields.checkbox({ label: 'Featured' }),
        pubDatetime: fields.datetime({ label: 'Publication Date' }),
        modDatetime: fields.datetime({ label: 'Modification Date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Artyom Bondarenko' }),
      },
    }),
  },
});
