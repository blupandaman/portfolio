import Link from "next/link";

export default function ReposPage() {
  return (
    <div className="absolute left-4 top-4 space-y-3">
      <div className="flex space-x-3">
        <Link href="/">Work</Link>
        <Link href="/repos">Repos</Link>
        <p className="font-semibold text-primary">Articles</p>
      </div>

      <div className="ml-[105px] flex flex-col gap-2">
        <p>Soon&trade;</p>
      </div>
    </div>
  );
}
