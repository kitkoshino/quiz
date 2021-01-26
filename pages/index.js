import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const BlackFilter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

// const handleSubmit = (event) => {

//   event.preventDefault();
//   const name = 'Kit';
//   router.push(`/quiz?name=${name}`);
//   console.log('click');
// };

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <BlackFilter>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Friends</h1>
            </Widget.Header>
            <Widget.Content>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  router.push(`/quiz?name=${name}`);
                  console.log('click');
                }}
              >
                <input placeholder="Digite seu nome" onChange={(event) => {
                  setName(event.target.value);
                }}/>
                <button type="submit">Jogar</button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Friends</h1>
              <p>Quem sabe mais</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/kitkoshino" />
      </BlackFilter>
    </QuizBackground>
  );
}
