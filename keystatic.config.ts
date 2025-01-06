import { config, fields, collection } from '@keystatic/core';
import { slug } from 'github-slugger';

export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: 'yom-ko/yomko.dev',
  },

  collections: {
    blog: collection({
      label: 'Blog',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        description: fields.text({ label: 'Description' }),
        content: fields.mdx({
          label: 'Content',
          extension: 'md',
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
        // canonicalURL: fields.url({ label: 'Canonical URL' }),
        // ogImage: image()
        //   .refine(img => img.width >= 1200 && img.height >= 630, {
        //     message: "OpenGraph image must be at least 1200 X 630 pixels!",
        //   })
        //   .or(z.string())
        //   .optional(),
        
      },
    }),
  },
});
