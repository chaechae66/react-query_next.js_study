import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
 }

export default function Layout({ children } : LayoutProps){
    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <style jsx>{`
                main{
                    width: 1200px;
                    margin: 0 auto;
                    min-height: 100vh
                }
            `}</style>
        </>
    )
}