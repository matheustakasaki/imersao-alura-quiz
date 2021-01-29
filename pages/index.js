import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// Javascript
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex:1;
//   background-size: cover;
//   background-position: center;
// `;
// Javascript
export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding:15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta property="og:title" content="Taka - Next.js" key="title" />
        <meta property="og:description" content="Site elaborado com as tecnologias do react.js e next.js" />
        <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1> Olá! Essa é uma aplicação React </h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={ function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input onChange={function (event) {
                  console.log(event.target.value);
                  // State
                  // setName
                  setName(event.target.value);
                }} placeholder="Joao" />
                <button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </button>
              </form>
              <p> Lorem oasdi dorem itmus. </p>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1> Olá! Essa é uma aplicação React </h1>
              <p> Lorem ipsum dorem itmus. </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/matheustakasaki" />
      </QuizBackground>
    </>
  );
}
