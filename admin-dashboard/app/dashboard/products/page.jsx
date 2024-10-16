import Pagination from "@/components/ui/dashboard/Pagination";
import Search from "@/components/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="p-5 bg-[#151c2c] min-h-screen">
      <div className="mt-5 bg-slate-900 p-6 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <Search placeholder={"Search for a product"} />
          <Link href="/dashboard/products/add">
            <button className="p-3 bg-purple-900 text-gray-300 font-bold rounded-md hover:bg-purple-700 transition duration-300">
              Add New
            </button>
          </Link>
        </div>

        {/* Table */}
        <table className="w-full table-auto bg-slate-800 text-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-700">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Created At</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Product Row */}
            <tr className="border-b border-slate-700">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/noproduct.jpg"
                    alt="product"
                    height={40}
                    width={40}
                    className="rounded-full object-cover"
                  />
                  iPhone
                </div>
              </td>
              <td className="p-3">Latest iPhone model</td>
              <td className="p-3">$2000</td>
              <td className="p-3">12.08.2024</td>
              <td className="p-3">72</td>
              <td className="p-3">
                <div className="flex gap-3">
                  <Link href="/dashboard/products/test">
                    <button className="p-2 bg-teal-700 text-gray-300 font-bold rounded-md hover:bg-teal-600 transition duration-300">
                      View
                    </button>
                  </Link>
                  <button className="p-2 bg-red-700 text-gray-300 font-bold rounded-md hover:bg-red-600 transition duration-300">
                    Delete
                  </button>
                </div>
              </td>
            </tr>

            {/* Additional Product Row */}
            <tr className="border-b border-slate-700">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/noproduct.jpg"
                    alt="product"
                    height={40}
                    width={40}
                    className="rounded-full object-cover"
                  />
                  iPhone
                </div>
              </td>
              <td className="p-3">Latest iPhone model</td>
              <td className="p-3">$2000</td>
              <td className="p-3">12.08.2024</td>
              <td className="p-3">72</td>
              <td className="p-3">
                <div className="flex gap-3">
                  <Link href="/dashboard/products/test">
                    <button className="p-2 bg-teal-700 text-gray-300 font-bold rounded-md hover:bg-teal-600 transition duration-300">
                      View
                    </button>
                  </Link>
                  <button className="p-2 bg-red-700 text-gray-300 font-bold rounded-md hover:bg-red-600 transition duration-300">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsPage;
