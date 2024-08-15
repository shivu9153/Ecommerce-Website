import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const Ordercard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={()=>navigate(`/account/order/${5}`)}
      
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://i.ytimg.com/vi/JDOXKqF60RQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBqbol7v5GNY7fy1V0NNjy4A8-XAQ"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men slim mid rise black jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs. 1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  xs={{ width: "50px", height: "15px" }}
                  className="text-green-500 mr-2 text-sm"
                />
                <span>Delivered on March 25</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on Mar 25</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Ordercard;
