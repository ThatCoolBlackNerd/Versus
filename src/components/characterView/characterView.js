import React, { Component } from 'react';
import './characterView.css';
import face from './face.png';
import fist from './fist.png';
import script from './script.png';

class CharacterView extends Component {
    state={
        characterOneApp: true,
        characterTwoApp: false,
        characterOneBio: false,
        characterTwoBio: false,
        characterOnePower: false,
        characterTwoPower: false
    }

    showCharacterOneApp = () => {
        this.setState({
            characterOneApp: true,
            characterOneBio: false,
            characterOnePower: false
        })
    }

    showCharacterTwoApp = () => {
        this.setState({
            characterTwoApp: true,
            characterTwoBio: false,
            characterTwoPower: false
        })
    }

    showCharacterOneBio = () => {
        this.setState({
            characterOneApp: false,
            characterOneBio: true,
            characterOnePower: false
        })
    }

    showCharacterTwoBio = () => {
        this.setState({
            characterTwoApp: false,
            characterTwoBio: true,
            characterTwoPower: false
        })
    }

    showCharacterOnePower = () => {
        this.setState({
            characterOneApp: false,
            characterOneBio: false,
            characterOnePower: true
        })
    }

    showCharacterTwoPower = () => {
        this.setState({
            characterTwoApp: false,
            characterTwoBio: false,
            characterTwoPower: true
        })
    }
 
    render() { 
        const { characterOne, characterTwo, viewCharacterOne, viewCharacterTwo} = this.props;
        return (
            <React.Fragment>
            {viewCharacterOne ? (
                <div className="characterContainer">
                    <div className="characterInfo">
                    <div className="data dta-left">
                        {this.state.characterOneApp ? 
                            <img className='imgTwo'src={face} alt={characterOne.name} /> : 
                         this.state.characterOneBio ? 
                            <img className='imgTwo'src={script} alt={characterOne.name} /> :
                        this.state.characterOnePower ?
                            <img className='imgTwo' src={fist} alt={characterOne.name} /> :
                            <img className='imgTwo'src={face} alt={characterOne.name} />
                        }
                    <div>
                            <span className="stats" onClick={this.showCharacterOneApp}><img className="logo" src={face} alt='Apperance' /></span><span className="stats" onClick={this.showCharacterOneBio}><img src={script} className="logo" alt='Biography' /></span><span className="stats" onClick={this.showCharacterOnePower}><img src={fist} className="logo" alt='Power Stats' /></span>
                        </div>
                    </div>
                        {this.state.characterOneApp ? (
                            <div className="data dta-right">
                                <h3>Appearance</h3>
                                <ul>
                                    <li>Eye Color: {characterOne.appearance["eye-color"]}</li>
                                    <li>Hair Color: {characterOne.appearance["hair-color"]}</li>
                                    <li>Gender: {characterOne.appearance.gender}</li>
                                    <li>Height: {characterOne.appearance.height[0]}</li>
                                    <li>Weight: {characterOne.appearance.weight[0]}</li>
                                    <li>Race: {characterOne.appearance.race}</li>
                                </ul> 
                            </div> ) : this.state.characterOneBio ? (
                            <div className="data">
                                <h3>Biography</h3>
                                <ul>
                                    <li>Alias: {characterOne.biography.aliases[0]}</li>
                                    <li>Alignment: {characterOne.biography.alignment}</li>
                                    <li>Alter Ego: {characterOne.biography["alter-egos"]}</li>
                                    <li>First Apperance: {characterOne.biography["first-appearance"]}</li>
                                    <li>full Name: {characterOne.biography["full-name"]}</li>
                                    <li>Race: {characterOne.biography.race}</li>
                                    <li>Place of Birth: {characterOne.biography["place-of-birth"]}</li>
                                    <li>Publisher: {characterOne.biography.publisher}</li>
                                </ul> 
                            </div> ) : this.state.characterOnePower ? (
                            <div className="data">
                                <h3>Power Stats</h3>
                                <ul>
                                    <li>Combat: {characterOne.powerstats.combat}</li>
                                    <li>Durability: {characterOne.powerstats.durability}</li>
                                    <li>Intelligence: {characterOne.powerstats.intelligence}</li>
                                    <li>Power: {characterOne.powerstats.power}</li>
                                    <li>Speed: {characterOne.powerstats.speed}</li>
                                    <li>Strength: {characterOne.powerstats.strength}</li>
                                </ul> 
                            </div> ) : <p>This charcter has no information</p>}
                    </div> 
                </div> ) : viewCharacterTwo ? (
                    <div className="characterContainer">
                    <div className="characterInfo">
                        <div className="data dta-left">
                            {this.state.characterTwoApp ? 
                                <img className='imgTwo'src={face} alt={characterTwo.name} /> : 
                            this.state.characterTwoBio ? 
                                <img className='imgTwo'src={script} alt={characterTwo.name} /> :
                            this.state.characterTwoPower ?
                                <img className='imgTwo' src={fist} alt={characterTwo.name} /> :
                                <img className='imgTwo'src={face} alt={characterTwo.name} />
                            }
                        <div>
                                <span className="stats" onClick={this.showCharacterTwoApp}><img src={face} className="logo" alt='Apperance' /></span><span className="stats" onClick={this.showCharacterTwoBio}><img src={script} className="logo" alt='Biography' /></span><span className="stats" onClick={this.showCharacterTwoPower}><img src={fist} className="logo" alt='Power Stats' /></span>
                            </div>
                        </div>
                        {this.state.characterTwoApp ? (
                            <div className="data">
                                <h3>Appearance</h3>
                                <ul>
                                    <li>Eye Color: {characterTwo.appearance["eye-color"]}</li>
                                    <li>Hair Color: {characterTwo.appearance["hair-color"]}</li>
                                    <li>Gender: {characterTwo.appearance.gender}</li>
                                    <li>Height: {characterTwo.appearance.height[0]}</li>
                                    <li>Weight: {characterTwo.appearance.weight[0]}</li>
                                    <li>Race: {characterTwo.appearance.race}</li>
                                </ul> 
                            </div> ) : this.state.characterTwoBio ? (
                            <div className="data">
                                <h3>Biography</h3>
                                <ul>
                                    <li>Alias: {characterTwo.biography.aliases[0]}</li>
                                    <li>Alignment: {characterTwo.biography.alignment}</li>
                                    <li>Alter Ego: {characterTwo.biography["alter-egos"]}</li>
                                    <li>First Apperance: {characterTwo.biography["first-appearance"]}</li>
                                    <li>Full Name: {characterTwo.biography["full-name"]}</li>
                                    <li>Race: {characterTwo.biography.race}</li>
                                    <li>Place of Birth: {characterTwo.biography["place-of-birth"]}</li>
                                    <li>Publisher: {characterTwo.biography.publisher}</li>
                                </ul> 
                            </div> ) : this.state.characterTwoPower ? (
                            <div className="data">
                                <h3>Power Stats</h3>
                                <ul>
                                    <li>Combat: {characterTwo.powerstats.combat}</li>
                                    <li>Durability: {characterTwo.powerstats.durability}</li>
                                    <li>Intelligence: {characterTwo.powerstats.intelligence}</li>
                                    <li>Power: {characterTwo.powerstats.power}</li>
                                    <li>Speed: {characterTwo.powerstats.speed}</li>
                                    <li>Strength: {characterTwo.powerstats.strength}</li>
                                </ul> 
                            </div> ) : 
                            <div className="data">
                                <h3>Appearance</h3>
                                <ul>
                                    <li>Eye Color: {characterTwo.appearance["eye-color"]}</li>
                                    <li>Hair Color: {characterTwo.appearance["hair-color"]}</li>
                                    <li>Gender: {characterTwo.appearance.gender}</li>
                                    <li>Height: {characterTwo.appearance.height[0]}</li>
                                    <li>Weight: {characterTwo.appearance.weight[0]}</li>
                                    <li>Race: {characterTwo.appearance.race}</li>
                                </ul> 
                            </div> }
                    </div> 
                </div>
                ) : <h1>No Character Info</h1>}
        </React.Fragment>    
          );
    }
}
 
export default CharacterView;