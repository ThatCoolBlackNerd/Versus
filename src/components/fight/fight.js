import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  } from 'recharts';

class Fight extends Component {

    render() { 
        const { characterOne, characterTwo } = this.props;

        const data = [
            {name: 'Combat', characterOneValue: characterOne.powerstats.combat, characterTwoValue: characterTwo.powerstats.combat},
            {name: 'Durability', characterOneValue: characterOne.powerstats.durability, characterTwoValue: characterTwo.powerstats.durability},
            {name: 'Intelligence', characterOneValue: characterOne.powerstats.intelligence, characterTwoValue: characterTwo.powerstats.intelligence},
            {name: 'Power', characterOneValue: characterOne.powerstats.power, characterTwoValue: characterTwo.powerstats.power},
            {name: 'Speed', characterOneValue: characterOne.powerstats.speed, characterTwoValue: characterTwo.powerstats.speed},
            {name: 'Strength', characterOneValue: characterOne.powerstats.strength, characterTwoValue: characterTwo.powerstats.strength}
        ];

        return (
            <BarChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar name={characterOne.name} dataKey="characterOneValue" fill="#8884d8" />
            <Bar name={characterTwo.name} dataKey="characterTwoValue" fill="#82ca9d" />
            </BarChart>
        );
    }
}
 
export default Fight;