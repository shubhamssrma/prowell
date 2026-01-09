import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import { Category, CategoryRequest, CategoryResponse, Product, Species } from '@/types/product.types';
import { productService } from '@/services/product.service';
import { toast } from 'react-toastify';

interface UserState {
    loading: boolean;
    error: string | null;
    categoryLoading: boolean;
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    products: Product[];
    categories: Category[];
    species: Species[];
    productDetails: Product | null;
}

const initialState: UserState = {
    loading: true,
    error: null,
    categoryLoading: false,
    products: [],
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
    },
    categories: [],
    species: [],
    productDetails: null
};


export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch lead by id');
        }

    }
);


export const getCategories = createAsyncThunk(
    'product/getCategories',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getCategoriesList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch lead by id');
        }

    }
);


export const getSpecies = createAsyncThunk(
    'product/getSpecies',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getSpeciesList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch lead by id');
        }

    }
);



export const getProductsBySpecies = createAsyncThunk(
    'product/getProductsBySpecies',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductListBySpecies(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch Products by species');
        }

    }
);




export const getProductsBySegments = createAsyncThunk(
    'product/getProductsBySegments',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductListBySegments(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch Products by segments');
        }

    }
);


export const getProductBySlug = createAsyncThunk(
    'product/getProductBySlug',
    async (
        options: { slug?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductBySlug(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch Product by slug');
        }

    }
);



// Create product category
export const createCategory = createAsyncThunk(
    'product/createCategory',
    async (data: CategoryRequest, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.addProductCategory(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to create category');
            } else {
                toast.success(response.message)
            }

            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message)
                return rejectWithValue(error.message);
            }
            toast.error(error as string)
            return rejectWithValue('failed to create category');
        }

    }
);


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        /**
         * Reset leads state (useful when switching filters/screens)
         */
        resetLeads(state) {
            state.products = [];
            state.pagination = initialState.pagination;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

        // Products by species
        builder
            .addCase(getProductsBySpecies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsBySpecies.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getProductsBySpecies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });


        // Products by segments
        builder
            .addCase(getProductsBySegments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsBySegments.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getProductsBySegments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });

        // get category list
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data.categories;
                state.pagination = action.payload.data.pagination
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });


        // get Species list
        builder
            .addCase(getSpecies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSpecies.fulfilled, (state, action) => {
                state.loading = false;
                state.species = action.payload.data;
            })
            .addCase(getSpecies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });



        // get Product by slug
        builder
            .addCase(getProductBySlug.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductBySlug.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetails = action.payload.data;
            })
            .addCase(getProductBySlug.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });


        // Create product category
        builder
            .addCase(createCategory.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(createCategory.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetLeads } = productSlice.actions;

export default productSlice.reducer;
