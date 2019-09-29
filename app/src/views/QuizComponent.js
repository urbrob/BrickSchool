import React, {Component} from 'react';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
// import Question from '../Components/Question';
// import QuestionCount from '../Components/QuestionCount';
import Quiz from '../components/QuizComponent/Quiz';
// import AnswerOption from '../Components/AnswerOption';
import HeaderMenu from "../components/HeaderMenu";
import FooterCredits from "../components/FooterCredits";
import ContentWrapper from "../components/ContentWrapper";

const QuizeQuery = gql`
    query{
      quizzes(title: "Choosing school"){
        id
        title
        questionSet{
          title
          category
        }
      }
    }`


function QuizComponent() {
    const { loading, error, data } = useQuery(QuizeQuery);
    if (loading) return 'Loading';
    if (error) return 'Error';

    let quiz = data.quizzes[0]

    return (

        <div className="App">
            <HeaderMenu/>

                <Quiz {...quiz}  />

            <FooterCredits
                style={{
                    marginTop:"500px"
                }}
            />
        </div>
    )
}


export default QuizComponent;