import { CollectionConfig } from 'payload'
import slugify from 'slug'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req }) => {
      // Público: sólo publicados
      if (req.user) return true
      return {
        _status: { equals: 'published' },
      }
    },
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: { position: 'sidebar' },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title && !data?.slug) data.slug = slugify(data.title, { lower: true })
            return data
          },
        ],
      },
    },
    { name: 'excerpt', type: 'textarea' },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      labels: { singular: 'tag', plural: 'tags' },
      fields: [{ name: 'value', type: 'text', required: true }],
    },
    {
      name: 'contentHtml',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Pega HTML limpio del artículo (admite headings, p, ul/ol, img, etc.)',
      },
    },
    {
      name: 'readingTime',
      type: 'text',
      admin: { description: 'Ej: 5 min' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
  ],
}
