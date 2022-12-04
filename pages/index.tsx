import { getList } from "../api/cosmeticAPI"
import { useEffect, useState } from 'react'
import Banner from "../components/Banner"
import Image from "next/image"

export default function Home() {
  const [list, setList] = useState<List[] | null>(null)

  useEffect(()=>{
    const fetchListData = async () => {
      const listdata = await getList();
      console.log('listdata',listdata)
      setList(listdata)
    }

    fetchListData();
  },[])

  return (
    <>
      <Banner />
      <section>
        {
          !list ? (
            <>로딩 중</>
          ) : (<>{
            list.map((item)=>{
              return(
                <div className="list_item" key={item.id}>
                  <h4>{item.name}</h4>
                  <div className="list_item_img">
                    <Image src={item.image_link} alt={item.name} width={100} height={100}/>
                  </div>
                  <div className="list_item_price">
                    {item.price}$
                    </div>
                </div>
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
        h4{
          height:45px;
        }
        .list_item{
          width : 400px;
          padding: 20px;
        }
        .list_item_img{
          width:100px;
          height:120px;
          margin-left:100px;
          display:flex;
          align-items:center;
        }
        .list_item_price{
          width:100%;
          color:pink;
          font-size:16px;
          text-align:center;
          font-weight:700;
          margin-bottom:40px;
        }
      `}</style>
    </>
  )
}
