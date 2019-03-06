import React, { Component } from 'react';
import Nav from './components/Nav';

class App extends Component {
  constructor(props){
    super(props);
  }

  // Preload Images
  componentDidMount(){
    this.props.pictures.forEach(picture => {
      const img = new Image();
      img.src = picture
    });
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    );
  }
}

export default App;
