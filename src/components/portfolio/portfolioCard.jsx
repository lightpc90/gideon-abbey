import React from 'react'
import {Container, Grid, Card, Col, Row, Spacer, Button, Image, Text, Link} from '@nextui-org/react'

const PortfolioCard = () => {
    const projects = [
        {image: '/images/blogApp/Homepage.jpg', name: 'Blog App', categories: 'FullStack App with Auth, web2/Hybrid', tech: 'Nextjs, Firebase Nosql, Nextui', liveViewUrl: 'https://blog-bay-chi.vercel.app/', codeUrl: 'https://github.com/lightpc90/blog'},
        {image: '/images/CeloMarketplace/marketplace.jpg', name: 'NFT Marketplace (Celo Alfojores)', categories: 'Web3, Dapp, NFT, Graph, testnet', tech: 'Nextjs, Hardhat, Solidity, Rainbowkit/Wagmi, Nextui, Graph', liveViewUrl: 'https://celo-nft-marketplace-lightpc90.vercel.app/', codeUrl: 'https://github.com/lightpc90/celo-nft-marketplace'},
        {image: '/images/Dao/DAO.jpg', name: 'Decentralized Autonomous Organisation(DAO)', categories: 'Web3, Dapp, DAO, NFT, testnet', tech: 'Nextjs, Hardhat, Solidity, Nextui', liveViewUrl: 'https://dao-ecru-nine.vercel.app/', codeUrl: 'https://github.com/lightpc90/dao-tutorial'},
        {image: '/images/Dex-exchange/connected.jpg', name: 'DEX Exchange', categories: 'Web3, Dapp, Defi, testnet', tech: 'Nextjs, Hardhat, Solidity, Nextui', liveViewUrl: 'https://dex-exchange-orcin.vercel.app/', codeUrl: 'https://github.com/lightpc90/DEX-Exchange'},
        {image: '/images/ICO/Ico.jpg', name: 'ICO Dapp', categories: 'web3, Defi, token, testnet', tech: 'Nextjs, Hardhat, Solidity, Nextui', liveViewUrl: 'https://my-ico-omega.vercel.app/', codeUrl: 'https://github.com/lightpc90/myICO'},
        {image: '/images/NFTcollections/NFTcollection.jpg', name: 'NFT Collection', categories: 'Web3, Dapp, NFTs, testnet', tech: 'Nextjs, Hardhat, Solidity, Nextui', liveViewUrl: 'https://nft-collections-beta.vercel.app/', codeUrl: 'https://github.com/lightpc90/NFT-Collections'},
        {image: '/images/whitelist/whitelist.png', name: 'NFT Whitelist Dapp', categories: 'Web3, Dapp, NFTs, testnet', tech: 'Nextjs, Hardhat, Solidity, Nextui', liveViewUrl: 'https://whitelist-jet.vercel.app/', codeUrl: 'https://github.com/lightpc90/whitelistDappNew'},
        {image: '/images/ENS/ens.jpg', name: 'ENS Lookup Dapp', categories: 'Web3, Dapp, Wallet ID, testnet', tech: 'Nextjs, Web3Provider, Nextui', liveViewUrl: 'https://ens-app-azure.vercel.app/', codeUrl: 'https://github.com/lightpc90/my-app'},
        {image: '/images/ceramic/ceramic.jpg', name: 'Ceramic Self Sovereign Identity  Dapp', categories: 'Idd dapp, web3, Dapp, testnet', tech: 'Nextjs, ethersjs Nextui', liveViewUrl: 'https://ceramic.vercel.app/', codeUrl: 'https://github.com/lightpc90/ceramic'},
        {image: '/images/nft-ipfs/ipfs.png', name: 'IPFS NFT Collection', categories: 'NFTs, Dapp Web3, testnet', tech: 'Nextjs, IPFS, Solidity, Hardhart,  Nextui', liveViewUrl: 'https://nft-ipfs-kappa.vercel.app/', codeUrl: 'https://github.com/lightpc90/nft-ipfs'},
    ]
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