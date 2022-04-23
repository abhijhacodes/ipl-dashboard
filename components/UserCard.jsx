import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function UserCard({ picUrl, bgUrl, name, email, devType }) {
  return (
    <Center py={6}>
      <Box
        w="300px"
        maxW={"270px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"2xl"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={bgUrl} objectFit={"cover"} />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"2xl"}
            src={picUrl}
            alt={name}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {name}
            </Heading>
            <Text color={"gray.500"}>{devType}</Text>
          </Stack>
          <Button
            as="a"
            href={`mailto:${email}`}
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
