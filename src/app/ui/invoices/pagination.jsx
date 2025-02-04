"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center mt-5">
      {currentPage > 1 && (
        <button onClick={() => replace(createPageURL(currentPage - 1))}>
          Previous
        </button>
      )}
      <span className="px-3">{`Page ${currentPage} of ${totalPages}`}</span>
      {currentPage < totalPages && (
        <button onClick={() => replace(createPageURL(currentPage + 1))}>
          Next
        </button>
      )}
    </div>
  );
}