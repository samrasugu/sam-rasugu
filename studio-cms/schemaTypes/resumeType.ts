import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'file',
      type: 'file',
      title: 'PDF File',
      options: {
        accept: '.pdf',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Last Updated',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
