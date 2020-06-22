import React, { createContext } from 'react';

const CharacterContext = createContext({
    characterOneName: "",
    characterOneCode: "",
    characterTwoName: "",
    characterTwoCode: "",
    setCharacterOne: () => {},
    changeCharacterOne: () => {},
    setCharacterTwo: () => {},
    changeCharacterTwo: () => {},
});

CharacterContext.displayName = "CharacterContext";


export default CharacterContext
