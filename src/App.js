import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

// components
import Dashboard from './components/dashboard/dashboard';
import Browse from './components/browse/browse';
import Profile from './components/profile/profile';


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
    </MainWrapper>
  );
};

export default App;
