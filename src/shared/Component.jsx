import { Children } from "react";
import { Box } from "rebass/styled-components";

export const Container = () => {
  return <Box sx={{
      width = "100%",
      maxWidth:1024,
      mx:"auto"
  }}>{Children}</Box>;
};
