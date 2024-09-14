"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Header from "./common/Header";
import Footer from "./common/Footer";
export default function MainPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
