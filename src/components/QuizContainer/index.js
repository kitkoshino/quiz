
import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding-top: 5px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;