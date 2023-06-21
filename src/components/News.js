import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
  import { MdCheckCircle } from "react-icons/md";
  import { MdSettings } from "react-icons/md";
  import { Zoom } from "react-reveal";
  import { MdSchool } from "react-icons/md";
  import { MdOutlineWeb } from "react-icons/md";



  export default function News({ color }) {
      return (
        <>
          <Container maxW={"3xl"} id="News">
            <Stack
              as={Box}
              textAlign={"left"}
              spacing={{ base: 8, md: 14 }}
              pb={{ base: 20, md: 36 }}
            >
              <Stack align="center" direction="row" px={4}>
                <HStack mx={4}>
                  <Text color={`${color}.400`} fontWeight={800}>
                    02
                  </Text>
                  <Text fontWeight={800}>News</Text>
                </HStack>
                <Divider orientation="horizontal" />
              </Stack>
              <Zoom bottom>
    <Box as='button' borderRadius='md' bg='BlackAlpha 800' color='GhostWhite'p={8} boxShadow='dark-lg'>
    <List spacing={3}>
    <div class="b">
    <ListItem>
      <ListIcon as={MdOutlineWeb} color='green.500' />
      <b>Jul 2023：</b>Personal Website has been launched. Hello World!
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      <b>Jun 2023：</b><a href="https://cthallpass.great-site.net/">WAFS Has been implemented! </a>Over 1000 users! 
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      <b>May 2023: </b>Honored to have First Slectman <a href="https://www.linkedin.com/in/andreasbisbikos/">Bisbikos </a>and District Superintendent <a href="https://www.linkedin.com/in/daniel-sullivan-98b0221a7">Sullivan </a>come visit WAFS' presentation night!
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      <b>May 2023: </b> Happy to be awarded the <i>Cody Camp Scholarship and *Givinga Foundation Scholarship</i>
    </ListItem>
    <ListItem>
      <ListIcon as={MdSettings} color='green.500' />
      <b>Apr 2023: </b>Developed a Data Visualization Model for <a href="https://github.com/frankqgu/Data-Visualization-JD.com">JD.com </a>
    </ListItem>
    <ListItem>
      <ListIcon as={MdSchool} color='green.500' />
      <b>Feb 2023: </b>Admitted and committed to University of Connecticut! Go Huskies!
    </ListItem>
    <ListItem>
      <ListIcon as={MdSettings} color='green.500' />
      <b>Jan 2023: </b>Kickstarted <a href="https://cthallpass.great-site.net/">WAFS, A Digital Hall Pass Solution</a>. Happy to be advised under school Srinciple <a href="https://www.colchesterct.org/district/staff_directories/b_a_staff">Amy Begue</a>
    </ListItem>
      <ListItem>
      <ListIcon as={MdSettings} color='green.500' />
      <b>Jun 2022: </b> First project! Finished a <a href="https://github.com/frankqgu/pdf-script">PDF-Conversion script</a> that was used by 100+ Students and assisted teaching. 
    </ListItem>
    </div>
    </List>
 </Box>
 </Zoom>
            </Stack>
          </Container>
        </>
      );
  }
  