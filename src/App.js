import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import WrapperContainer from "src/containers/WrapperContainer";

import "src/styles/css/fontawesome.css";
import "src/styles/css/style.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WrapperContainer />
    </QueryClientProvider>
  );
};

export default App;
