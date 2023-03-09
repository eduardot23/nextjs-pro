const API = process.env.NEXT_PUBLIC_API_URL

const endPoints = { 
    auth: {
        login: `${API}/api/v1/auth/login`,
        profile: `${API}/api/v1/auth/profile`
    },
    products: { 
        getProduct: (id) => `${API}/api/v1/products/${id}`,
        getProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/v1/products`,
        updateProducts: (id) => `${API}/api/v1/products/${id}/`,
        deleteProducts: (id) => `${API}/api/v1/products/${id}/`,
    },
    categories: {
        getCategoriesList: `${API}/api/v1/categories/`,
        addCategory: `${API}/api/v1/categories/`,
        getCategoryItems: (id) => `${API}/api/v1/categories/${id}/products/`,
        updateCategory: (id) => `${API}/api/v1/categories/${id}/`,
    },
    files: {
        addImage: `${API}/api/v1/files/upload/`,
    },
}

export default endPoints