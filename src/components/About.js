import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,

} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"left"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
            <img class="imgmain" src="self0.png" alt="My Awesome" width="200" height="300" align="right" ></img>
              {profile.about}
            </Text>
          </Stack>
        </Container>
      </>
    );
}
