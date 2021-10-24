import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "config/firebase";

export function Routes() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <BrowserRouter>
      {user
      ? <AppRoutes />
      : <AuthRoutes />}
    </BrowserRouter>
  )
}