import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
          Product
          {/* <Image src={} alt="daad"/> */}
      <Link href={"/product/edit"}>edit</Link>
    </div>
  );
};

export default page;
