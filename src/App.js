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
    characterCodes: {
      codeOne: "",
      codeTwo: ""
    }
  }

  changeCharacterOne = (e) => {
    this.setState({ 
      characterOneName: e.currentTarget.value
    })
    console.log('Character 1 Changed')
  }

  setCharacterOne = (value) => {
    this.setState({ 
      characterOneName: value
    })
    console.log('Character 1 Selected')
  } 


  changeCharacterTwo = (e) => {
    this.setState({ 
      characterTwoName: e.currentTarget.value
    })
    console.log('Character 2 Changed')
  }

  setCharacterTwo = (value) => {
    this.setState({ 
      characterTwoName: value
    })
    console.log('Characater 2 Selected')
  }

  setCharacterCode = () => {
    let characterOneCode = Object.keys(characterList).find(key => characterList[key] === this.state.characterOneName);
    console.log(characterOneCode);
    
    this.setState({ 
      characterCodes: {
        codeOne: characterOneCode
      }
    })

    console.log(this.state.characterCodes.codeOne)
  }

  setCharacterCodeTwo = () => {
    let characterTwoCode = Object.keys(characterList).find(key => characterList[key] === this.state.characterTwoName);
    console.log(characterTwoCode)
    this.setState({ 
      characterCodes: {
        codeTwo: characterTwoCode
      }
    })

    console.log(this.state.characterCodes.codeTwo)
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
