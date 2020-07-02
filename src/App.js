import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterForm from './components/forms/characterForm';
import Versus from './components/versus/versus';
import { characterList } from './components/utilities/characterList';
import CharacterContext from './components/context/characterContext';

class App extends Component {
  state = {
    characterOneName: "", 
    characterTwoName: "",
    characterCodeOne: "",
    characterCodeTwo: ""
  }

  changeCharacterOne = (e) => {
    this.setState({ 
      characterOneName: e.currentTarget.value
    })
    console.log('Character 1 Changed')
  }

  setCharacterOne = (value) => {
    this.setState({ 
      characterOneName: value,
      characterCodeOne: Object.keys(characterList).find(key => characterList[key] === value)
    })
    console.log('Character 1 Selected')
  } 


  changeCharacterTwo = (e) => {
    this.setState({ 
      characterTwoName: e.currentTarget.value,
    })
    
    console.log('Character 2 Changed')
  }

  setCharacterTwo = (value) => {
    this.setState({ 
      characterTwoName: value,
      characterCodeTwo: Object.keys(characterList).find(key => characterList[key] === value)
    })
    console.log('Characater 2 Selected')
  }

  render() {

    return (
      <CharacterContext.Provider value={
        {...this.state, 
        setCharacterOne: this.setCharacterOne,
        setCharacterTwo: this.setCharacterTwo,
        changeCharacterOne: this.changeCharacterOne,
        changeCharacterTwo: this.changeCharacterTwo,
        }
      }>
        <div>
          <Switch>
            <Route exact path='/' render={(props) => 
              <CharacterForm 
                code={this.setCharacterCode}
                codeTwo={this.setCharacterCodeTwo}
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
