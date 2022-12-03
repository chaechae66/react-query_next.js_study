import Link from 'next/link';
import { useRouter } from 'next/router'

function ActiveLink({ children, href }:{ children: string, href: string}) {
  const router = useRouter()
  const style = {
    marginRight: 20,
    fontSize: "18px",
    color: router.asPath === href ? 'pink' : 'white',
  }

  const handleClick = () => {
    router.push(href)
  }

  return (
    <Link href={href} onClick={handleClick} style={style}>
      {children}
    </Link>
  )
}

export default ActiveLink