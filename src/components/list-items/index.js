import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData, setActiveNote, deleteItem } from '../../actions/'; 
import { getNotes } from '../../helpers/';
import {Link, withRouter}  from 'react-router-dom';

import './style.scss'

class ItemList extends Component {

  componentDidMount(){
    this.props.fetchData();
  }

  // onEdit = (id) => () => {
  //   this.props.setActiveNote(id)
  // }

  render(){
    console.log(this.props.notes)
    const renderItems = this.props.notes.map(item => {
      const {id, text, title, tags} = item;
      return(
        <li key={id}
            className='note-container__item'
        >
          <div>
          <h2 className='note-container__item-title'>
            <Link to={`/note/${id}`}>
              {title}   
            </Link>       
          </h2>
          <p className='note-container__item-text' dangerouslySetInnerHTML={{__html: text}} />
          <p className='note-container__item-tags'>
            <i className="fas fa-hashtag" />
            {tags.map((tag, i) => <span className='wrapper-tag' key={i}>{tag}</span>)}
          </p>
          </div>
          <div className='action-icon'>
            <span onClick={() => this.props.deleteItem(id)}> 
            <i className="far fa-trash-alt" 
                
            />
            </span>
            <Link to={`/note/${id}`}>
              <i className="far fa-edit" />
            </Link>
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

export default connect(mapStateToProps, {fetchData, setActiveNote, deleteItem})(withRouter(ItemList));
