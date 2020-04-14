import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
const ImageBackground = styled('div')`
  background-image: url('/images/london.jpg');
  background-position: top 80% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;
const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdb 2rem, #ddbbff01);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 3px #eeddff65;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;
const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Gatsby Blog</h1>
        <p>
          Hello <Link to="/about/">Here is more info about me</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
