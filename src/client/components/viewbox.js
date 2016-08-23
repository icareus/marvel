/**
 * Created by Antoine on 11/07/2016.
 */
import React from 'react'
// import _ from 'lodash'
import { map } from 'ramda'
import character from './character'

const ViewBox = ({ characters }) => {
  // console.warn('selector result:', getTasksByListId(443, tasks))
  // console.warn('tasks :', tasks);
  return (
  <div className='viewbox'>
  {/*_.map(character => (
    <TaskList
      handlers={ handlers }
      key={ taskList.id }
      list={ taskList }
      // getTasksByListId selector
      // tasks={ getTasksByListId(taskList, tasks) } />))}
      tasks={ _.filter(tasks, t => (t.listId === taskList.id)) } />))*/
    }
    <chars />
  </div>
)}

ViewBox.propTypes = {
  handlers: React.PropTypes.object.isRequired,
  characters: React.PropTypes.array.isRequired,
}

export default ViewBox