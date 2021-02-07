import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import myLinks from '../myLinks.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import { motion } from 'framer-motion';

const BlackFilter = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const QuizContainerHome = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 5px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
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
    <QuizBackground backgroundImage={db.bg} height={'100vh'}>
      <BlackFilter>
        <QuizContainerHome>
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Friends Quiz</h1>
            </Widget.Header>
            <img
              src="https://segredosdomundo.r7.com/wp-content/uploads/2020/08/friends-curiosidades-sobre-uma-das-maiores-series-de-todos-os-tempos.jpg"
              style={{
                width: '100%',
                height: 'auto',
                position: '80% 100%',
                objectFit: 'contain'
              }}
            />
            <h3 align="center">O teste definitivo para quem é fã de friends!</h3>
            <Widget.Content>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  router.push(`/quiz?name=${name}`);
                  console.log('click');
                }}
              >
                {/* <Input
                  name="userName"
                  placeholder="Digite seu nome"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                /> */}
                <Button type="submit">Jogar</Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget
            as={motion.section}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Find me :)</h1>
              <ul>
                {myLinks.externalLinks.map((externalLink) => {
                  const { name, image, link } = externalLink;
                  return (
                    <li key={externalLink}>
                      <Widget.Topic href={link} target="_blank">
                        {name}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainerHome>
        <GitHubCorner projectUrl="https://github.com/kitkoshino" />
      </BlackFilter>
    </QuizBackground>
  );
}
