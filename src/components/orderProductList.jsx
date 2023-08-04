import { React, useState } from "react";

import "./style.css"
import "./table.css"

export default function OrderProductList(props) {
    

    return (
        <>
        {props.products.map((product)=>(
            <tr>
                <td>{product.name}</td>
                <td>   <img style={{maxHeight:"100px"}} src={product.image}></img></td>
                <td>{product.quantity}</td>
                <td>{product.SKU}</td>
            </tr>)
        )}
        </>)}
