import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({searchText: e.target.value});
    // console.log(`search text = ${this.state.searchText}`);  
    }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    // console.log(`query = ${this.query.value}}`);

    e.currentTarget.reset();
  } 
  
  render() {  
    return (
        <div className = 'search'>
            <form className = 'search-form' onSubmit={this.handleSubmit} >
                <input type = 'search'
                    onChange = {this.onSearchChange}
                    name = 'search'
                    ref = {(input) => this.query = input}
                    placeholder = 'Type here to search Flickr images...' />
                <button type = 'submit' id = 'submit' className = 'search-button'><i className = 'material-icons icn-search'>search</i></button>
            </form>
        </div>
    );
  }
}