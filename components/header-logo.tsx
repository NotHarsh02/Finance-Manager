import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo1.svg" alt="Logo" height={45} width={45} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          FinHub
        </p>
      </div>
    </Link>
  );
};
