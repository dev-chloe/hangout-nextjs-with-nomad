import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {
        router.pathname === "/" ?
          <Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link> :
          <Link href="/" legacyBehavior><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
      }
      <style jsx>{`
        nav {
          background-color: lightblue;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: red;
        }
      `}</style>
    </nav >
  )
}