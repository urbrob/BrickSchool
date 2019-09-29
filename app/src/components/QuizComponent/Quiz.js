import React, { Component } from 'react';
import QuestionCount from './QuestionCount';
import Question from './Question';
import AnswerOption from './AnswerOption';
import Result from './Result';
import endData from './endData';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            questions: this.props.questionSet,
            length: this.props.questionSet.length,
            counter: 0,
            answerOptions: [0, 1, 2, 3, 4, 5],
            answer: this.props.questionSet[0].title,
            question: this.props.questionSet[0],
            answersScore: {},
            end: false,
        }
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        console.log(this.state)
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;

        this.setState({
            counter: counter,
            question: this.state.questions[counter],
            answer: this.state.questions[counter].title,
        });
        console.log(this.state)
    }

    summary() {
        let score = this.state.answersScore
        score = Object.keys(score).reduce(function(a, b){ return score[a] > score[b] ? a : b });
        let result = endData.map(function(e) {if(e.type == score){return e}})

        result = result.filter(function(item){
            return typeof item ==='object';
        });

        this.setState({
            end: true,
            result: result[0],
        });
        console.log(this.state)
    }

    handleAnswerSelected(event, key, value) {
        let score = this.state.answersScore
        if (score[key]) {
            score[key] += value;
        }
        else {
            score[key] = value;
        }

        if (this.state.counter < this.state.length - 1) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.summary(), 300);
        }
    }


    render() {
        if(this.state.end == false) {
            return (
                <div className="container">
                    <QuestionCount counter={this.state.counter} total={this.state.length} />
                    <Question content={this.state.question.title} />
                    <ul className="answerOptions">
                    {this.state.answerOptions.map((number) =>
                        <AnswerOption key={number} onAnswerSelected={this.handleAnswerSelected} answer={number} types={this.state.question.category}/>
                    )}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <h1></h1>
                    <Result type={this.state.result.title} characteristic={this.state.result.characteristic} job={this.state.result.job} />

                </div>
            )
        }
    }
}

export default Quiz;
