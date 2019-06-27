import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNoteId, fetchData, editNote, setActiveNote } from '../../actions/'; 
import { getNotesById } from '../../helpers/';
import {Link, withRouter}  from 'react-router-dom';
import ContentEditable from 'react-contenteditable';

import './style.scss';
import Button from '../button';

class Item extends Component {

  static defaultProps = {
    note: {
      text: '',
      title: '',
      tags: []
    }
  }

  state = {
    title: this.props.note.title,
    text: this.props.note.text,
    tags: this.props.note.tags
  }

  onSubmit = () => {
    const regexp = /(\s|^)\#\w\w+\b/gm;
    let findedTags = this.state.text.match(regexp);
    findedTags = findedTags ? findedTags.map((tag) => tag.trim().slice(1)) : [];
    
    const allTags = [...this.state.tags, ...findedTags];
    const uniqueTags = [...new Set(allTags)];

    this.setState({
      ...this.state,
      text: this.state.text.replace(/#/g, ''),
      tags:  uniqueTags.filter(tag => this.state.text.indexOf(tag) >= 0)
    }, this.editNote)
  }
 
  onChange = (fieldname) => (e) => {
    this.setState({
      ...this.state,
      [fieldname]: e.target.value
    });
  }


  editNote = () => {
    const {params: {id}} = this.props.match;
    this.props.editNote(id, this.state);
  }

  componentWillReceiveProps(nextProps){
    const {text, tags, title, id} = nextProps.note;
    if(this.state !== nextProps.note) {
      this.setState({
        text, title, tags
      }, this.arrSplite)
    }
  }

  componentDidMount(){
    const {params: {id}} = this.props.match;
      this.props.fetchNoteId(id);
    
 

    this.setState({
      title: this.props.note.title,
      text: this.props.note.text,
      tags: this.props.note.tags
    })

    // this.props.editNote(id, this.state)
  }


  arrSplite = () => {
    const {note} = this.props;
    const arrOfWords = note.text.split(/(\s+)/);
    let newText = arrOfWords.map( word => {
      if (note.tags.includes(word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''))) {
               return `<span class="item-focus">${word}</span>`
      } else {
          return word;
      }
    })
    this.setState({
      ...this.state,
      text: newText.join("")
    })
  }

  onEdit = (id) => () => {
    this.props.setActiveNote(id)
  }

  render(){
    console.log(this.state.text)
    const {note} = this.props;
    const tagsValue = note.tags.map((tag, i) => <span className='wrapper-tag' key={i}>{tag}</span>)
    const isEmpty = this.state.tags.length !== 0 ? tagsValue : 'No tags';

    return note? (
      <section className='note-container'>
        <div className='editable-container'>
          <ContentEditable className='note-container__item-title'
                           tagName='h2'
                           html={this.state.title}
                           onChange={this.onChange('title')}
          />
          <ContentEditable html={this.state.text}
                           onChange={this.onChange('text')}
                           className='note-container__item-text'
                           tagName='p'
  
          />
          <button className='note-container_save-button'
                  onClick={this.onSubmit}
                  type='submit'
          >
            Save
          </button>
        </div>

        <p className='note-container__item-tags'>        
            <i className="fas fa-hashtag"/>
              {isEmpty}
        </p>

          
      </section>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return {
    note: getNotesById(state, state.notePage.id)
  }
}

// const mapDipatchToProps = (state, ownProps) => {
//   return{

//   }
// }

export default connect(mapStateToProps, {fetchNoteId, fetchData, editNote, setActiveNote})(withRouter(Item));
