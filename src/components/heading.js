import React from 'react';

const Heading = (props) => {

    const { score, highScore } = props;

    return (
        <div className="game-title">
            <div>
                <h1>Memory Card Game</h1>
                <p>Click on a card to get a point.</p>
                <p> Don't click on a card twice. </p>
            </div>
            <div>
                <p>Score: {score} </p>
                <p>High Score: {highScore} </p>
            </div>
        </div>
    );
}

export default Heading;