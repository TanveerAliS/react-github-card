import React, { Component } from 'react';
import SearchBox from './components/searchBox.js';
import Card from './components/card.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'TanveerAliS',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      url: '',
      notFound: ''
    }
  }

  fetchApi (url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          realName: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          url: data.html_url,
          notFound: data.message
        })
      })
      .catch((err) => console.log("Oop's !!! No data"))
  }

  fetchUser (username) {
    let url = `https://api.github.com/users/${username}`
    this.fetchApi(url);
  }

  componentDidMount () {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchApi(url);
  }

  render() {
    return (
      <div className="App">
        <SearchBox fetchUser={this.fetchUser.bind(this)} />
        <Card data={this.state} />
      </div>
    );
  }
}