import React from 'react';
import { Container, Card, Divider, Header, Button } from 'semantic-ui-react';
import image1 from './images/pic5.jpg'
import image2 from './images/pic6.jpg'
import image3 from './images/pic7.jpg'

const FeaturedTutorials = () => {
  const Tutorials = [
    {
      image: image1,
      name: 'OBITO UCHIHA',
      description: 'Member of clan',
      author: 'Author 1',
    },
    {
        image: image2,
        name: 'SASUKE UCHIHA',
        description: 'Teacher of Naruto',
        author: 'Author 2',
      },
      {
        image: image3,
        name: 'HINATA HYUGA',
        description: 'Distant cousin of Naruto',
        author: 'Author 3',
      },
  ];

  return (
    <div>
     <center><Header as='h2'>Featured Side Charactors</Header></center> 
     <br />
     <Container>
      <Card.Group itemsPerRow={3}>
        {Tutorials.map((article, index) => (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{article.name}</Card.Header>
              
                <img src={article.image} alt={article.name} wrapped ui={false} size= "small"
                style={{height:"200px", width:"300px"}}/>
              
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui star rating'>
                <i className='icon rating' />
                <i className='icon rating' />
                <i className='icon rating' />
                <i className='icon rating' />
                <i className='icon rating' />
              </div>
              <span>{article.author}</span>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Divider />
      <center><Button color='blue' size='small'>View more</Button></center>
      </Container>
      <br />
      <br />

    </div>
  );
};

export default FeaturedTutorials;