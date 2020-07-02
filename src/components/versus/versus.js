import React, { Component } from 'react';
import axios from 'axios';
import CharacterContext from '../context/characterContext';
import CharacterView from '../characterView/characterView';
import './versus.css';
import Fight from '../fight/fight';
import { Link } from 'react-router-dom';

class Versus extends Component {
    static contextType = CharacterContext;

    state = {
        characterOneData: null,
        characterTwoData: null,
        viewCharacterOne: true,
        viewCharacterTwo: false,
    }

    componentDidMount () {
        // let code = this.context.characterCodeOne;
        // let codeTwo = this.context.characterCodeTwo;

        function getSuperDataOne() {
            let apiKey = process.env.REACT_APP_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/44`;

            return axios.get(url)
        }

        function getSuperDataTwo() {
            let apiKey = process.env.REACT_APP_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/145`;

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

    fightWinner = () => {
        let cOne = this.state.characterOneData.powerstats;
        let cTwo = this.state.characterTwoData.powerstats;
        
        let characterOneTotal = Object.keys(cOne).reduce((sum,key)=>sum+parseFloat(cOne[key]||0),0);
        let characterTwoTotal = Object.keys(cTwo).reduce((sum,key)=>sum+parseFloat(cTwo[key]||0),0);

        console.log(`Total One: ${characterOneTotal} and Total Two: ${characterTwoTotal}`)

        if (characterOneTotal > characterTwoTotal) {
            return true
        } else {
            return false
        }
    }

    

    render() {
       let characterOne = this.state.characterOneData;
       let characterTwo = this.state.characterTwoData;
    
       if (characterOne === null && characterTwo === null) {
           return <img className='loading' src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt=""/>
       } else {
            return  (
                <React.Fragment>
                    <div className="row">
                        <div className="left column">
                                <h2>{characterOne.name}</h2>
                                <img className="title-img" src={characterOne.image.url} alt=""/>
                        </div>
                        <div className="column">
                                <h2>{characterTwo.name}</h2>
                                <img className="title-img" src={characterTwo.image.url} alt=""/>
                        </div>
                    </div>
                    <div className="title">
                        {characterOne.name} vs. {characterTwo.name}
                    </div>
                    <div className="buttons">
                        <div className={`button ${this.state.viewCharacterOne ? "active" : ""}`} onClick={this.showCharacterOne}>
                            {characterOne.name}
                        </div>
                        <div className={`button ${this.state.viewCharacterTwo ? "active" : ""}`} onClick={this.showCharacterTwo}>
                            {characterTwo.name}
                        </div>
                    </div>
                    <CharacterView 
                        characterOne={characterOne}
                        characterTwo={characterTwo}
                        viewCharacterOne={this.state.viewCharacterOne}
                        viewCharacterTwo={this.state.viewCharacterTwo}
                    />
                    <div className="title-fight">
                        Who Wins In A Fight!!
                    </div>
                    <div className="row winner-row">
                        <div className="left-winner column">
                            <Fight 
                                characterOne={characterOne}
                                characterTwo={characterTwo}
                            />
                            <Link to='/'>
                                <button className='newCharacter'>
                                    Choose New Characters
                                </button>
                            </Link>
                        </div>
                        <div className="right column">
                            {this.fightWinner() ? (
                                <React.Fragment>
                                    <h2>{characterOne.name}</h2>
                                    <img className="win-img" src={characterOne.image.url} alt=""/>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <h2>{characterTwo.name}</h2>
                                    <img className="win-img" src={characterTwo.image.url} alt=""/>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
       }
    }
}


export default Versus
