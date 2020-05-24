import React from 'react'
import { Card } from 'semantic-ui-react'

const TasksBox = () => (
  <Card
    link
    header='Tasks Box?'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
      '  Rick also needs to bring chips.',
    ].join('')}
  />
)

export default TasksBox;