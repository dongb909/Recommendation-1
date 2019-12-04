import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` 
  position: relative;
  background-color: white;
  width: 400px;
  height: 500px;
  z-index: 3;
  border: 1px solid grey;
  /* position: fixed; */
`
const Exit = styled.button` 

`
const Container = styled.div` 
  text-align: center;
`
const Instructions = styled.p` 

`
const Facebook = styled.button` 
  background-color: blue;
  color: white;
`
const Google = styled.button` 
  background-color: red;
  color: white;
`
const Line1 = styled.hr` 

`
const Or = styled.p` 

`
const Line2 = styled.hr` 

`
const SignUp = styled.button` 

`
const SignInText = styled.p` 

`
const SignIn = styled.button` 

`
const ListingWrapper = styled.div` 

`
// const ImageWrapper = styled.div`
//   display: block;
//   width:10px;
//   height: 5px;
// `
// const Image = styled.img` 
//   height:100%;
//   width: 100%;

// `
const Title = styled.p` 

`
const Location = styled.p` 

`
const Ratings = styled.div` 

`
const Stars = styled.div` 

`

function Favorites (props){
  return (
    <Wrapper>
      <Exit onClick={()=> props.handlePopup(false)}>X</Exit>
      <Container>
        <Instructions>Save to list</Instructions>
        <Facebook onClick={() =>window.location.href = 'https://facebook.com'}><img></img>Continue with Facebook</Facebook>
        <br></br>
        <Google onClick={() =>window.location.href = 'https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin'}><img></img>Continue with Google</Google>
        <span><Line1></Line1><span><Or>Or</Or></span><Line2></Line2></span>
        <SignUp><img></img>Sign up with Email</SignUp>
        <SignInText> Already have an Airbnb account? </SignInText>
        <SignIn onClick={() =>window.location.href = 'https://www.airbnb.com/login'}>Sign In</SignIn>
      </Container>
      {/* <ListingWrapper>
        <ImageWrapper>
          <img src="https://s7d4.scene7.com/is/image/roomandboard/wyatt_438274_19e_g?scl=1&size=804,1000&$mobile$" ></img>
        </ImageWrapper>
      </ListingWrapper> */}
    </Wrapper>
  );
}

export default Favorites;