import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Stock - คู่มือการใช้งานระบบจัดการคลังสินค้า",
  description: "คู่มือการใช้งานสำหรับ Stock ระบบจัดการคลังสินค้า",
  icons: {
    icon: "/favicon.ico",
  },
};

const navbar = <Navbar logo={<b>Stock</b>} />;
const footer = (
  <Footer>
    Copyright {new Date().getFullYear()} © Stock. All rights reserved.
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="th" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          docsRepositoryBase="https://github.com/Shinonn23/Copa-Docs.git"
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          themeSwitch={{
            light: "สว่าง",
            dark: "มืด",
            system: "ระบบ",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
