import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterForm from './components/forms/characterForm';
import Versus from './components/versus/versus';
import { characters, characterList } from './components/utilities/characterList';
import CharacterContext from './components/context/characterContext';

class App extends Component {
  state = {
    chosenCharacters: {
      characterOne: {
        name: "",
        code: ""
      },
      characterTwo: {
        name: "",
        code: ""
      }
    }
  }

  handleChange = (e) => {
    this.setState({ chosenCharacters: {
      characterOne: {
          name: e.currentTarget.value
      }
  }})
  }

  handleSelect = (value) => {
    this.setState({ chosenCharacters: {
      characterOne: {
          name: value
      }
  }})
  }

  handleChangeTwo = (e) => {
    this.setState({ chosenCharacters: {
      characterTwo: {
          name: e.currentTarget.value
      }
  }})
  }
  handleSelectTwo = (value) => {
    this.setState({ chosenCharacters: {
      characterTwo: {
          name: value
      }
  }})
  }

  handleCharacterCode = () => {
    let characterCode = Object.keys(characterList).find(key => characterList[key] === this.state.chosenCharacters.characterOne.name);
    console.log(characterCode);
    
    this.setState({ chosenCharacters: {
      characterOne: {
          code: characterCode
      }
  }})
  }
 


  render() {
    return (
      <CharacterContext.Provider value={{...this.state}}>
        <div>
        <Switch>
          <Route exact path='/' render={(props) => 
            <CharacterForm 
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              onChangeTwo={this.handleChangeTwo}
              onSelectTwo={this.handleSelectTwo}
              code={this.handleCharacterCode}
              {...props}/>} 
          />
          <Route path='/versus' component={Versus}/>
        </Switch>
        </div>
      </CharacterContext.Provider>
    )
  }
}

export default App
