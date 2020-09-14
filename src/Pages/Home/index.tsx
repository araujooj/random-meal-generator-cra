import React from 'react'
import { Link } from "react-router-dom";
import Button from '../../Components/Button'
import { Container, Content } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
      <h1>Random Meal Generator</h1>
      <span>Click the button below to generate a completely random meal</span>
      <br/>

      <Link to="/meal">
        <Button>
          <h2>Generate !</h2>
        </Button>
      </Link>
      </Content>
  
    </Container>
  );
};

export default Home;
