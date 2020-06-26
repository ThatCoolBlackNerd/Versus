import React, { createContext } from 'react';

const CharacterContext = createContext({
    characterOneName: "",
    characterTwoName: "",
    characterCodeOne: "",
    characterCodeTwo: "",
    setCharacterOne: () => {},
    changeCharacterOne: () => {},
    setCharacterTwo: () => {},
    changeCharacterTwo: () => {},
});

CharacterContext.displayName = "CharacterContext";


export default CharacterContext
