import React, { Component } from 'react';
import './App.css';
import Map from './Map.jsx';
import Chat from './Chat.jsx';

class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //   .then(res => this.setState({ response: res.express }))
  //   .catch(err => console.log('there is an error'));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
    console.log('response: ', this.state.response);
    return (
      <div>
        <Map />
        <Chat />
      </div>
    );
  }
}

export default App;
