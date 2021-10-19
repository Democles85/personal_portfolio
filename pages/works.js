import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShoppocles from '../public/images/works/shoppocles_thumbnail.png'
import thumbDemoclesNews from '../public/images/works/democles_news_thumnail.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbMathsGame from '../public/images/works/maths_game_thumbnail.png'
import thumbCalculator from '../public/images/works/calculator_thumbanil.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="shoppocles"
            title="Shoppocles"
            thumbnail={thumbShoppocles}
          >
            An E-Commerce Website with 3 different API&apos;s, each with their
            own functionality, making it responsive, easy to use and functional
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="democles-news"
            title="Democles News"
            thumbnail={thumbDemoclesNews}
          >
            Albanian related news website, created simply in html, css and a bit
            of php
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="mathsGame"
            thumbnail={thumbMathsGame}
            title="Maths Game"
          >
            A simple math game where you add and subtract numbers depending on
            your age. Created using html, css and javascript
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="simpleCalculator"
            thumbnail={thumbCalculator}
            title="Calculator"
          >
            A simple calculator created using html, css and javascript. It
            includes most functionalities that a calculator has
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          More Coming Soon...
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
