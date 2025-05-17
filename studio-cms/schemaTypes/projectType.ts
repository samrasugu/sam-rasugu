import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'github',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      type: 'url',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isOther',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'checkbox',
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
