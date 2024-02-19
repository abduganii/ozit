'use client';
import Vimeo from '@u-wave/react-vimeo';

const VimeoPlayer = ({ videoId,className,autoplay=false }) => {
    return (
        <Vimeo
            video={videoId? videoId: 28058097}
            responsive={true}
            className={className && className}
            autoplay={autoplay}
            color="525CEB"
            controls={true}
            showTitle={false}
            showByline={false}
            pip={true}
            showPortrait={false}
            transparent={true}
        />
    );
}

export default VimeoPlayer;