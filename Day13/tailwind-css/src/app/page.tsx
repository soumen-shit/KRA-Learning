import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10">
      <ul>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/utilityFirst"}
        >
          <li>1: Utility First</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/responsiveUtilities"}
        >
          <li>2: Responsive Utilities</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/spacing"}
        >
          <li>3: Spacing</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/typography"}
        >
          <li>4: Typography</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/conditionalClasses"}
        >
          <li>5: Conditional Classes</li>
        </Link>
      </ul>
      <div className="flex justify-center mt-5 underline">
        <h1 className="text-2xl font-bold">MUI with NEXTJS</h1>
      </div>
      <ul>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/level1"}
        >
          <li>1: MUI Basic</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/themeProvider"}
        >
          <li>2: Theme Provider</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/tailwindMUI"}
        >
          <li>3: Tailwind + MUI</li>
        </Link>
        <Link
          className="text-xl font-bold cursor-pointer hover:text-blue-800"
          href={"/styleOverride"}
        >
          <li>4: Style Override</li>
        </Link>
      </ul>
    </div>
  );
}
