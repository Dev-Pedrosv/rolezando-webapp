import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image fill src="/logo.svg" alt="logo" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
