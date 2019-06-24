import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData, setActiveNote } from '../../actions/'; 
import { getNotes } from '../../helpers/'

import './style.scss'

class ItemList extends Component {

  componentDidMount(){
    this.props.fetchData();
  }

  onEdit = (id) => () => {
    this.props.setActiveNote(id)
  }

  render(){
    const renderItems = this.props.notes.map(item => {
      const {id, text, title, tags} = item;
      return(
        <li key={id}
            className='note-container__item'
        >
          <div>
          <h3 className='note-container__item-title'>{title}</h3>
          <p>{text}</p>
          <p className='note-container__item-tags'>
            <i className="fas fa-hashtag" />
            {tags.map((tag, i) => <span className='wrapper-tag' key={i}>{tag}</span>)}
          </p>
          </div>
          <div className='action-icon'>
            <i className="far fa-trash-alt"></i>
            <i className="far fa-edit" onClick={this.onEdit(id)}></i>
          </div>
        </li>
      )
    }) 
    return (
      <section className='note-container'>
        <h2 className='visually-hidden'>Note list items</h2>
        <ul className='note-container__item-list'>
          {renderItems}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => {

  return {
    notes: getNotes(state)
  }
}

export default connect(mapStateToProps, {fetchData, setActiveNote})(ItemList)
