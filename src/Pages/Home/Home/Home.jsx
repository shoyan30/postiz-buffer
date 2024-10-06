import React from 'react';
import BannerTitle from '../BannerTitle/BannerTitle';
import Promo from '../Promo/Promo';
import PlatFormComparison from '../PlatFormComparison/PlatFormComparison';
import PricingPlans from '../PricingPlans/PricingPlans';
import SocialMedia from '../SocialMedia/SocialMedia';
import SocialMediaReport from '../SocialMediaReport/SocialMediaReport';
import TeamsAproval from '../TeamAproval/TeamsAproval';
import Summary from '../Summary/Summary';
import Compare from '../Compare/Compare';
import ChoosePostiz from '../ChoosePostiz/ChoosePostiz';
import QuestionPart from '../QuestionPart/QuestionPart';


const Home = () => {
    return (
        <div>
            <BannerTitle></BannerTitle>
            <Promo></Promo>
            <PlatFormComparison></PlatFormComparison>
            <PricingPlans></PricingPlans>
            <SocialMedia></SocialMedia>
            <SocialMediaReport></SocialMediaReport>
            <TeamsAproval></TeamsAproval>
            <Summary></Summary>
            <Compare></Compare>
            <ChoosePostiz></ChoosePostiz>
            <QuestionPart></QuestionPart>
            {/* <BannerTitle></BannerTitle>
            <Promo></Promo>
            <PlatFormComparison></PlatFormComparison>
            <PricingPlans></PricingPlans>
            <SocialMedia></SocialMedia>
            <SocialMediaReport></SocialMediaReport>
            <TeamsAproval></TeamsAproval>
            <Summary></Summary>
            <Compare></Compare>
            <ChoosePostiz></ChoosePostiz>
            <QuestionPart></QuestionPart> */}
        </div>
    );
};

export default Home;