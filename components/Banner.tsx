import bannerImg from '../public/images/banner01.jpg'

export default function Banner() {
    return (
        <>
            <div className='banner'>  
                <div className='banner_bg_black'></div>
                <section style={{
                    width: '100%', 
                    height: '100%', 
                    position: 'relative', 
                    backgroundImage :`url(${bannerImg.src})`, 
                    backgroundPosition:"bottom center",
                    color: "#fff",
                    display: "flex",
                    
                }}>
                    <div className='banner_text'>
                        Maybelline
                        <p>
                            고급의 정점, 메이블린과 함께해요
                            <br />
                            고급의 정점, 메이블린과 함께해요 고급의 정점, 메이블린과 함께해요
                        </p>
                    </div>
                </section>
            </div>   
            <style jsx>{`
                .banner{
                    position:relative;
                    width:100%;
                    height:300px;
                }
                .banner_bg_black{
                    position:absolute;
                    width:100%;
                    height:100%;
                    top:0;
                    left:0;
                    z-index:2;
                    background-color:#00000060;
                }
                .banner_text{
                    position:absolute;
                    top:50%;
                    left:30px;
                    z-index:5;
                    color:#fff;
                    font-weight:600;
                    font-size:36px;
                    transform:translateY(-50%);
                }
                .banner_text > p {
                    margin-top:20px;
                    font-weight:500;
                    font-size:16px;
                }
            `}</style> 
        </>    
    )
}