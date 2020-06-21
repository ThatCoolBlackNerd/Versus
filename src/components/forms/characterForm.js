import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { Link } from 'react-router-dom';
import { characters } from '../utilities/characterList';
import CharacterContext from '../context/characterContext'


class CharacterForm extends Component {
    static contextType = CharacterContext;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.code();

        this.props.history.push('/versus')
    }

    render() {
        return (
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
                            value={this.context.chosenCharacters.characterOne.name}
                            onChange={this.props.onChange}
                            onSelect={this.props.onSelect}
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
                            value={this.context.chosenCharacters.characterTwo.name}
                            onChange={this.props.onChangeTwo}
                            onSelect={this.props.onSelectTwo}
                    />
                            <button className='btn btn-primary'>Compare Your Characters</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CharacterForm
