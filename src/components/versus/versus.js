import React, { Component } from 'react';
import axios from 'axios';
import CharacterContext from '../context/characterContext';
import CharacterView from '../characterView/characterView';
import './versus.css';

class Versus extends Component {
    static contextType = CharacterContext;

    state = {
        characterOneData: null,
        characterTwoData: null,
        viewCharacterOne: true,
        viewCharacterTwo: false,
    }

    componentDidMount () {
        //let code = this.context.characterCodeOne;
        //let codeTwo = this.context.characterCodeTwo;

        function getSuperDataOne() {
            let apiKey = process.env.REACT_APP_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/3`;

            return axios.get(url)
        }

        function getSuperDataTwo() {
            let apiKey = process.env.REACT_APP_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/4`;

            return axios.get(url)
        }
        
        Promise.all([getSuperDataOne(), getSuperDataTwo()])
            .then( (results) => {
                const dataOne = results[0];
                const dataTwo = results[1];

                console.log('Promise Data', dataOne.data, dataTwo.data)

                this.setState({
                    characterOneData: dataOne.data,
                    characterTwoData: dataTwo.data
                })
            })
            .catch(err => {
                console.error(err);
              });

    }

    showCharacterOne = () => {
        this.setState({
            viewCharacterOne: true,
            viewCharacterTwo: false
        })
    }

    showCharacterTwo = () => {
        this.setState({
            viewCharacterOne: false,
            viewCharacterTwo: true
        })
    }

    

    render() {
       let characterOne = this.state.characterOneData;
       let characterTwo = this.state.characterTwoData;
    
       if (characterOne === null && characterTwo === null) {
           return <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt=""/>
       } else {
            return  (
                <React.Fragment>
                    <div className="row">
                        <div className="left column">
                                <h2>{characterOne.name}</h2>
                                <img className="title-img" src={characterOne.image.url} alt=""/>
                        </div>
                        <div className="right column">
                                <h2>{characterTwo.name}</h2>
                                <img className="title-img" src={characterTwo.image.url} alt=""/>
                        </div>
                    </div>
                    <div className="title">
                        {characterOne.name} vs. {characterTwo.name}
                    </div>
                    <div className="buttons">
                        <span className="button" onClick={this.showCharacterOne}>{characterOne.name}</span><span className="button" onClick={this.showCharacterTwo}>{characterTwo.name}</span>
                    </div>
                    <CharacterView 
                        characterOne={characterOne}
                        characterTwo={characterTwo}
                        viewCharacterOne={this.state.viewCharacterOne}
                        viewCharacterTwo={this.state.viewCharacterTwo}
                    />
                </React.Fragment>
            )
       }
    }
}


export default Versus
