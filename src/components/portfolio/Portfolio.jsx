import React from "react";
import style from './portfolio.module.css';
import { Container, Spacer, Grid, Text, Image, Button, Card, Col, Row } from "@nextui-org/react";
import PortfolioCard from './portfolioCard'
import HomeAutomationCard from './homeAutomationCard'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Projects</h5>
            <h2>Software/Blockchain Development</h2>
            <PortfolioCard/>
            <Spacer y={5}/>
            <h2>Home Automation</h2>
            <HomeAutomationCard/>
            <div className={style.portfolio__container}>
              
            </div>
        </section>
    )
}

export default Portfolio;