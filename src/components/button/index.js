import React, {Component} from 'react';

import './style.scss';
import EditModal from '../edit-modal';

class Button extends Component{
  state = {
    isOpen: false
  }

  toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  render(){
    return ( 
      <React.Fragment>
      {this.state.isOpen ? <EditModal toggleOpen={this.toggleOpen} /> : null}
      <div className='button-container'>
        <button onClick={this.toggleOpen}>
          Add note
        </button>
      </div>
      </React.Fragment>
    )
  }
}

export default Button
