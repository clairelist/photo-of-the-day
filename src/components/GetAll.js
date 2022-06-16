//use me to get ALL photos in a set range !
//NASA APOD API has pagination! Pagination logic will be explicated here

import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_KEY} from '../api/keys';

import styled from 'styled-components';

const loadingState = 'Fetching ALL photos since epoch, please wait...';

function GetAll(){

    const [photos, setPhotos] = useState(loadingState);

    useEffect(()=>{
        axios.get('url')
        .then(res=>{
            setPhotos(res.data);
        }).catch(err=>{
            console.error(err);
        })
    },[])

    //...we wiull have to MAP over all our images and display them below!

    return(
        <div>
            <Img src={''} alt={'NASA APOD'}></Img>
        </div>
    )
}

export default GetAll;

const Img = styled.img`
height: 100%;
`