import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { setActiveNote, editNote } from '../../actions/'; 

import './style.scss';


class EditModal extends PureComponent{ 
  state = {
    title: this.props.note.title,
    text: this.props.note.text,
    tags: this.props.note.tags
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const regexp = /(\s|^)\#\w\w+\b/gm;
    let findedTags = this.state.text.match(regexp);
    findedTags = findedTags ? findedTags.map((tag) => tag.trim().slice(1)) : [];
    
    const allTags = [...this.state.tags, ...findedTags];
    const uniqueTags = [...new Set(allTags)];

    this.setState({
      ...this.state,
      tags:  uniqueTags.filter(tag => this.state.text.indexOf(tag) >= 0),
      text: this.state.text.replace(/#/g, '')
    }, this.editNote)
  }

  editNote = () => {
    this.props.editNote(this.props.activeNoteId, this.state);
    this.props.setActiveNote(null);
  }

  onCancel = (e) => {
    e.preventDefault();
    this.props.setActiveNote(null);
  }

  onChange = (fieldName) => (e) => {
    this.setState({
      ...this.state,
      [fieldName]: e.target.value
    })
  }

  render(){
    console.log(this.props.note)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' onChange={this.onChange('title')} value={this.state.title}/>
          <input type='text' onChange={this.onChange('text')} value={this.state.text}/>
          <button type="submit">Save</button>
          <button onClick={this.onCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNoteId: state.notesPage.activeNoteId,
    note: state.notes[state.notesPage.activeNoteId]
  }
}

export default connect(mapStateToProps, {setActiveNote, editNote})(EditModal)
