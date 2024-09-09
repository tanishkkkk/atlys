import { TriangleAlert } from "lucide-react";
import React from "react";

const PageNotFound = () => {
  return (
    <main className="flex gap-3 justify-center flex-col items-center h-[100vh]">
      <TriangleAlert size={50} />
      <p className="text-4xl">Page Not Found</p>
    </main>
  );
};

export default PageNotFound;
