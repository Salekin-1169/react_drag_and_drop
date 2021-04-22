const initialData = {
  tasks: {
    'task-1' : { id: 'task-1', content: 'Escape from Arkham'},
    'task-2' : { id: 'task-2', content: 'Free Harley Quinn'},
    'task-3' : { id: 'task-3', content: 'Hire Poison Ivy'},
    'task-4' : { id: 'task-4', content: 'Hire Bane'},
    'task-5' : { id: 'task-5', content: 'Kill Batman'},
    'task-6' : { id: 'task-6', content: 'Rule Gotham City'},
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      title: 'Todo',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
    'column-2' : {
      id: 'column-2',
      title: 'Doing',
      taskIds: []
    },
    'column-3' : {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    },
  },
  columnOrder: ['column-1','column-2','column-3'],
}

export default initialData;