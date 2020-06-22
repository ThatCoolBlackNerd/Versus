import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { characters } from '../utilities/characterList';
import CharacterContext from '../context/characterContext'


class CharacterForm extends Component {
    static contextType = CharacterContext;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.code();
        this.props.codeTwo();

        console.log(this.context);
        this.props.history.push('/versus')
    }

    render() {
        return (
        <CharacterContext.Consumer>
            {(value) => (
                <div>
                <h2 className="title">Comic Book Combat</h2>
                <p className="subTitle">Choose Two Characters See Who WIns in a Fight!!</p>
                <div className="char_select">
                    <form onSubmit={this.handleSubmit}>
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
                            onChange={value.changeCharacterTwo}
                            onSelect={value.setCharacterTwo}
                    />}
                            <button className='btn btn-primary'>Compare Your Characters</button>
                    </form>
                </div>
            </div>
            )}
        </CharacterContext.Consumer>
            
        )
    }
}

export default CharacterForm
