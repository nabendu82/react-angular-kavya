import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import db from '../firebase'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        db.collection('people').onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())))
    }, [])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => onCardLeftScreen(person.name)} preventSwipe={['up', 'down']}>
                            <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                ))}
            </div>
        </div>
    )
}
export default TinderCards