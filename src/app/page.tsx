import { getGalleryList } from "../services/gallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import camera from "./camera.jpg";

const page = async () => {
  const posts = await getGalleryList({ limit: 52, offset: 0 });
  return (
    <main className="w-screen mt-5 container mx-auto">
      <header className="my-5 text-3xl font-bold text-center flex items-center justify-center gap-3">
        <Image
          alt="static image"
          src={camera}
          sizes="(max-width: 320px) 16px,
          (max-width: 768px) 32px,
          64px"
          width={50}
        />
        <h1>Photo Gallery</h1>
      </header>
      <div className="grid grid-cols-fluid">
        {posts?.photos.map((item, index) => {
          return (
            <div
              key={index}
              className="m-5 border rounded-md overflow-hidden transition duration-150 hover:scale-110"
            >
              <Link href={`/${item.id}`}>
                <div>
                  <Image
                    className="w-full"
                    src={item.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    sizes="50vw"
                  />
                  <div className="p-4">
                    <div className="text-lg font-semibold truncate">
                      {item.title}
                    </div>
                    <div className="text-sm truncate">{item.description}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
