import "../../styles/main.css";

import { CreateNewAdBanner } from "../CreateNewAdBanner";
import { GameBanner } from "../GameBanner";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../services/client";
import { Routes } from "../../routes";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};
