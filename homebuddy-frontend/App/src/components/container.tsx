import React, { ReactNode } from "react";
import { View } from "react-native";
import { Box, Text } from "./theme";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <Box flex={1} backgroundColor="white" padding="xl">
      {children}
    </Box>
  );
}

export default Container;
