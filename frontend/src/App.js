import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

// components
import Dashboard from 'components/dashboard/dashboard';
import Browse from 'components/browse/browse';
import Profile from 'components/profile/profile';
import Program from 'components/program/program';

//test
import Test from 'components/data-test'

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
      <Route path="/program" component={Program}/>

      <Route path="/data-test" component={Test}/>

    </MainWrapper>
  );
};

export default App;