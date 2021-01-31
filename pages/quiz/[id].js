import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function OthersQuiz({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalQuestions={externalDb.questions}
        externalBg={externalDb.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const externalDb = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Falha em pegar os dados');
    })
    .then((resAsObjects) => {
      return resAsObjects;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      externalDb // will be passed to the page component as props
    }
  };
}
