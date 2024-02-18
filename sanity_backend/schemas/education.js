export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'course',
            title: 'Course',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'institute',
            title: 'Institute',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'period',
            title: 'Time Period',
            type: 'document',
            fields: [
                {
                    name: 'startYear',
                    title: 'Start Year',
                    description: 'The year the course started, e.g., 2018 for a course that began in August of 2018.',
                    type: 'date',
                    options: {
                        dateFormat: 'DD-MM-YYYY',
                        calendarTodayLabel: 'Today'
                    }
                },
                {
                    name: 'endYear',
                    title: 'End Year (optional)',
                    description: "If your education isn't ongoing, you can specify the end year here.",
                    type: 'date',
                    options: {
                        dateFormat: 'DD-MM-YYYY',
                        calendarTodayLabel: 'Today'
                    }
                }

            ]
        }
    ]
}