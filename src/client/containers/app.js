/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import UiBar from '../components/uibar'
import ViewBox from '../components/viewbox'
import mapStateToProps from '../selectors/storeSelector'

// import { pushList, deleteList, getLists } from '../actions/lists'
// import { pushTask, deleteTask, getTasks } from '../actions/tasks'
import { addChars } from '../actions/chars'
import { fetchCharacters } from '../utils/api'

const App = ({ characters = [], ...handlers }) => (
  <div className='app-wrapper'>
    <span><h1>Component reusability is awesome @_@</h1></span>
    <UiBar
      handlers={ handlers } />
    <ViewBox
      handlers={handlers}
      characters={characters} />
  </div>
)

App.propTypes = {
  // api: React.PropTypes.object.isRequired,
  characters: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func,
  // lists: React.PropTypes.array.isRequired,
  // tasks: React.PropTypes.array.isRequired,
}

export default connect(
  // state => (
  // {
  //   api: state.api,
  //   lists: state.lists,
  //   tasks: state.tasks,
  // }),
  // state => mapStateToProps(state),
  mapStateToProps,
  {
    // fetchTasks: getTasks,
    fetchCharacters: fetchCharacters,
    // onNewList: pushList,
    // onNewTask: pushTask,
    // onDelTask: deleteTask,
    // onDelList: deleteList,
  })(App);
