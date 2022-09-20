import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "../../services/queryClient";
import { Routes } from "../../routes";

import "../../assets/styles/main.css";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
