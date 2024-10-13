import { Provider } from "react-redux";
import { store } from "./store/store";
import type { AppProps } from "next/app";
import RootLayout from "../app/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
};

export default MyApp;
