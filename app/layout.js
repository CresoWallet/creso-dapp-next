import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./globals.css";
// import { Provider } from "react-redux";
// import store from "@/store";
import ReduxProvider from "@/providers/ReduxProvider";
import { UserProvider } from "@/providers/UserProvider";
import NotistackProvider from "@/providers/NotistackProvider";
import WalletContextProvider from "@/providers/WalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creso",
  description: "Creso app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <UserProvider>
            <WalletContextProvider>
              <NotistackProvider className="">{children}</NotistackProvider>
            </WalletContextProvider>
          </UserProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
