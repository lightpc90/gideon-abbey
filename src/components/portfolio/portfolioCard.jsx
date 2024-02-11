import React from 'react'
import {Container, Grid, Card, Col, Row, Spacer, Button, Image, Text, Link} from '@nextui-org/react'

const PortfolioCard = () => {
    const projects = [
      {
        image: "/images/sweetietams/homepage header.PNG",
        name: "Photography website",
        categories: "business website, portfolio website, photography, blog",
        tech: "Nextjs, nodejs, mongoose, tailwindcss, cloudinary",
        liveViewUrl: "https://www.sweetietams.com/",
        codeUrl: "https://github.com/lightpc90/SweetieTamsPhotography",
      },
      {
        image: "/images/churchapp/homepage header.PNG",
        name: "Photography website",
        categories: "church website, livestream",
        tech: "Nextjs, nodejs, mongoose, tailwindcss, cloudinary, map, youtube",
        liveViewUrl: "https://www.beautiful-gate.vercel.app/",
        codeUrl: "https://github.com/lightpc90/church-app",
      },
      {
        image: "/images/blogApp/Homepage.jpg",
        name: "Blog App",
        categories: "FullStack App with Auth, web2/Hybrid",
        tech: "Nextjs, Firebase Nosql, Nextui",
        liveViewUrl: "https://blog-bay-chi.vercel.app/",
        codeUrl: "https://github.com/lightpc90/blog",
      },
      {
        image: "/images/CeloMarketplace/marketplace.jpg",
        name: "NFT Marketplace (Celo Alfojores)",
        categories: "Web3, Dapp, NFT, Graph, testnet",
        tech: "Nextjs, Hardhat, Solidity, Rainbowkit/Wagmi, Nextui, Graph",
        liveViewUrl: "https://celo-nft-marketplace-lightpc90.vercel.app/",
        codeUrl: "https://github.com/lightpc90/celo-nft-marketplace",
      },
      {
        image: "/images/Dao/DAO.jpg",
        name: "Decentralized Autonomous Organisation(DAO)",
        categories: "Web3, Dapp, DAO, NFT, testnet",
        tech: "Nextjs, Hardhat, Solidity, Nextui",
        liveViewUrl: "https://dao-ecru-nine.vercel.app/",
        codeUrl: "https://github.com/lightpc90/dao-tutorial",
      },
      {
        image: "/images/Dex-exchange/connected.jpg",
        name: "DEX Exchange",
        categories: "Web3, Dapp, Defi, testnet",
        tech: "Nextjs, Hardhat, Solidity, Nextui",
        liveViewUrl: "https://dex-exchange-orcin.vercel.app/",
        codeUrl: "https://github.com/lightpc90/DEX-Exchange",
      },
      {
        image: "/images/ICO/Ico.jpg",
        name: "ICO Dapp",
        categories: "web3, Defi, token, testnet",
        tech: "Nextjs, Hardhat, Solidity, Nextui",
        liveViewUrl: "https://my-ico-omega.vercel.app/",
        codeUrl: "https://github.com/lightpc90/myICO",
      },
      {
        image: "/images/NFTcollections/NFTcollection.jpg",
        name: "NFT Collection",
        categories: "Web3, Dapp, NFTs, testnet",
        tech: "Nextjs, Hardhat, Solidity, Nextui",
        liveViewUrl: "https://nft-collections-beta.vercel.app/",
        codeUrl: "https://github.com/lightpc90/NFT-Collections",
      },
      {
        image: "/images/whitelist/whitelist.png",
        name: "NFT Whitelist Dapp",
        categories: "Web3, Dapp, NFTs, testnet",
        tech: "Nextjs, Hardhat, Solidity, Nextui",
        liveViewUrl: "https://whitelist-jet.vercel.app/",
        codeUrl: "https://github.com/lightpc90/whitelistDappNew",
      },
    ];
  return (
    <Container css={{background: '$purple900', py: '$10',}}>
        {projects.map((project, index)=>(
            <Grid.Container direction='row' justify='center' gap={2} key={index}>
                <Grid md={4} sm={8}>
                    <Card>
                      <Image src={project.image} alt={project.name} />
                      <Card.Footer>
                        <Col>
                            <Row>
                                <Text b>Name:</Text>
                                <Spacer x={0.3}/>
                                <Text>{project.name}</Text>
                            </Row>
                            <Row>
                                <Text b>Categories:</Text>
                                <Spacer x={0.3}/>
                                <Text>{project.categories}</Text>
                            </Row>
                            <Row>
                                <Text b>Tech:</Text>
                                <Spacer x={0.3}/>
                                <Text>{project.tech} </Text>
                            </Row>
                            <Spacer/>
                            <Row justify="center">
                                <Button as={Link} href={project.liveViewUrl} bordered color='primary' size='sm' auto>Live view</Button>
                                <Spacer x={0.3}/>
                                <Button as={Link} href={project.codeUrl} bordered color='primary' size='sm' auto>View Code</Button>
                            </Row>
                        </Col>
                      </Card.Footer>  
                    </Card>
                </Grid>
            </Grid.Container>
        ))}
    </Container>
  )
}

export default PortfolioCard