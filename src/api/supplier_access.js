import axios from 'axios'
import { backend_url } from '../config'
import { Cookies } from 'react-cookie'
const proxy = `${backend_url}/supp`
const cookie = new Cookies()

export const add_product = async (category_id, subCategory, typeOfProduct, name, quantity, SKU, price_before, price_after, imageSrc, color, type, nameOfBrand, logo, description, s, m, l, xl, xxl) => {
    const token = await cookie.get('Auth')
    await axios.post(`${proxy}`,
        {
            category_id: category_id,
            subCategory: subCategory,
            typeOfProduct: typeOfProduct,
            name: name,
            quantity: quantity,
            SKU: SKU,
            price_before: price_before,
            price_after: price_after,
            imageSrc: imageSrc,
            desc: {
                color: color,
                type: type,
                brand: {
                    name: nameOfBrand,
                    logo: logo,
                },
                description: description,
            },
            sizes: {
                s: s,
                m: m,
                l: l,
                xl: xl,
                xxl: xxl
            },
            view: true
        }
        , { headers: { authorization: token } })
}

export const my_products = async () => {
    const token = await cookie.get('Auth')
    return (await (await axios.get(`${proxy}/my`, { headers: { authorization: token } })).data)
}


export const hide_product = async (_id) => {
    const token = await cookie.get('Auth')
    return (await axios.put(`${proxy}/hide/${_id}`, {}, { headers: { Authorization: token } }))
}
export const show_product = async (_id) => {
    const token = await cookie.get('Auth')
    return (await axios.put(`${proxy}/show/${_id}`, {}, { headers: { authorization: token } }))
}

export const update_product = async (_id, { Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id }) => {
    await axios.put(`${proxy}/update/${_id}`, { Product_name, Product_desc, Product_SKU, Product_category_id, quantity, Product_price, Product_discount_id })
}


export const add_supplier = async (name, email, password) => {
    const token = await cookie.get('Auth')
    return (await (await axios.post(`${proxy}/sign_up`, {
        name: name,
        email: email,
        password: password,
    }, { headers: { authorization: token } })).data)
}

export const login = async ({ email, password }) => {
    return axios.post(`${proxy}/login`, { email, password })
}
export const allsupliers = async (_id) => {
    const token = await cookie.get('Auth')
    return (await (await axios.get(`${proxy}/all`), {}, { headers: { authorization: token } }).data)
}