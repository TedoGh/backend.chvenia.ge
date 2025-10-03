import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'FirstName LastName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true, // საშუალებას გაძლევს ფოტოს crop და focus
      },
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/*', // მხოლოდ ვიდეო ფაილების არჩევა
      },
    }),
  ],
})
