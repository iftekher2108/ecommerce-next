
import "@/styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";

// Providers
// import { CartProvider } from "@/context/CartContext";
// import { AuthProvider } from "@/context/AuthContext";

// Components
// import MainLayout from "@/components/layouts/MainLayout";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // Dashboard pages without frontend layout
    const isDashboard = router.pathname.startsWith("/dashboard");

    // Individual pages can disable layout
    const Layout = Component.Layout || null;

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta
                    name="theme-color"
                    content="#ffffff"
                />

                <meta
                    name="author"
                    content="Your Store Name"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link rel="icon" href="/favicon.ico" />

                <title>My Store | Online Shopping</title>
            </Head>

            {/* Global Providers */}
            {/* <AuthProvider> */}
            {/* <CartProvider> */}

            {Layout ? (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            ) : (
                <Component {...pageProps} />
            )}

            {/* </CartProvider> */}
            {/* </AuthProvider> */}
        </>
    );
}
