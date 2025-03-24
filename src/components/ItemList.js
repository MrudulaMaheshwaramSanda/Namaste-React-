import { RES_LOGO_URL

 } from "../utils/constants";
export const ItemList = ({ items = [] }) => {
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
                        <div>
                            {(info?.imageId)? <img className="m-4 w-50" src={RES_LOGO_URL + info?.imageId} />: ""}
                        
                        </div>

                    </div>
                );
            })}
        </div>
    );
};
