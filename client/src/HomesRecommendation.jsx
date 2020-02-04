import React from 'react';
import axios from 'axios';
import Listings from './Listings.jsx';
import styled from 'styled-components';
import Favorites from './Favorites.jsx'

const MainWrapper = styled.div`
  font-family: Helvetica Neue, sans-serif;
  position:relative;
  height: 420px;
  // flex-direction: row;
  // flex:1;
`;

const Container = styled.div`
  width: 915px;
  height:420px;
  position: relative;
  margin:auto;
  overflow: hidden;
  @media(max-width: 992px) {
    width:600px;
  }
`
const ListingsDiv = styled.div`
  position:relative;
  // border: 1px solid red;
  height: 350px;
  list-style:none;
`;

const PrevButton = styled.button` 
  position: absolute;
  display: inline-block;
  font-family: 'Nanum Myeongjo', serif;
  top: 50%;
  transform:translateY(-50%);
  cursor:pointer;
  left:0%;
`;

const NextButton = styled.button`
  position: absolute;
  font-family: 'Nanum Myeongjo', serif;
  top:50%;
  display: inline-block;
  transform:translateY(-50%);
  cursor:pointer;
  right:0%;

`;

const Title = styled.h2`
  text-align: left;
  padding-left:7.5px;
`;
class Recommendation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currIndex: 0,
      allListings: [],
      displayPopup: false
    }
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }

  componentDidMount () {
    axios.get("http://localhost:9004/allHomes")
      .then((res) => {console.log(res.data);
        this.setState({allListings: res.data})})
      .catch((err)=> console.log('error from CLIENT AXIOS ************ req', err));
 
  }

  moveRight (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex+1;
    this.setState({currIndex:newIndex});
  }

  moveLeft (event) {
    // event.preventDefault();
    const newIndex = this.state.currIndex-1;
    this.setState({currIndex:newIndex});
  }

  handlePopup (boolean) {
    event.preventDefault()
    this.setState({displayPopup: boolean});
  }

  render() {

    return (
      <MainWrapper>
        <PrevButton id="outterLeftArrow" onClick={() => this.moveLeft()} disabled={this.state.currIndex===0}> &#8249; </PrevButton>
        <Container>
          <Title>More homes you may like</Title>
          <Listings allListings={this.state.allListings} currIndex={this.state.currIndex} handlePopup={this.handlePopup}/>
        </Container>
        {this.state.displayPopup ? (<Favorites handlePopup={this.handlePopup} />) : null}
        <NextButton id="outterRightArrow" onClick={()=>this.moveRight()} disabled={this.state.currIndex === this.state.allListings.length-3}> &#8250; </NextButton>
      </MainWrapper>
    );
  }
}
export default Recommendation;

