import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // ღილაკის ტექსტი
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    // ღილაკის ლინკი
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url', // შეიძლება string-იც, მაგრამ url უკეთესია
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true, // თუ გინდა შიდა ბმულიც
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
})
