import React, { useState } from 'react';
import './Home.css';

import { Link, useHistory, useLocation } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';


const { id, name, details, image,pathname } = fakeData;



const Home = () => {
    let history = useHistory();
    const handleBooking =()=>{
        history.push('/booking/'+ location.id +"/"+ location.pathname)
    }
    const [location, setLocation] = useState([]);

    const handleLocation = (event) => {
        setLocation(event);
    }
    // if(useLocation().pathname = '/home'){
    //     console.log('congratulation')
    // }
    return (

        <div className="container">
            <div className="locationInfo row " >

                {/* Location details */}
                <div className="col-md-5 row">

                    <h1 className="text-black"> {location.name}</h1>
                    <p className="text-black">{location.details}</p>
                    
                        <button onClick={handleBooking} className="btn btn-warning">Booking</button>
                    

                </div>


                {/* Location image */}
                <div className="col-md-7  locationImg d-flex" >
                    {
                        fakeData.map(info =>
                            <img className=" locationImgName" onLoad={() => handleLocation(info)} onClick={() => handleLocation(info)} src={info.image} key={info.id}/>)
                    }
                
                </div> 
            </div>


        </div>

    );
};

export default Home;