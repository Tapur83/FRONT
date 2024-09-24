import React from 'react';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import picture1 from './images/pic1.jpg';

const Head = () => (
  <Container>
    <br />
    <br />
    <Image src={picture1} fluid style={{ borderRadius: '10px' }} />
    <br />
    <br />
  </Container>
);

export default Head;