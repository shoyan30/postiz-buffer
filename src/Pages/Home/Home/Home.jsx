import React from 'react';
import BannerTitle from '../BannerTitle';
import Promo from '../Promo';
import PlatFormComparison from '../PlatFormComparison';
import PricingPlans from '../PricingPlans';
import SocialMedia from '../SocialMedia';
import Summary from '../Summary';
import ChoosePostiz from '../ChoosePostiz';
import QuestionPart from '../QuestionPart';

const Home = () => {
    return (
        <div>
            <BannerTitle></BannerTitle>
            <Promo></Promo>
            <PlatFormComparison></PlatFormComparison>
            <PricingPlans></PricingPlans>
            <SocialMedia></SocialMedia>
            <Summary></Summary>
            <ChoosePostiz></ChoosePostiz>
            <QuestionPart></QuestionPart>
        </div>
    );
};

export default Home;