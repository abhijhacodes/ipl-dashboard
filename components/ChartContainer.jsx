import { Box, useColorModeValue } from "@chakra-ui/react";

export default function ChartContainer({ children }) {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.800")}
      boxShadow="2xl"
      rounded={"2xl"}
    >
      <div className="chartContainer">{children}</div>
    </Box>
  );
}
