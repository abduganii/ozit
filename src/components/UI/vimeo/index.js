'use client';


import Vimeo from '@u-wave/react-vimeo';
import { useEffect, useRef } from 'react';

const VimeoPlayer = ({ videoId }) => {
    const refifrim = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            // const item = document.querySelector('iframe').contentWindow.document.querySelector('html');
            console.log(refifrim.current.container.children[0].children[0]                , 'videoId');
        }, 2000)
        // document.querySelector('iframe')
    }, [videoId])
    return (
        <Vimeo
            ref={refifrim}
            className='vimeo'
            video={videoId? videoId: 28058097}
            responsive={true}
            autoplay={false}
            color="525CEB"
            controls={true}
            pip={true}
            showTitle={false}
            showByline={false}
            showPortrait={false}
            transparent={true}
        />
    );
}

export default VimeoPlayer;