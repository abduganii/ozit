'use client';


import Vimeo from '@u-wave/react-vimeo';
import {useEffect} from "react";
import axios_init from "@/utils/axios_init";

const VimeoPlayer = (props) => {
    useEffect(() => {
        axios_init.get('/todos/1').then(res => {
            console.log('REST DATA: ', res);
        })
    }, [])
    return (
        <Vimeo
            video={345888796}
            responsive={true}
            autoplay={false}
            color="525CEB"
            controls={true}
            pip={true}
        />
    );
}

export default VimeoPlayer;