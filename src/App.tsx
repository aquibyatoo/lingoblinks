import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Box>
        <RouterProvider router={appRouter} />
      </Box>
    </Box>
  );
}

export default App;
