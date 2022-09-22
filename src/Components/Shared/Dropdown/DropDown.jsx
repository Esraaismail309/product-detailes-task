import React from "react";
import './dropdown.css'


export const DropDown = () => {
  return (
    <div className="mr-1">
      <select name="Products" id="products"  >
        <option value="all">All</option>
        <option value="laptops">Laptops</option>
        <option value="mobiles">Mobiles</option>
      </select>
    </div>
  );
};
