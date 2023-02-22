export default {
  name: 'reminder',
  type: 'document',
  title: 'Reminder',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'dueAt',
      type: 'datetime',
      title: 'Due at',
    },
    {
      name: 'isCompleted',
      type: 'boolean',
      title: 'is completed',
    },
  ],
}
