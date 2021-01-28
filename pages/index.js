import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Head from 'next/head'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
// Javascript
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex:1;
  background-size: cover;
  background-position: center;
`
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
`

export default function Home() {
  return (
  <>
      <Head>
        <title>Quiz</title>
        <meta property="og:title" content="Taka - Next.js" key="title" />
        <meta property="og:description" content="Site elaborado com as tecnologias do react.js e next.js"/>
        <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />
      </Head>

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1> Olá! Essa é uma aplicação React </h1>
        </Widget.Header>
        <Widget.Content>
          <p> Lorem oasdi dorem itmus. </p>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1> Olá! Essa é uma aplicação React </h1>
          <p> Lorem ipsum dorem itmus. </p>
        </Widget.Content>
      </Widget>
      <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/matheustakasaki"/>
    </QuizBackground>
  </>
  );
}
