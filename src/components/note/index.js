import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Header from '../header';
import Item from '../item';

export class NoteItem extends Component {

  render() {
    const {params: {id}} = this.props.match;
    return (
      <div className='notes-page'>
        <Header id={id} />
        <Item />
      </div>
    )
  }
}

export default withRouter(NoteItem)
