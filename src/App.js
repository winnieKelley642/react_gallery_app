import React, { Component } from 'react';
import './index.css';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from './config.js';
import axios from 'axios';

import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import Nav from './Components/Nav';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      stars: [],
      legos: [],
      candy: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query) =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)

      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          stars: response.data.photos.photo,
          legos: response.data.photos.photo,
          candy: response.data.photos.photo,
          query: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });    
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className = 'container'>
          <h1 className = 'main-title'>Flickr Image Search</h1>
          
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {
          (this.state.loading)? <p>Loading...</p> :  
              <Gallery data={this.state.photos} />
          }
          <Switch>
            <Route path = '/stars' render = {() => this.performSearch('stars')}/>} />
            <Route path = '/legos' render = {() => this.performSearch('legos')}/>} />
            <Route path = '/candy' render = {() => this.performSearch('candy')}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}