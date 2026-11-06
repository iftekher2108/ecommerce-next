
import {
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* SEO */}
                <meta name="robots" content="index, follow" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Google Fonts */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                {/* Font Family */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                {/* Theme */}
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <body className="font-sans antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
