import React, { use, useEffect, useState } from "react";
import FilterPrice from "../FilterPrice/";
import axios from "axios";
const URL = "http://localhost:5000";

const DiscountedItems = () => {
  const [discounted, setDiscounted] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState({ min: "", max: "" });
  const [filterPrice, setFilterPrice] = useState({});
  const [discount, setDiscount] = useState(true);

  useEffect(() => {
    const getall = async () => {
      try {
        const allData = [
          "equipments",
          "fertilizer",
          "protective",
          "planting",
          "pots",
          "sales"
        ];
        const responses = await Promise.all(
          allData.map((category) => axios.get(`${URL}/${category}`))
        );
        const combined = responses.flatMap((response) => response.data);
        setDiscounted(combined);
        setFilterPrice(combined);
      } catch (error) {
        console.error("Məlumatlar gətirilərkən xəta baş verdi:", error);
      }
    };

    getall();
  }, []);

  useEffect(() => {
    const min = parseFloat(minMaxPrice.min) || 0;
    const max = parseFloat(minMaxPrice.max) || Infinity;
    const filtered = discounted.filter((product) => {
      const isWithingRange = product.price >= min && product.price <= max;
      const isWithingDiscount = discount ? product.salePercent > 0 : true;
      return isWithingRange && isWithingDiscount;
    });
    setFilterPrice(filtered);
  }, [minMaxPrice, discounted]);

  return (
    <>
      <div className="mx-auto max-w-11/12">
        <h2 className="text-5xl font-bold pt-14 pb-10">Discounted items</h2>
        <div>
          <FilterPrice
            onPriceChange={setMinMaxPrice}
            onDiscountChange={setDiscount}
          />
        </div>
      </div>
      <div className="max-w-11/12 mx-auto ">
        <div className=" grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {filterPrice.length ? (
            filterPrice.map(
              ({
                id,
                image,
                name,
                price,
                salePrice,
                salePercent,
                category,
              }) => {
                return (
                  <div
                    key={`${category}${id}`}
                    className="border-1 border-[#DDDDDD] rounded-sm flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="flex flex-col relative">
                      <img className="w-full" src={image} alt="" />
                      {salePercent > 0 && (
                        <div
                          className="bg-[#339933] absolute end-3 top-3 text-white rounded-md px-2
                 py-1 text-[13px] font-bold flex items-center justify-center "
                        >
                          -{salePercent}%
                        </div>
                      )}
                    </div>

                    <div>
                      <p>{name}</p>
                    </div>
                    <div className="flex items-end gap-2">
                      <h3 className="text-2xl font-bold">${price}</h3>
                      {salePrice > 0 && (
                        <h4 className="text-[14px] opacity-50">${salePrice}</h4>
                      )}
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <h1>Tapilmadi</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscountedItems;
