import { PropsWithChildren } from "react";
    import Head from "next/head";
    import Navigation from "./navigation";
    import style from "@/styles/layout.module.css";


    export default function Layout({ children }: PropsWithChildren) {
     return (
       <>
         <Head>
           <title>Web Studio</title>
           <meta name="description" content="SkillFactory Next.js project" />
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link rel="icon" href="/favicon.ico" />
         </Head>
        
         
            <div className= {style.container}>
           <header className={style.header}>
             <div className={style.logo}>
              WEBSTUDIO
              </div>
             <Navigation/>
           </header>
           <main className={style.main}>{children}</main>
           <footer className={style.footer}>&copy; 2023 Web studio</footer>
         </div>
       </>
     );
    }