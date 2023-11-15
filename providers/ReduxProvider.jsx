"use client";

import { store } from "../store";
import { Provider } from "react-redux";

// interface ReduxProviderProps {
//   children: React.ReactNode;
// }

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
