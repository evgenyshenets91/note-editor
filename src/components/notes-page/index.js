import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import ItemList from '../list-items';
import EditModal from '../edit-modal';

import './style.scss';


class NotesPage extends Component{ 

  render(){
    return (
      <div className='notes-page'>
        <Header /> 
        <ItemList />
        {this.props.activeNoteId && <EditModal/>}
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
