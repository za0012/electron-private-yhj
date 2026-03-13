import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import Header from "@renderer/components/Header";
import { TitleBar } from "@renderer/components/TitleBar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <TitleBar />
      <Outlet />
    </React.Fragment>
  );
}
