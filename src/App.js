import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import quotesArr from './quotes';
import { Grid, Row, Col, Button } from 'react-bootstrap';

// This Component contains all the UI elements and logic
// Array with quotes is imported from ./quotes
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: quotesArr, // 2D array, array of arrays of 2 elements, quote and author
      index: Math.floor(Math.random() * quotesArr.length) // init index with random value
    };
    this.handleRandIndex = this.handleRandIndex.bind(this);
  }
  // handleRandIndex gives this.state.index a new random value, different than its previous value
  handleRandIndex(){
    let currentIndex = this.state.index;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotesArr.length);
    } while (newIndex === currentIndex);
    this.setState({
      index: newIndex
    });
  }
  // Renders all elements using react-bootstrap Components, see https://react-bootstrap.github.io/
  render() {
    return (
      <Grid fluid='true' className="bg-primary" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid id="quote-box" className='center-block' style={{ backgroundColor: 'white', color: 'black', padding: '30px 30px 30px 30px', maxWidth: '500px', borderRadius: '3px', maxHeight: '500px' }}>
          <Row className='text-center' id="quoteRow">
            <Col>
              <blockquote id="text" style={{ fontSize: '3rem' }}>"{this.state.quotes[this.state.index][0]}"</blockquote>
            </Col>
          </Row>
          <Row id="authorRow" className='text-right'>
            <Col style={{ marginRight: '2rem' }}>
              <p id="author" className='text-muted'>- {this.state.quotes[this.state.index][1]}</p>
            </Col>
          </Row>
          <Row style={{display: 'flex', justifyContent: 'space-between'}}>
            <Col xs={6}>
              <a id='tweet-quote' href='twitter.com/intent/tweet'>
                <Button bsStyle='primary'>tweet</Button>
              </a>
            </Col>
            <Col xs={6} style={{textAlign: 'right'}}>
                <Button id='new-quote' bsStyle='primary' onClick={this.handleRandIndex}>New quote</Button>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

export default App;