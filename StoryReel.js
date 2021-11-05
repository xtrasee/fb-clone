import React from 'react';
import Story from "./Story";
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://mk0laterbloguwugrik.kinstacdn.com/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileScr="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                title="Sonny Sangha"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4nFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileScr="https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg"
                title="Rafeh Qazi"
            />
            <Story
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb1.2.1&ixid=eyJhcHBfqWQiOjEyMDd9&w=1000&q=80"
                profileScr="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
                title="Frankie"
            />
            <Story
                image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileScr="https://prod-takelessons.netdns-ssl.com/document/profilee_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Aaron Bernath"
            />
            <Story
                image="https://mk0laterbloguwugrik.kinstacdn.com/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileScr="https://miro.medium.com/fit/c/336/336/2*4lH0jftag_sPRqQisUsVqw.jpeg"
                title="Naz"
            />

            
        </div>
    )
}

export default StoryReel;
