export default {
    name: 'socialLinks',
    title: 'Social Links',
    type: 'document',
    fields: [
        {
            name: 'github',
            title: 'Github Link',
            type: 'url',
            validation: Rule => Rule.required(),
        },
        {
            name: 'linkedin',
            title: 'Linkedin Link',
            type: 'url',
            validation: Rule => Rule.required(),
        },
        {
            name: 'twitter',
            title: 'Twitter Link',
            type: 'url',
            validation: Rule => Rule.required(),
        },
        {
            name: 'facebook',
            title: 'Facebook Link',
            type: 'url',
            validation: Rule => Rule.required(),
        },
    ]
}