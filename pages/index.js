import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub
  // IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/pentakill.jpg'
import thumbInkdrop from '../public/images/works/shoppocles_thumbnail.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Albania!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sixhei Tartari
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/floppa.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Sixhei ( CJ ) is a freelancer and a full-stack developer based in
          Albania with a passion for building digital services/stuff he wants.
          He has a knack for all things launching products, from planning and
          designing all the way to solving real-life problems with code. When
          not online, he loves hanging out with his camera. Currently, he is
          living off of his own product called{' '}
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink> */}
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Vlorë (Valona), Albania.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Started learning programming on different languages like C, C++ and
          Java and started working as a junior freelanced where I helped others
          complete their school projects
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Joined University as a student for Computer Science and still
          occasionally working as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Gaming, Music, Computer Programming, Machine Learning, Web Design
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Democles85" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Democles85
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/LeJhin1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @LeJhin1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/sixheitartari/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @sixhei_tartari
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://discord.gg/q7nefBcmt9" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord Server
              </Button>
            </Link>
          </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/watch?v=O0RKS9592-s"
            title="Fav Song of the Month"
            thumbnail={thumbYouTube}
          >
            My Favourite Song Of The Month
          </GridItem>
          <GridItem
            href="https://shoppocles.netlify.app/"
            title="Shoppocles"
            thumbnail={thumbInkdrop}
          >
            An E-Commerce website for buying different products
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
