import React, { Component } from 'react';
import axios from 'axios';
import CharacterContext from '../context/characterContext';

class Versus extends Component {
    static contextType = CharacterContext;

    state = {
        characterOne: {
            superData: {},
            comicData: {}
        },
        characterTwo: {
            superData: {},
            comicData: {}
        }
    }

    componentDidMount () {

        function getSuperDataOne() {
            let code = this.context.characterOneCode;
            let apiKey = process.env.REACT_APP_SH_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${code}`;

            return axios.get(url)
        }

        function getSuperDataTwo() {
            let code = this.context.characterTwoCode;
            let apiKey = process.env.REACT_APP_SH_APIKEY;
            let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${code}`;

            return axios.get(url)
        }
        
        Promise.all([getSuperDataOne(), getSuperDataTwo()])
            .then( (results) => {
                const dataOne = results[0];
                const dataTwo = results[1];

                console.log(dataOne.data, dataTwo.data)

                this.setState({
                    characterOne: {
                        superData: dataOne.data
                    },
                    characterTwo: {
                        superData: dataTwo.data
                    }
                })
            });
        
        console.log(this.state);
    }


    render() {
        return (
            <div>
               <h1>Hello Worccld</h1> 
            </div>
        )
    }
}

export default Versus
