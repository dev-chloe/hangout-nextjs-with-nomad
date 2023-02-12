import Link from "next/link";
import { useRouter } from "next/router";
import style from "./NavBar.module.css"

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={style.nav_box}>
      <Link className={`${style.link} ${router.pathname === "/" ? style.active : ""}`} href="/" >Home</Link>
      <Link className={[style.link, router.pathname === "/about" ? style.active : ""].join(" ")} href="/about">About</Link>
    </nav >
  )
}