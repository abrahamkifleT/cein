import React from 'react'
import AboutHero from '../../components/About/AboutHero/AboutHero'
import AboutMission from '../../components/About/AboutMission/AboutMission'
import FeatureSection from '../../components/About/FeatureSection/FeatureSection'
import ComparisonSection from '../../components/About/ComparisonSection/ComparisonSection'
import ExploreMore from '../../components/About/ExploreMore/ExploreMore'

const About = () => {
    return (
        <main>
            <AboutHero />
            <AboutMission />
            <FeatureSection />
            <ComparisonSection />
            <ExploreMore />
        </main>
    )
}

export default About