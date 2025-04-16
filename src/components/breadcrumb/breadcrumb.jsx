"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent mismatched rendering on server

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 mb-6 ml-9">
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="hover:underline text-blue-600 font-medium">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={index} className="flex items-center space-x-1">
              <ChevronRight className="w-4 h-4 mx-1" />
              {isLast ? (
                <span className="text-gray-900 font-semibold capitalize">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="hover:underline text-blue-600 capitalize"
                >
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
