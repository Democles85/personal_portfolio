import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbShoppocles from '../public/images/works/shoppocles_thumbnail.png'
import thumbDemoclesNews from '../public/images/works/democles_news_thumnail.png'
import thumbMathsGame from '../public/images/works/maths_game_thumbnail.png'
import thumbCalculator from '../public/images/works/calculator_thumbanil.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="shoppocles"
            title="Shoppocles"
            thumbnail={thumbShoppocles}
          >
            An E-Commerce Website with 3 different API&apos;s, each with their
            own functionality, making it responsive, easy to use and functional.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="democles-news"
            title="Democles News"
            thumbnail={thumbDemoclesNews}
          >
            Albanian related news website, created simply in html, css and a bit
            of php.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

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
            A simple math game where you calculations depending on your input of
            age. Created using html, css and javascript.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="simpleCalculator"
            thumbnail={thumbCalculator}
            title="Calculator"
          >
            A simple calculator created using html, css and javascript. It
            includes most functionalities that a conventional calculator has.
          </WorkGridItem>
        </Section>
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
