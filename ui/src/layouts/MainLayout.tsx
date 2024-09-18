import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";

import { HeaderContent } from "../components/static/Header";
import { FooterContent } from "../components/static/Footer";
import { Routes } from "../routes/Routes";

export const MainLayout = () => {
    // const layoutStyle = {
    //     borderRadius: 8,
    //     overflow: "hidden",
    //     width: 'calc(100% - 8px)',
    //     maxWidth: 'calc(100% - 8px)',
    //     height: "100%"
    //   };

    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>

            <Content>
                <Routes />
            </Content>

            <Footer>
                <FooterContent />
            </Footer>
        </Layout>
    )
}