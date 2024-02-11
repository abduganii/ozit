'use client';


import Vimeo from '@u-wave/react-vimeo';

const VimeoPlayer = ({videoId}) => {
    return (
        <Vimeo
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