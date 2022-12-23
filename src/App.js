import GlobalStyle from "./styles/global";
import RouterProvider from "../src/routes";
import { AuthProvider } from "./providers";

export default function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <RouterProvider />
      </AuthProvider>
    </>
  );
}
