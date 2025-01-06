import { config, fields, collection } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

export default config({
  storage: isProduction ? {
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
          slug: { label: 'Slug' },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 30, max: 160 } },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value
          }),
        draft: fields.checkbox({ label: 'Draft' }),
        featured: fields.checkbox({ label: 'Featured' }),
        pubDatetime: fields.datetime({ label: 'Publication date' }),
        modDatetime: fields.datetime({ label: 'Modification date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Artyom Bondarenko' }),
      },
    }),
  },
});
