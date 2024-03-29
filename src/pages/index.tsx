import Head from "next/head";

import { api } from "~/utils/api";


export default function Home() {
  const { data, isLoading } = api.post.getAll.useQuery();

  if (isLoading) return <div>Loading ...</div>;

  if (!data) return <div>Something went wrong</div>;
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div className="w-full bg-red-200 md:max-w-2xl">
          <div className="text-2xl text-white">
            {data.map((post) => (
              <div key={post.id}>{post.name}</div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
