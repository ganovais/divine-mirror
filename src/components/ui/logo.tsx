import Image from "next/image";
import Link from "next/link";

import LogoED from "@/assets/logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={LogoED}
        alt="Logo"
        className={cn("h-24 w-auto sm:h-36 mx-auto mb-6", className)}
      />
    </Link>
  );
}
