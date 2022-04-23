import { Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import UserCard from "./UserCard";

export default function About() {
  return (
    <>
      <Heading
        as="h1"
        color={useColorModeValue("cyan.600", "cyan.400")}
        size="xl"
        textAlign="center"
        my={2}
      >
        Our Enthusiastic Team
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <UserCard
          picUrl={"/images/abhi.jpg"}
          bgUrl={"/images/fullstack.jpeg"}
          name={"Abhishek Jha"}
          email={"abhi.jha.cs@gmail.com"}
          devType={"Full Stack Developer"}
        />
        <UserCard
          picUrl={"/images/shubham.jpg"}
          bgUrl={"/images/frontend.jpg"}
          name={"Shubham Rajput"}
          email={"shubhamscet1923@gmail.com"}
          devType={"Front end Developer"}
        />
        <UserCard
          picUrl={"/images/yash.jpg"}
          bgUrl={"/images/datascience.jpeg"}
          name={"Yash Patel"}
          email={"patelyash7682@gmail.com"}
          devType={"Data Scientist & Analyst"}
        />
      </Stack>
    </>
  );
}
