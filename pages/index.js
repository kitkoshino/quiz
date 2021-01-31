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
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';
import { motion } from 'framer-motion';

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
          <Widget
            as={motion.section}
            transition={{delay: 0, duration: 0.5}}

            variants={{
              show: { opacity: 1, y:'0' },
              hidden: { opacity: 0, y:'100%' }
            }}
            initial="hidden"
            animate="show"
          >
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
                <Input
                  name="userName"
                  placeholder="Digite seu nome"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget
            as={motion.section}
            transition={{delay:0.3, duration: 0.5}}
            variants={{
              show: { opacity: 1, y:'0' },
              hidden: { opacity: 0, y:'100%' }
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <ul>
                {db.external.map((linkExterno) => {
                  const [projectName, githubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Widget
            as={motion.section}
            transition={{delay:0.6, duration: 0.5}}

            variants={{
              show: { opacity: 1, y:'0' },
              hidden: { opacity: 0, y:'100%' }
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
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/kitkoshino" />
      </BlackFilter>
    </QuizBackground>
  );
}
