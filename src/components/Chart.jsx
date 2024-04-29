import { Box, Heading, Text } from "@chakra-ui/react";

const Chart = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} shadow="md">
      <Heading as="h4" size="md">
        Live Price Chart
      </Heading>
      <Text mt={2}>This is a placeholder for the live price chart.</Text>
    </Box>
  );
};

export default Chart;
