import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const Booking = (props) => {
    const {id} = useParams()
    console.log('this is id:'+id)
    const {name, details} = props.fakeData[id]
    console.log('this is name:'+name)
    return (
        <div>
             <div class="card-body card col-md-6">
                <h2 class="card-title">{name}</h2>
                <p class="card-text">{details}</p>
            </div>
        </div>
    );
};

export default Booking;