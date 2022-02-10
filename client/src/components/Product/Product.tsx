import React, {useEffect, useState} from 'react';

import './Product.css'
import {useNavigate, useParams} from "react-router-dom";
import {Search} from "@material-ui/icons";
import ProductCard from "./ProductCard";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProduct} from "../../store/actions/ProductActionCreator";
import Loader from "../Loader/Loader";
import Pagination from "react-js-pagination"
import arrowDown from '../../image/close.png'

const categories = [
    {id:1, category: "Beard"},
    {id:2, category: "Cutting"},
    {id:3, category: "Hair"},
    {id:4, category: "Shaving"}
]

const Product = () => {
    const [category, setCategory] = useState('')
    const [keyword, setKeyword] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useAppDispatch()
    const {products, isLoading, resultPerPage, filteredProductsCount} = useAppSelector(state => state.productReducer)

    const navigate = useNavigate()

    const setCurrentPageNo = (e:number) => {
        setCurrentPage(e)
    }


    useEffect(() => {
        dispatch(fetchProduct(keyword, category, currentPage))
    }, [dispatch, keyword, category, currentPage])

    return (
        <>

                <div className="header-top">
                    <h2>Shop</h2>
                    <div>
                        <span onClick={() => navigate('/')}>Home</span>
                        /
                        <span>Shop</span>
                        /
                        <span>Cutting</span>
                    </div>
                </div>

                <div className="product">
                    <nav className="productNav">
                        <div className="category category-phone">
                            <h4>Categories</h4>
                            <img src="" alt=""/>
                            <ul>
                                {categories.map(category => (
                                    <li onClick={() => {
                                        setCategory(category.category)
                                        setCurrentPage(1)
                                    }} key={category.id}>{category.category}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="search">
                            <h4>Search</h4>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search for products"
                                    onChange={(e) => setKeyword(e.target.value)}
                                    value={keyword}
                                />
                                <Search />
                            </div>
                        </div>
                    </nav>
                    {isLoading ? <Loader /> :
                    <main className="productMain">
                        <div className="product-container">
                            {products?.map((product:any) => (
                                <ProductCard key={product._id} image={product.images[0].url} title={product.name} price={product.price} id={product._id} />
                            ))}
                        </div>

                        {resultPerPage < filteredProductsCount && <div className="paginationBox">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={filteredProductsCount}
                                onChange={setCurrentPageNo}
                                nextPageText="Next"
                                prevPageText="Prev"
                                firstPageText="1st"
                                lastPageText="Last"
                                itemClass="page-item"
                                linkClass="page-link"
                                activeClass="pageItemActive"
                                activeLinkClass="pageLinkActive"
                            />
                        </div>}
                    </main>
                    }
                </div>


        </>
    );
};

export default Product;