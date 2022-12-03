import { useRouter } from "next/router"
import React from "react";
import ActiveLink from "../common/ActiveLink";

export default function Header(){
    const router = useRouter();

    const goToHome = () => {
        router.push("/")
    }

    const goToAbout = () => {
        router.push("/about")
    }

    return(
        <>
            <div>
                <header>
                    <ActiveLink href="/">화장품</ActiveLink>
                    <ActiveLink href="/about">소개</ActiveLink>
                </header>
            </div>
            <style jsx>{`
                div{
                    background-color:#000;
                    color: #fff;
                    width : 100%;  
                    height: 80px;
                }

                header{
                    width:1200px;
                    height: 100%;
                    display :flex;
                    align-items: center;
                    margin : 0 auto;
                }

                h2{
                    margin-right: 20px; 
                    font-size:24px;
                }

                h2:hover{
                    opacity:.7;
                }
            `}</style>
        </>
    )
}