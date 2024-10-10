import React from "react";
import Image from "next/image";
import cnx from "@/public/images/cnx.png";
import h241 from "@/public/images/h241.png";
import community from "@/public/images/community.png";
import dengui from "@/public/images/dengui.png";
import safrimat from "@/public/images/safrimat.png";
import samba from "@/public/images/samba.png";

export default function () {
  return (
    <>
      <div className="py-10 px-10 md:px20">
        <h1 className="text-3xl font-bold text-center  md:text-4xl">
          Ils nous font confiance
        </h1>
        <div className=" justify-center items-center gap-10 py-10 px-10 md:px20 md:flex ">
          <div className="flex gap-10 justify-center items-center">
            <Image
              src={h241}
              alt="Picture of the author"
              className="h-16 w-20"
            />
            <Image
              src={cnx}
              alt="Picture of the author"
              className="h-14 w-28"
            />
          </div>
          <div className="flex gap-10 py-10 justify-center items-center">
            <Image
              src={samba}
              alt="Picture of the author"
              className="h-16 w-32"
            />
            <Image
              src={community}
              alt="Picture of the author"
              className="h-24 w-28"
            />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <Image
              src={dengui}
              alt="Picture of the author"
              className="h-14 w-32"
            />
            <Image
              src={safrimat}
              alt="Picture of the author"
              className="h-32 w-32"
            />
          </div>
        </div>
      </div>
    </>
  );
}
