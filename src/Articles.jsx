import React from 'react';
import { Container, Card, Divider, Header, Button } from 'semantic-ui-react';
import image1 from './images/pic2.jpg'
import image2 from './images/pic3.jpg'
import image3 from './images/pic4.jpg'

const FeaturedArticles = () => {
  const articles = [
    {
      image: image1,
      name: 'NARUTO',
      description: 'The main character',
      author: 'Author 1',
    },
    {
        image: image2,
        name: 'KAKASHI',
        description: 'He is a Ninja-Teacher',
        author: 'Author 2',
    },
    {
      image: image3,
      name: 'MINATO',
      description: 'Naruto-Father',
      author: 'Author 3',
  },
  ];

  return (
    <div>
     <center><Header as='h2'>Featured Main Charactors</Header></center> 
     <br />
     <Container>
      <Card.Group itemsPerRow={3}>
        {articles.map((article, index) => (
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

export default FeaturedArticles;