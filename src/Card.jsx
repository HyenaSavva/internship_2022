import React from 'react';
import './style/card.css'

const Card = ({drink, ...props}) => {
    return (
        <tr>
            <td>
                {drink['strDrink']}
            </td>
            <td>
                {drink['strCategory']}
            </td>
            <td>
                {drink['strTags']}
            </td>
            <td>
                {drink['strInstructions']}
            </td>
            <td className='tableButtons'>
                <button onClick={() => props.setActive(true)}>Add</button>
                <button onClick={() => props.setActive(true)}>Edit</button>
                <button onClick={() => props.remove(drink)}>Delete</button>
            </td>
        </tr>
    );
};

export default Card;