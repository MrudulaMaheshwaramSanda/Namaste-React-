import { useDispatch } from "react-redux";
import { RES_LOGO_URL} from "../utils/constants";
import { addItem } from "../utils/cartSlice";


export const ItemList = ({ items = [] }) => {
    const dispatch = useDispatch(); //hook used to dispatch an action

    const handleAddItem = (item) => {
        console.log(item);
        dispatch(addItem(item))}; //get the exported action items 
        //dispatch creates object with action.payload as item and sends it to reducer fucntion

    return (
        <div>
            {items.map((item) => {
                const info = item?.card?.info; // Extracting the relevant info object
                
                return (
                    <div key={info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                        
                        <div className="p-2">
                            <span className="font-bold">{info?.name}</span>
                            <h4>₹{info?.price / 100 || info?.defaultPrice / 100}</h4>  
                            <p className="text-xs">{info?.description}</p>
                         {/* Assuming price is in paise */}
                        </div>

                        {(info?.imageId)?(<div className="relative"> 
                            <img className="m-2 w-60" src={RES_LOGO_URL + info?.imageId} />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-green-500 text-white px-3 py-1 rounded-lg shadow-md">
                                <button onClick={() => {
                                //dispatch an action
                                handleAddItem(item);
                                }}>Add</button>
                            </div>
                        </div>):(<div className="text-center m-15 bg-green-500 text-white rounded-lg px-3 py-1">
                                <button onClick={() => {
                                //dispatch an action
                                handleAddItem(item);
                                }}>Add</button>
                            </div>)}
                        
                        

                    </div>
                );
            })}
        </div>
    );
};
