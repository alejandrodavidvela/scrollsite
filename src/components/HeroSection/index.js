import React, {useState} from 'react'
import Video from '../../videos/video.mp4'


import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,


} from '../HeroSection/HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Stop Missing Business Calls!</HeroH1>
                <HeroP>
                    Never lose business because of a missed call again
                </HeroP>
                <HeroBtnWrapper>
                    <a class="enquire-button" href="https://mctb.hartfordveladesign.com">
                    Get Started
                    </a>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
