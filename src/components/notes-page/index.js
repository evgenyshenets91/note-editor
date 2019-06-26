import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import ItemList from '../list-items';
import EditModal from '../edit-modal';

import './style.scss';
import Button from '../button';
import Filter from '../filter';


class NotesPage extends Component{ 

  render(){
    return (
      <div className='notes-page'>
        <Header /> 
        <Filter />
        <ItemList />
        {this.props.activeNoteId && <EditModal/>}

        <Button />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNoteId: state.notesPage.activeNoteId
  }
}

export default connect(mapStateToProps, {})(NotesPage)
