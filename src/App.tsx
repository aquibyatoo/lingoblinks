import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Box maxW={"1400px"} ml={"auto"} mr={"auto"}>
        <RouterProvider router={appRouter} />
      </Box>
    </Box>
  );
}

export default App;
