import { React, useState, useEffect } from "react";
import * as suplier from '../api/supplier_access'
import{AiOutlineEdit}from "react-icons/ai"
import{AiFillEye}from "react-icons/ai"
import{AiFillEyeInvisible}from "react-icons/ai"
import * as supplier from '../api/supplier_access'


import "./table.css"

function MyProducts() {
    const [products, setproducts] = useState([])
    const getProducts = async () => {
        await suplier.my_products().then(e => {
            setproducts(e)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])
    const show=async(id)=>{
        await supplier.show_product(id).then(e=>{
            getProducts()
        })
    }
    const hide=async(id)=>{
        await supplier.hide_product(id).then(e=>{
            getProducts()
        })
    }
    return (
        <div>
            <div className="add   ">
                <div className="w-100  addheder col-12" style={{ borderBottom: "1px solid gray", textAlign: "center" }} >
                    {" "}
                    <h1>my product list</h1>
                </div>
                <div style={{ width: "100%" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>price</th>
                                <th>Update</th>
                                <th>Visable</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) => (
                                <><td>{product.name}</td>
                                <td><input value={product.price_after} type="text"  /></td>
                                <td>{ <AiOutlineEdit style={{ fontSize: "25px", cursor: "pointer" }}  />}</td>
                                <td>{product.view ?( <AiFillEye style={{ fontSize: "25px", cursor: "pointer" }}
                                onClick={() => { hide(product._id) }}/>)
                                :<AiFillEyeInvisible  style={{ fontSize: "25px", cursor: "pointer" }}
                                onClick={() => { show(product._id) }}/>}</td>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyProducts;
