import { getList } from "../api/cosmeticAPI"
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Banner from "../components/Banner"
import ListItem from "../components/ListItem";

export default function Home() {
  const { status, data, isSuccess, error } = useQuery({ queryKey: ['Lists'], queryFn: getList })

  if(status === "loading") {
    return <div>로딩 중</div>
  }

  if(status === "error" && error instanceof Error) {
    return <div>{`다음과 같은 문제가 발생하였습니다. ${error.message}`}</div>
  }

  return (
    <>
      <Banner />
      <section>
        {
          isSuccess && (<>{
            data.map((item)=>{
              return(
                <ListItem key={item.id} item={item}/>
              )
            })
          }</>)
        }
      </section>
      <style jsx>{`
        section{
          width : 1200px;
          min-height: 400px;
          margin: 0 auto;
          margin-top :80px;
          margin-bottom:100px;
          display:flex;
          flex-wrap:wrap;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['Lists'], getList)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}