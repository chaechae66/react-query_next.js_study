import { useRouter } from "next/router"
import React from "react";

export default function Header(){
    const router = useRouter();

    const goToHome = () => {
        // router
    }

    const goToAbout = () => {
        
    }

    return(
        <>
            <div>
                <header>
                    <h2 onClick={goToHome}>로고</h2>
                    <h2 onClick={goToAbout}>공지</h2>
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