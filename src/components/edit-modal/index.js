import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { setActiveNote, editNote, createNote } from '../../actions/'; 

import './style.scss';
import Button from '../button';


class EditModal extends PureComponent{ 
  state = {
    id: null,
    title: '',
    text: '',
    tags: ''
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
      id: (Date.now() + Math.random()).toString(),
      tags:  uniqueTags.filter(tag => this.state.text.indexOf(tag) >= 0),
      text: this.state.text.replace(/#/g, '')
    }, this.createNote)
  }

  createNote = () => {
    this.props.createNote(this.state)
    this.setState({
      id: null,
      title: '',
      text: '',
      tags: ''
    });
    this.props.toggleOpen();
  }

  onChange = (fieldName) => (e) => {
    this.setState({
      ...this.state,
      [fieldName]: e.target.value
    })
  }

  render(){
    const {toggleOpen} = this.props;
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.onSubmit}
              className='form-wrapper__modal'
        >
          <label>
            Title:
          <input className='form-wrapper_input-title' 
                 type='text' 
                 onChange={this.onChange('title')} 
                 value={this.state.title} 
          />
          </label>
          <label>
            Text:
          <textarea className='form-wrapper_input-text' 
                 type='textarea' 
                 onChange={this.onChange('text')} 
                 value={this.state.text}
          />
          </label>

          <button type="submit">Save</button>
          <button type="text"
                  onClick={toggleOpen}
          >
            Cancel
          </button>
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

export default connect(mapStateToProps, {setActiveNote, editNote, createNote})(EditModal)
