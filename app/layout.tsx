import "./globals.css";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

export const metadata = {

  title: "Bandung Café Journal",

  description: "Comparative Review of Local Cafés in Bandung",

  icons: {

    icon: "/icon.png",

  },

};

export default function RootLayout({

  children,

}:{

  children:React.ReactNode;

}){

  return(

    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>

  );

}