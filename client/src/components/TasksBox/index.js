import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import { postTask } from '../../actions/task'

const TasksBox = () => (
  <div>
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
  <Button
    content='Add Task'
    labelPosition='left'
    icon='edit'
    color='facebook'
    type='submit'
    onClick= {postTask}
    />
    </div>
)


export default TasksBox;