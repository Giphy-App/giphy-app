import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [],
      searchInput: ''
    }
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log('this.state',this.state)
  }
  async handleSubmit(event){
    event.preventDefault()
    const query=this.state.searchInput
    try{
      const {data} = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=HkfXFPHQMKATUUpd2DrfSqy5QNY98nUS&limit=5`)
      console.log('data',data)
      this.setState({
        data,
        searchInput: ''
      })
    } catch (error) {
      console.error(error)
    }

  }

  render() {
    return (
      <div id='header'>
          <h1>
            Giphy Fun
          </h1>
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name='searchInput'id='searchBar' type="text" placeholder="Search.." onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
        </form>
      </div>

      </div>
    );
  }
}

export default App;
