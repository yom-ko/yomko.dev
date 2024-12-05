import { config, fields, collection } from '@keystatic/core';
import { slug } from 'github-slugger';

export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: {
      owner: 'yom-ko',
      name: 'yomko.dev',
    }
  },

  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        author: fields.text({ label: 'Author', defaultValue: 'Artyom Bondarenko', validation: { isRequired: false } }),
        description: fields.text({ label: 'Description' }),
        draft: fields.checkbox({ label: 'Draft' }),
        featured: fields.checkbox({ label: 'Featured' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        pubDatetime: fields.datetime({ label: 'Publication date' }),
        modDatetime: fields.datetime({ label: 'Modification date' }),
        // canonicalURL: fields.url({ label: 'Canonical URL' }),
        // tags: fields.multiselect({ label: 'Tags' }),
        // ogImage: image()
        //   .refine(img => img.width >= 1200 && img.height >= 630, {
        //     message: "OpenGraph image must be at least 1200 X 630 pixels!",
        //   })
        //   .or(z.string())
        //   .optional(),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
