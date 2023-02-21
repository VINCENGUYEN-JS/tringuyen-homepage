import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  // Image,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid,
  Image
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container mt={3}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello , I live in San Jose, California , United States
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Tri Nguyen
            </Heading>
            <p>Associate Research Financial Analyst</p>
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
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              src="/images/tringuyen.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Tri Nguyen is an associate research financial analyst with more than
            1 year of experience working for a leading university. He holds a
            Bachelor&apos; degree in Finance from a top-ranked business college.
            Before joining the University of San Francisco, Tri worked as a
            teller for more than 4 years at Citibank, where he gained experience
            in personal financial management and banking regulations. During his
            tenure at the University of San Francisco, Tri has gained extensive
            experience in financial analysis, management, and planning. He has
            worked on numerous research projects, providing financial oversight,
            guidance, and training faculty and researchers to ensure that
            project goals are achieved within budget constraints. Overall, Tri
            is a highly skilled and experienced financial analyst who has made
            significant contributions to the financial management of research
            projects at the university.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioSection>
            <BioYear>Nov 2021</BioYear>
            Associate Research Financial Analyst (University of San Francisco)
          </BioSection>
          <BioSection>
            <BioYear>Jun 2017 - Nov 2021</BioYear>
            Bank Teller (Citi Bank , Part-time)
          </BioSection>
          <BioSection>
            <BioYear>Apr 2016 - May 2017 </BioYear>
            Salesperson (Fry&apos; Electronics , Part-time)
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2019 - 2021</BioYear>
            Finance (San Jose State University)
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Soccer, Music, Photographing, Guitar </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On Web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.instagram.com/trivnguyen/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @tringuyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/tri-nguyen-257b97194"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @tringuyen
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
