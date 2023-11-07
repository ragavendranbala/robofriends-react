import React from "react";
import Card from "./Card";


const cardList = ({robotsList}) => {

    const cardsArray = robotsList.map((robot, index) => {
        return (
            <Card
                key={index}
                id={robotsList[index].id}
                name={robotsList[index].name}
                email={robotsList[index].email}
            />
        );
    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default cardList;