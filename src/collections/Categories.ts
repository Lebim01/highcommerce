import { CollectionConfig } from 'payload'
import slug from 'slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.name && !data?.slug) data.slug = slug(data.name, { lower: true })
            return data
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
