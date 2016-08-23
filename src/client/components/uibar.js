import React from 'react'
import Spinner from './spinner'

const IDLE = 'IDLE'

class UiBar extends React.Component {
  static propTypes = {
    handlers: React.PropTypes.object.isRequired,
  }

  state = {
    input: '',
    status: IDLE
  }

  handleInput = e => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) { return }
      // rewrite ?
    this.props.handlers.onNewList(this.state.input);
    this.setState({
      input: '',
      status: BUSY,
    });
  };
  render() {
    // TODO : change onclicks to router links
    return (
      <div className='list padded'>
        <form onSubmit={ this.handleSubmit }>
          <input
            onChange={ this.handleInput }
            placeholder='Search for character'
            value={ this.state.input } />
          <Spinner status={ this.state.status } />
          <button type='submit'>Filter</button>
        </form>
        <button onClick={ this.props.handlers.fetchTasks }>Browse !</button>
      </div>
  ) }
}

export default UiBar
