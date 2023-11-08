import React from "react";
import Card from "./Card";


const cardList = ({robotsList}) => {
    // if (true) {
    //     throw new Error("ERROR BY RAGAV");
    // }
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