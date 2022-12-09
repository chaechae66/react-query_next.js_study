import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { getItem } from "../../api/cosmeticAPI"
import styles from "../../styles/common.module.css"

interface IParams extends ParsedUrlQuery {
    id : string
}

export default function Product(){
    const router = useRouter()
    const id = router.query.id?.toString()
    const { status, data, error } = useQuery({ 
        queryKey: ['Item',id], 
        queryFn: () =>{ return getItem(id!) } 
    })

    if(status === "loading") {
        return <div>로딩 중</div>
    }
    
    if(status === "error" && error instanceof Error) {
        return <div>{`다음과 같은 문제가 발생하였습니다. ${error.message}`}</div>
    }

    return(<>
            <main className={styles.wrap}>
                <h2>{data?.name}</h2>
                <Image src={data?.image_link!} alt={data?.name!} width={160} height={160}/>
                <p>
                    {data?.description}
                </p>
                <b>
                    ${data?.price}
                </b>
                <button onClick={()=>{router.back()}}>뒤로가기</button>
                <style jsx>{`
                    h2{
                        margin-bottom : 20px;
                    }
                    b{
                        font-size:24px;
                        color:pink;
                        display:block;
                        margin-top:20px;
                    }
                    button{
                        padding:5px 10px;
                        background-color:#000;
                        color:#fff;
                        font-weight:700;
                        margin-top:30px;
                    }
                `}</style>
            </main>
        </>)
}

export const getServerSideProps : GetServerSideProps = async (context) => {

    const { id } = context.params as IParams

    const queryClient = new QueryClient()
  
    await queryClient.prefetchQuery(['Item',id], () => { return getItem(id)})
  
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    }
  }