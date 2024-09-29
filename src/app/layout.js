import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import HeadFile from "@/components/PageEffects/Head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Laroft sales",
//   description: "Marketing at it's finest"
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadFile/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
           {children}
        </StoreProvider>
       
      </body>
    </html>
  );
}
