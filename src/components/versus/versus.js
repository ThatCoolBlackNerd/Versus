import React, { Component } from 'react';
import axios from 'axios';
import CharacterContext from '../context/characterContext';

class Versus extends Component {
    static contextType = CharacterContext;

    state = {
        characterOne: {
            superData: {},
            comicData: {}
        }
    }

    async componentDidMount () {
        let code = this.context.chosenCharacters.characterOne.code;
        let apiKey = '10101046963798377';
        let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${apiKey}/${code}`
        
        const response = await axios.get(url);
        const shData = response.data;

        let apiKeyTwo = '8783397cb5c4676dffcda5c5af5d4c9086a4ae9d';
        let urlTwo = `https://cors-anywhere.herokuapp.com/https://www.comicvine.com/api/search?api_key=${apiKeyTwo}&limit=1&format=json&query=${shData.biography["full-name"]}&query=${shData.name}&resources=character`
        
        const responseTwo = await axios.get(urlTwo);
        const cvData = responseTwo.data.results[0];

        this.setState({ characterOne: { superData: shData, comicData: cvData }})
        console.log(this.state.characterOne.superData, this.state.characterOne.comicData);

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
