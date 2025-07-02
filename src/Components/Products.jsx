import { useState } from "react";
import {
  shopy2,
  shopy3,
  shopy4,
  shopy5,
  shopy6,
  shopy7,
  shopy8,
} from "../assets/imagesFile/Images";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    name: "Boxy1 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy8,
  },
  {
    id: 2,
    name: "Boxy2 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy2,
  },
  {
    id: 3,
    name: "Boxy3 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy3,
  },
  {
    id: 4,
    name: "Boxy4 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy4,
  },
  {
    id: 5,
    name: "Boxy5 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy5,
  },
  {
    id: 6,
    name: "Boxy6 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy6,
  },
  {
    id: 7,
    name: "Boxy7 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy7,
  },
  {
    id: 8,
    name: "Boxy8 T-Shirt with Roll Sleeve",
    price: "$20.00",
    image: shopy8,
  },
];
export default function Products() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-fit py-10 flex justify-center mb-10 ">
      <div className="w-[70vw] relative">
        <h1 className="text-center text-3xl font-semibold mb-10">
          FEATURED PRODUCTS
        </h1>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-white rounded-lg h-full duration-300">
                  <Link to="/Shop">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[40vh] object-cover rounded duration-300"
                  />
                  </Link>
                  <div className="p-2">
                    <h3 className="text-lg font-light text-gray-600 mt-2">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-15 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          <HiOutlineChevronLeft className="text-3xl text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-15 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          <HiOutlineChevronRight className="text-3xl text-gray-600" />
        </button>
      </div>
    </div>
  );
}