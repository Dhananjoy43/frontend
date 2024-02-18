export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required(),

        },
        {
            name: 'contactImage',
            title: 'Contact Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required(),
        }
    ]
}