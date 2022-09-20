import "../../assets/styles/main.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../services/queryClient";
import { Routes } from "../../routes";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};
