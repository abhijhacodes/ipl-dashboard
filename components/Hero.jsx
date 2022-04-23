import Head from "next/head";
import NextLink from "next/link";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

const ButtonItems = [
  { name: "Teams", url: "/teams" },
  { name: "Batting", url: "/batting" },
  { name: "Bowling", url: "/bowling" },
  { name: "Others", url: "/others" },
];

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={["2xl", "3xl", "3xl"]}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Amazing charts of <br />
            <Text as={"span"} color={"cyan.400"}>
              IPL Statistics and Data
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Some detailed charts and graphs created based on Teams, Batting,
            Bowling and Other data from Indian Premier League season{" "}
            <Text as={"span"} color={"green.500"}>
              2008 to 2021
            </Text>
            . Get started by clicking on the buttons below.
          </Text>
          <Stack
            direction={["column", "row"]}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            {ButtonItems.map((item) => (
              <NextLink key={item.name} href={item.url} passHref>
                <Button
                  as={"a"}
                  colorScheme={"cyan"}
                  bg={"cyan.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  {item.name}
                </Button>
              </NextLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
