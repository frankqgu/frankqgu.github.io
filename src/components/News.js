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
    OrderedList,
    UnorderedList,
  } from "@chakra-ui/react";
  import ProfileArray from "./ProfileArray";
  import { MdCheckCircle } from "react-icons/md";
  import { MdSettings } from "react-icons/md";
  import { Zoom } from "react-reveal";
import { useState, useEffect } from "react";

  export default function News({ color }) {
    const profile = ProfileArray();
    const [selected, setSelected] = useState("");
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
    <Box as='button' borderRadius='md' bg='Teal' color='GhostWhite'p={8} boxShadow='dark-lg' >
    <List spacing={3}>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
    </ListItem>
    <ListItem>
      <ListIcon as={MdCheckCircle} color='green.500' />
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
    {/* You can also use custom icons from react-icons */}
    <ListItem>
      <ListIcon as={MdSettings} color='green.500' />
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
    </List>
 </Box>
 </Zoom>
            </Stack>
          </Container>
        </>
      );
  }
  