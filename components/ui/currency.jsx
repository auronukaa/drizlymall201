"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});

const Currency = ({ value, price, discount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold flex items-center">
      <div className="text-xl font-bold">{formatter.format(Number(value))}</div>
      {price && (
        <div className="text-base flex items-center justify-between w-full sm:w-[23%] text-neutral-400 ml-2">
          <div className="line-through">{formatter.format(Number(price))}</div>
          {discount && (
            <span className="ml-2 text-sm rounded-md text-white no-underline bg-orange-600 py-1 px-2">
              -{discount}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Currency;
