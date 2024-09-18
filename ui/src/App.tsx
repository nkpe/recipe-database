import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { ConfigProvider } from "antd";
// import { Header } from "./components/static/Header";
// import { Footer } from "./components/static/Footer";


const App: React.FC = () => {
  return (
    <ConfigProvider theme={{
      token: {
          colorPrimary: '#c0e1a1',
      },
      components: {
        Layout: {
          // Header not currently dark mode compatible
          colorBgHeader: "#ffffff",
        }
      }
  }}>
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
