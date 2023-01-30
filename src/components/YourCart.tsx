import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addToCart,
  deleteItem,
  decrement,
} from "../features/counter/counterSlice";

function YourCart() {
  let data = useAppSelector((state) => state.counter.cart);
  const [price, setPrice] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let sum = 0;
    data.map((item) => {
      return (sum = sum + item.qnty * item.price);
    });
    setPrice(sum);
  }, [data]);

  useEffect(() => {
    sessionStorage.setItem("key", JSON.stringify(data));
  });

  let storage = JSON.parse(sessionStorage.getItem("key") || "{}") as {
    id: number;
    rname: string;
    price: number;
    qnty: number;
  }[];

  if (Object.keys(storage).length === 0) {
    storage = data;
  }
  console.log(Object.keys(storage).length === 0);

  return (
    <div>
      {storage.map((item) => {
        return (
          <div className="m-2" key={item.id}>
            <div className="flex text-2xl">
              <div>
                <h2>{item.rname}</h2>
                <p>₹ {item.price}</p>
                <p>Quantity: {item.qnty}</p>
              </div>
              <button
                className="bg-slate-500 text-white px-4 mx-4 my-6 rounded-xl"
                onClick={() => dispatch(decrement(item))}
              >
                -
              </button>
              <button
                className="bg-slate-500 text-white px-4 mx-4 my-6 rounded-xl"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="bg-slate-400 text-white p-1 my-5 rounded ml-5"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <h2 className="text-3xl">Total: ₹{price}</h2>
    </div>
  );
}

export default YourCart;
