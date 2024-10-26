import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full py-3 flex flex-row items-center justify-center gap-2">
      <Link href="/" className="text-sm hover:opacity-100 opacity-70">
        Home
      </Link>
    </header>
  );
}
