import React from 'react';
import { Form, Input, Button, Container } from 'semantic-ui-react';

const subscribe= () =>{
    return(

        <div>
            <Container>
                <center>
            <Form>
            <label>SIGN UP FOR OUR DAILY INSIDER</label>
                <Form.Field inline>
                <Input type="email" placeholder='Enter your email' />
                <Button primary>Subscribe</Button>
                </Form.Field>
            </Form>
            </center>
            </Container>
            <br />
            <br />
        </div>
    );
};

export default subscribe;