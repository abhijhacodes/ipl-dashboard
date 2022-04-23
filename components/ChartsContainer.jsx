import { Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

export default function ChartsContainer({ name, children }) {
  return (
    <>
      <Heading
        as="h1"
        color={useColorModeValue("cyan.600", "cyan.400")}
        size="xl"
        textAlign="center"
        my={2}
      >
        Charts for {name} data
      </Heading>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacingX="40px"
        spacingY="20px"
        mt={"20px"}
      >
        {children}
      </SimpleGrid>
    </>
  );
}
