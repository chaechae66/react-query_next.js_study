import Image from "next/image";
import Link from "next/link";

interface ListProps {
    item : List
}

export default function ListItem ({ item } : ListProps) {
    return(
        <Link href="product/[id]" as={`product/${item.id}`}>
            <div className="list_item" key={item.id}>
                <h4>{item.name}</h4>
                <div className="list_item_img">
                <Image src={item.image_link} alt={item.name} width={100} height={100}/>
                </div>
                <div className="list_item_price">
                {item.price}$
                </div>
            </div>
            <style jsx>{`
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
        </Link>
    )
}