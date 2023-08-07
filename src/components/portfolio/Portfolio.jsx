import React from "react";
import style from './portfolio.module.css';
import { Container, Spacer, Grid, Text, Image, Button, Divider, Card, Col, Row } from "@nextui-org/react";
import PortfolioCard from './portfolioCard'
import HomeAutomationCard from './homeAutomationCard'
import Services from '../services/Services'

const Portfolio = () => {
    return (
        <div id="portfolio">
            <Spacer y={3}/>
            <Container css={{px: '$18'}}><Divider/></Container>
            <Spacer y={3}/>
            <Text align='center'>My Recent Projects</Text>
            <Text weight='bold' size={25} align='center'>Software/Blockchain Development</Text>
            <Spacer/>
            <PortfolioCard/>
            <Services/>
            <Spacer y={5}/>
            <Text weight='bold' size={25} align='center'>Home Automation Services</Text>
            <Spacer/>
            <HomeAutomationCard/>
        </div>
    )
}

export default Portfolio;