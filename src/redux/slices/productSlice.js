import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        totalProducts:[],
        currentPageProducts:[],
        relatedProducts:[],
        currentPage:0,
        totalPage:0,
        productDetail:null,
    },
    reducers:{
        setProducts:(state, action) => {
            state.totalProducts = action.payload;
            state.totalPage = Math.ceil(action.payload.length / 4)
        },
        setPageProducts:(state, action) => {
            const currentPage = action.payload;
            state.currentPageProducts = state.totalProducts.slice(currentPage*4, (currentPage*4)+4);
        },
        setPage:(state, action) => {
            state.currentPage += action.payload;
        },
        setRelatedProducts:(state) => {
            state.relatedProducts = state.totalProducts.slice(0,4);
        },
        setProductDetail:(state, action) => {
            state.productDetail = state.currentPageProducts[action.payload];
        },
        setByAESC:(state) => {
            state.totalProducts = state.totalProducts.sort((a,b) => a.price - b.price);
            console.log("in aesc", state.totalProducts)
        },
        setByDESC:(state) => {
            state.totalProducts = state.totalProducts.sort((a,b) => b.price - a.price);
            console.log("in desc", state.totalProducts)

        },
        setByLatest:(state) => {
            state.totalProducts = state.totalProducts.sort(() => Math.random - 0.5); 
            console.log("in latest", state.totalProducts)

        }
    }
})

export  const {setProductDetail, setProducts, setPageProducts, setPage, setRelatedProducts, setByAESC, setByDESC,setByLatest} = productSlice.actions;
export default productSlice.reducer;