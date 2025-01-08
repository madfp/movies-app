import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type props = {
  children: React.ReactNode;
};

export default function Provider({ children }: props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
