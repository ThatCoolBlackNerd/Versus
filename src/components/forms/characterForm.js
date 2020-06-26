import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { characters } from '../utilities/characterList';
import CharacterContext from '../context/characterContext';
import './characterForm.css';


class CharacterForm extends Component {
    static contextType = CharacterContext;

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.context);
        this.props.history.push('/versus')
    }

    render() {
        return (
        <CharacterContext.Consumer>
            {(value) => (
                <div className="landingPage">
                <h2 className="title">Comic Book Combat</h2>
                <p className="subTitle">Choose Two Characters See Who WIns in a Fight!!</p>
                <div>
                    <form className="charSelect" onSubmit={this.handleSubmit}>
                        <ReactAutocomplete 
                                items={characters}
                                getItemValue={(item) => item.name}
                                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                                renderItem={(item, isHighlighted) =>
                                    <div 
                                        style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                                        key={item.key}
                                    >
                                        {item.name}
                                    </div>
                                }
                                value={value.characterOneName}
                                inputProps={{ style: { width: 200 } }}
                                onChange={value.changeCharacterOne}
                                onSelect={value.setCharacterOne}
                        />
                <ReactAutocomplete 
                                items={characters}
                                getItemValue={(item) => item.name}
                                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                                renderItem={(item, isHighlighted) =>
                                    <div 
                                        style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                                        key={item.key}
                                    >
                                        {item.name}
                                    </div>
                                }
                                value={value.characterTwoName}
                                inputProps={{ style: { width: 200 } }}
                                onChange={value.changeCharacterTwo}
                                onSelect={value.setCharacterTwo}
                        />}
                            <button className='submit'>Compare Your Characters</button>
                    </form>
                </div>
            </div>
            )}
        </CharacterContext.Consumer>
            
        )
    }
}

export default CharacterForm
