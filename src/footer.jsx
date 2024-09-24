import React from 'react';
import { Segment, Grid, Container, List, Header } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Explore" />
              <List inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Questions</List.Item>
                <List.Item as="a">Articles</List.Item>
                <List.Item as="a">Tutorials</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Support" />
              <List inverted>
                <List.Item as="a">FAQs</List.Item>
                <List.Item as="a">Help</List.Item>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="Stay connected" />
              <List inverted>
                <List.Item as="a">
                  
                  Facebook
                </List.Item>
                <List.Item as="a">
                 
                  Twitter
                </List.Item>
                <List.Item as="a">
                 
                  Instagram
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={3}>
              <Header inverted as="h4" content="DEV@Deakin 2022" />
              <List inverted>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms</List.Item>
                <List.Item as="a">Code of Conduct</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;