import { HomePage } from "@/components/home";
import { MainLayout } from "@/components/main-layout";
import type { NextPage } from "next";
import Head from "next/head";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My app</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
};

Home.getLayout = (
  page:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) => <MainLayout>{page}</MainLayout>;

export default Home;
