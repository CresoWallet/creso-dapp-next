"use client";

import { SnackbarProvider } from "notistack";

export default function NotistackProvider({ children }) {
  return (
    <SnackbarProvider
      classes={{
        containerAnchorOriginTopCenter: "z-alert",
      }}
      maxSnack={1}
      preventDuplicate
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
