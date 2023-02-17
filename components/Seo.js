import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const pageTitle = { '/': 'Home', '/about': 'About' };
  const router = useRouter();
  return (
    <Head>
      <title>{`${pageTitle[router.pathname]} | Next Movies`}</title>
    </Head>
  )
}