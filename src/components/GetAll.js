//use me to get ALL photos in a set range !
//NASA APOD API has pagination! Pagination logic will be explicated here

import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';
import dateFinal from '../constants';

import styled from 'styled-components';

const loadingState = ['LOADING, please wait']; //I NEED TO INITALIZE AS AN ARRAY, ELSE THE BELOW MAP FUNCTION WON'T WORK. I FINALLY FIGURED IT OUT! 
//YOUR INITIAL DATA HAS TO MATCH THE DATA TYPE OF WHATEVER MANIPULATIONS YOU DO TO IT
//IE MAP WAS FAILING BECAUSE JS KEPT TRYING TO MAP OVER A NON-ARRAY!

function GetAll(){

    const [photos, setPhotos] = useState(loadingState);

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${dateFinal()}`)
        .then(res=>{
            setPhotos([...photos, ...res.data]); //I need to be spread in an array
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
               <Img src ={photo.url} alt={`Nasa APOD for the past 100 days`}/>
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