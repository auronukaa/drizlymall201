"use client";

import { getProducts } from "@/actions/get-products";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "./Rhombus.gif";

const AllProducts = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    getNextPageParam: (lastPage) => {
      if (
        lastPage.meta.pagination.page === lastPage.meta.pagination.pageCount
      ) {
        return false;
      }

      return lastPage.meta.pagination.page + 1;
    },
  });

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  const queryClient = useQueryClient();

  const products = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data];
  }, []);

  return (
    <div className="sm:px-6 lg:px-8 pb-24 mt-10">
      <div className="my-5 mx-7 sm:mx-0">
        <h1 className="text-lg font-medium flex items-center justify-center sm:justify-start">
          Rezultatet:{" "}
          <span className="font-bold text-xl ml-2">{products.length}</span>
        </h1>
        <hr className="my-2" />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="w-full flex items-center justify-center gap-x-7 gap-y-7 px-6 lg:px-0">
          <div className="space-y-5 sm:space-y-12 w-full">
            {data?.length === 0 && <NoResults />}
            <InfiniteScroll
              dataLength={data.pages.length}
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={
                <div className="w-full my-20 flex justify-center">
                  <Image src={Loader} alt="Loader GIF" />
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-7 sm:mx-0">
                {products.map((item, id) => (
                  <ProductCard key={id} data={item} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
