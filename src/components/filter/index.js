import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilter } from '../../actions'


import './style.scss'

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string
  }

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    this.props.searchFilter(e.target.value)
  }

  render() {
    return (
      <div className='wrapper-input'>
        <input className='input-search' type='text' 
               onChange={this.handleChange}  
               value={this.state.value}      
        />
        <i className="fas fa-search search" />
      </div>
    )
  }
}

export default connect(null, {searchFilter})(Filter)
