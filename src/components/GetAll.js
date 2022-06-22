//use me to get ALL photos in a set range !
//NASA APOD API has pagination! Pagination logic will be explicated here

import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';
import dateFinal from '../constants';

import styled from 'styled-components';

const loadingState = []; //I NEED TO INITALIZE AS AN ARRAY, ELSE THE BELOW MAP FUNCTION WON'T WORK. I FINALLY FIGURED IT OUT! 
//YOUR INITIAL DATA HAS TO MATCH THE DATA TYPE OF WHATEVER MANIPULATIONS YOU DO TO IT
//IE MAP WAS FAILING BECAUSE JS KEPT TRYING TO MAP OVER A NON-ARRAY!

//FURTHERMORE, since we can only return a MAX of 100 images, this will be refactored to display ALL images from the past 100 days ONLY!
//thus, our start_date needs to be equal to today - 100

function GetAll(){

    const [photos, setPhotos] = useState(loadingState);

    //start date:: 1995-06-16 ...currently, I return 10 RANDOM images. Waiting...
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=10`)
        .then(res=>{
            setPhotos([...photos, ...res.data]); //I need to be spread in an array ! let's see what happens if we don't include ...photos here !
            dateFinal();
        }).catch(err=>{
            console.error(err);
        })
    },[]) //eslint-disable-line

    //...we wiull have to MAP over all our images and display them below!

    return(
        <div>
            {photos.map(photo => (
            <div className='photos-wrapper' key={photo.date}>
               <Img src ={photo.url} alt={`Nasa APOD for the past 10 days`}/>
            </div>
            ) 
            )}
        </div>
    )
}

export default GetAll;

const Img = styled.img`
height: 15%;
width: 15%;
display:grid;
`