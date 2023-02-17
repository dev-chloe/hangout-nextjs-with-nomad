import Head from "next/head";
import NavBar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
    </>
  )
}