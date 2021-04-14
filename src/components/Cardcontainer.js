import React from 'react';
import Card from './Card'
import card1 from '../images/csk.png';
import card2 from '../images/dc.png';
import card3 from '../images/dch.jpg';
import card4 from '../images/dd.png';
import card5 from '../images/kkr.png';
import card6 from '../images/kt.png';
import card7 from '../images/mi.jpg';
import card8 from '../images/pw.jpg';
import card9 from '../images/rcb.jpg';
import card10 from '../images/rr.png';
import card11 from '../images/sh.png';
import card12 from '../images/pk.jpg'

const CardContainer = () => {

    let cards = [
        {
            src: card1,
            title: 'Chennai Super Kings',
        },
        {
            src: card2,
            title: 'Delhi Capitals',
        },
        {
            src: card3,
            title: 'Deccan Chargers',
        },
        {
            src: card4,
            title: 'Delhi Daredevils',
        },
        {
            src: card5,
            title: 'Kolkata Knight Riders',
        },
        {
            src: card6,
            title: 'Kochi Tuskers',
        },
        {
            src: card7,
            title: 'Mumbai Indians',
        },
        {
            src: card8,
            title: 'Pune Warriors',
        },
        {
            src: card9,
            title: 'Royal Challengers Bengaluru',
        },
        {
            src: card10,
            title: 'Rajasthan Royals',
        },
        {
            src: card11,
            title: 'Sunrisers Hyderabad',
        },
        {
            src: card12,
            title: 'Punjab Kings',
        },
    ]

    return (
        <Card card={cards} />
    );
}

export default CardContainer;