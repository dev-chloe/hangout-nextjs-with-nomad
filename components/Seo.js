import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  let prefix = "Chloe"
  switch (router.pathname.split('/')[1]) {
    case "":
      prefix = "Home";
      break;
    case "about":
      prefix = "About";
      break;
    case "movies":
      prefix = router.query.params[0];
      break;
  }
  return (
    <Head>
      <title>{`${prefix} | Next Movies`}</title>
    </Head>
  )
}