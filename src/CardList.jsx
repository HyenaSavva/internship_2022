import {useEffect, useState} from "react";
import axios from "axios";
import './style/card.css'
import Card from "./Card";


const CardList = ({...props}) => {
    const [drinks, setDrinks] = useState([])

    const removeCard = (post) => {
        setDrinks(drinks.filter(p => p.idDrink !== post.idDrink))
    }

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            setDrinks(response.data.drinks)
            console.log(response.data.drinks)
        }

        fetchPosts()
    }, [])

    return (
        <div className="wrapper">
            <table className='mainTable'>
                <tbody className='mainTbody'>
                <tr>
                    <th>Drink Name</th>
                    <th>Category</th>
                    <th>Tags</th>
                    <th>Instructions</th>
                    <th>Actions</th>
                </tr>
                {
                    drinks.map((drink) =>
                        <Card
                            remove={removeCard}
                            setActive={props.setActive}
                            active={props.active}
                            drink={drink}
                            key={drink.idDrink}
                        />
                    )
                }

                </tbody>
            </table>
        </div>
    );
};

export default CardList;