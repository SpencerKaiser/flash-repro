import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Heading,
  ThemeConfig,
  VStack,
  useColorModeValue,
  Code,
  Text,
} from "@chakra-ui/react";
import { Test } from "../components/Test";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <VStack align="center" spacing={10}>
          <Heading>Repro</Heading>
          <Box>
            <Heading size="md">
              Both the following components use{" "}
              <Code>{`useColorModeValue("red", "blue")`}</Code>
            </Heading>
          </Box>
          <Box>
            <Text>
              This is a <Code>Box</Code> within <Code>_app.tsx</Code>
            </Text>
            <Box color={useColorModeValue("red", "blue")}>
              Hello cruel, cookie-less world!
            </Box>
          </Box>
          <Box textAlign="center">
            <Text>Whereas this is a component loaded from another file</Text>
            <Test />
          </Box>
          <Heading size="md">
            Both examples have the same code but the one within{" "}
            <Code>_app.tsx</Code> uses the wrong color value
          </Heading>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
