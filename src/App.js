import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

import Dashboard from './components/dashboard/dashboard';

const MainWrapper = styled.section`
  width: 100vw;
  max-width: 1500px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <MainWrapper>
      <Route exact path="/" component={Dashboard}/>
    </MainWrapper>
  );
};

export default App;
