import { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren<{}>){
    return (
        <>
            <Head>
                <title>Unparalleled</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}