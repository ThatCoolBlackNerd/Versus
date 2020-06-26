import React, { Component } from 'react';
import axios from 'axios';
import CharacterContext from '../context/characterContext';

class Versus extends Component {
    static contextType = CharacterContext;

    state = {
        characterOneData: "",
        characterTwoData: ""
    }

    componentDidMount () {
        let code = this.context.characterCodeOne;
        let codeTwo = this.context.characterCodeTwo;

        function getSuperDataOne() {
            let apiKey = process.env.REACT_APP_SH_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${code}`;

            return axios.get(url)
        }

        function getSuperDataTwo() {
            let apiKey = process.env.REACT_APP_SH_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${codeTwo}`;

            return axios.get(url)
        }
        
        Promise.all([getSuperDataOne(), getSuperDataTwo()])
            .then( (results) => {
                const dataOne = results[0];
                const dataTwo = results[1];

                console.log(dataOne.data, dataTwo.data)

                this.setState({
                    characterOneData: dataOne.data,
                    characterTwoData: dataTwo.data
                })
            });

    }


    render() {
        characterOne = this.state.characterOneData;
        characterTwo = this.state.characterTwoData;

        return (
            <div>
               <div className="row">
                   <div className="column">
                        <h2>{characterOne.name}</h2>
                        <img src={characterOne.image.url} />
                   </div>
                   <div className="column">
                       Versus
                   </div>
                   <div className="column">
                        <h2>{characterOne.name}</h2>
                        <img src={characterTwo.image.url} />
                   </div>
               </div>
            </div>
        )
    }
}

export default Versus
