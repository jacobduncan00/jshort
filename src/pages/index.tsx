import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-950 text-white">
      <p className="text-3xl mt-12 mb-0">JShort 🔗 Shortener</p>
      <Suspense>
        <CreateLinkForm />
      </Suspense>
    </div>
  );
};

export default Home;
