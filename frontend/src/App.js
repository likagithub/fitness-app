import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

// components
import Dashboard from 'pages/dashboard';
import Browse from 'pages/browse';
import Profile from 'pages/profile';
import Program from 'pages/program';
import Workout from 'pages/workout';
import Exercise from 'pages/exercise';


const MainWrapper = styled.section`
  width: 100vw;
  margin: 0 auto;
`;

const App = () => {
  return (
    <MainWrapper>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/browse" component={Browse}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/program/:programId/workout/:id" component={Workout} exact/>
      <Route path="/program/:id" component={Program} exact/>
      <Route path="/exercise" component={Exercise}/>
    </MainWrapper>
  );
};

export default App;
