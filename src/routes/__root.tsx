import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <QueryClientProvider client={new QueryClient()}>
      <Outlet />
    </QueryClientProvider>
  ),
});
