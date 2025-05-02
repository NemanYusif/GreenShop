import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartBtn from "../../Components/AddToCartBtn";

const URL = "http://localhost:5000/";

const SelectedProducts = () => {
  const { category } = useParams();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    axios.get(`${URL}${category.toLocaleLowerCase()}`).then(({ data }) => {
      setCategorys(data);
    });
  }, [category]);


  return (
    <>
      <div className="max-w-11/12 mx-auto pt-14">
        <div className="pb-10 flex items-center justify-between  ">
          <h2 className="text-5xl font-bold ">{categorys[0]?.header}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 items-center justify-center">
          {categorys.length ? (
            categorys.map(
              ({ id, image, name, price, salePrice, salePercent }) => {
                return (
                  <div
                    key={id}
                    className="border-1 border-[#DDDDDD] rounded-sm flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="flex flex-col relative group">
                      <img className="w-full" src={image} alt="" />
                      <AddToCartBtn/>
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

export default SelectedProducts;
