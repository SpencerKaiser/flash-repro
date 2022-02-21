import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export const Test: React.FC<{}> = () => {
  return (
    <Box color={useColorModeValue("red", "blue")}>
      Hello cruel, cookie-less world!
    </Box>
  );
};
