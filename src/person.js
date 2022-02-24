import React, {useState} from 'react';

const Person = (props) => {
    const [ birthdayButtonFor, setbirthdayButtonFor ] = useState(props.initialAge)
    return (
        <div>
            <h2>{ props.name }, { props.lastname}</h2>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.color }</p>
            <p>Bithday Button For { birthdayButtonFor }</p>
            <button onClick={ (value) => setbirthdayButtonFor(birthdayButtonFor + 1)}>Birthday Button for { props.lastname } { props.name}
            </button>
        </div>
    )
}

export default Person ;