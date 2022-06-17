//use me to get ALL photos in a set range !
//NASA APOD API has pagination! Pagination logic will be explicated here

import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';

import styled from 'styled-components';

const loadingState = 'Fetching ALL photos since epoch, please wait...';

function GetAll(){

    const [photos, setPhotos] = useState(loadingState);

    //start date:: 1995-06-16 ...we can only return a MAX of 100 images. Waiting...
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start-date=1995-06-16`)
        .then(res=>{
            setPhotos([...photos, ...res.data]); //I need to be spread in an array ! let's see what happens if we don't include ...photos here !
        }).catch(err=>{
            console.error(err);
        })
    },[]) //eslint-disable-line

    //...we wiull have to MAP over all our images and display them below!

    return(
        <div>
            {photos.map(photo => (
            <div className='photos-wrapper' key={photo.date}>
               <Img src ={photo.url} alt={`Nasa APOD for ${photo.date}`}/>
            </div>
            ) 
            )}
        </div>
    )
}

export default GetAll;

const Img = styled.img`
height: 15%;
width: 15%
`