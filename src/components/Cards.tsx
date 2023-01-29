import { addToCart } from '../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../hooks'
import Cardsdata from './Data'
import YourCart from './YourCart';
function Cards() {
    // const [count, setCount] = useState(0);
    const data = useAppSelector((state) => state.counter.cart)
    // console.log(count);
    
    const dispatch = useAppDispatch();
    
  return (
    <>
    <div className="flex mr-20 ml-20 mt-10 justify-around">
      <div className="grid grid-cols-3 gap-10">
        {Cardsdata.map((item) => {
          return (
            <div key={item.id}>
              <h2 className="text-3xl">{item.rname}</h2>
              <img className="w-[300px]" src={item.imgdata} alt="img"/>
              <button
                onClick={() => {
                  dispatch(addToCart(item))
                }}
                className="h-[60px] bg-slate-300 rounded-xl w-full hover:bg-slate-400"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <YourCart />
    </div>
    </>
  )
}

export default Cards