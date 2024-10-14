import Pagination from "@/components/ui/dashboard/Pagination";
import Search from "@/components/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <div className="mt-5 bg-slate-900">
        <div className="flex items-center justify-between">
          <Search placeholder={"search for a products"} />
          <Link href="/dashboard/products/add">
            <button className="p-2 bg-purple-900 font-bold text-gray-300 rounded-md cursor-pointer border-none">
              Add New
            </button>
          </Link>
        </div>
        <table className="w-full ">
          <thead>
            <tr>
              <td className="p-3">Title</td>
              <td className="p-3">Description</td>
              <td className="p-3">Price</td>
              <td className="p-3">Created At</td>
              <td className="p-3">Stock</td>
              <td className="p-3">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/noproduct.jpg"
                    alt="user"
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  iPhone
                </div>
              </td>
              <td className="p-3">Desc</td>
              <td className="p-3">$2000</td>
              <td className="p-3">12.08.2024</td>
              <td className="p-3">72</td>
              <td className="p-3">
                <div className="flex gap-3">
                  <Link href="/">
                    <button className="p-1 text-gray-300 border-none cursor-pointer rounded-md font-bold bg-teal-700">
                      View
                    </button>
                  </Link>
                  <button className="p-1 text-gray-300 border-none cursor-pointer rounded-md font-bold bg-red-700">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/noproduct.jpg"
                    alt="user"
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  iPhone
                </div>
              </td>
              <td className="p-3">Desc</td>
              <td className="p-3">$2000</td>
              <td className="p-3">12.08.2024</td>
              <td className="p-3">72</td>
              <td className="p-3">
                <div className="flex gap-3">
                  <Link href="/">
                    <button className="p-1 text-gray-300 border-none cursor-pointer rounded-md font-bold bg-teal-700">
                      View
                    </button>
                  </Link>
                  <button className="p-1 text-gray-300 border-none cursor-pointer rounded-md font-bold bg-red-700">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsPage;
