import React from 'react';
import styled from 'styled-components';


import Dashboard from './components/Dashboard/Dashboard';

const MainWrapper = styled.section`
  max-width: 1500px;
  margin: 0 20px;
`;

const App = () => {
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
};

export default App;
