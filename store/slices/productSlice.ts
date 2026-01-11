import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import { Application, Category, CategoryRequest, CategoryResponse, Product, Region, Species } from '@/types/product.types';
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
    applications: Application[];
    regions: Region[];
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
    applications: [],
    regions: [],
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



export const getFeaturedProducts = createAsyncThunk(
    'product/getFeaturedProducts',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getFeaturedProductList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch featured products');
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



export const getApplications = createAsyncThunk(
    'product/getApplications',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getApplicationList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch applications');
        }

    }
);


export const getRegions = createAsyncThunk(
    'product/getRegions',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getRegionList(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch region');
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



export const getProductsByApplications = createAsyncThunk(
    'product/getProductsByApplications',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductListByApplications(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch Products by applications');
        }

    }
);



export const getProductsByRegions = createAsyncThunk(
    'product/getProductsByRegions',
    async (
        options: { page?: number; limit?: number, search?: string } | undefined,
        { rejectWithValue }
    ) => {
        try {
            const response = await productService.getProductListByRegions(options);
            console.log(response)
            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to fetch Products by regions');
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



// Delete product category
export const deleteCategory = createAsyncThunk(
    'product/deleteCategory',
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.deleteCategory(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to delete category');
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
            return rejectWithValue('failed to delete category');
        }

    }
);






// Create product region
export const createRegion = createAsyncThunk(
    'product/createRegion',
    async (data: CategoryRequest, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.addProductRegion(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to create region');
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
            return rejectWithValue('failed to create region');
        }

    }
);



// Delete product region
export const deleteRegion = createAsyncThunk(
    'product/deleteRegion',
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.deleteRegion(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to delete region');
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
            return rejectWithValue('failed to delete region');
        }

    }
);






// Create product species
export const createSpecies = createAsyncThunk(
    'product/createSpecies',
    async (data: CategoryRequest, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.addProductSpecies(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to create species');
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
            return rejectWithValue('failed to create species');
        }

    }
);



// Delete product species
export const deleteSpecies = createAsyncThunk(
    'product/deleteSpecies',
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.deleteSpecies(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to delete species');
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
            return rejectWithValue('failed to delete species');
        }

    }
);





// Create product applications
export const createApplication = createAsyncThunk(
    'product/createApplication',
    async (data: CategoryRequest, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.addProductApplication(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to create application');
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
            return rejectWithValue('failed to create application');
        }

    }
);



// Delete product application
export const deleteApplication = createAsyncThunk(
    'product/deleteApplication',
    async (data: { id: string }, { rejectWithValue }) => {
        try {
            const response: CategoryResponse = await productService.deleteApplication(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'failed to delete application');
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
            return rejectWithValue('failed to delete application');
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

        // Get Featured Produts
        builder
            .addCase(getFeaturedProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFeaturedProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getFeaturedProducts.rejected, (state, action) => {
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


        // Products by regions
        builder
            .addCase(getProductsByRegions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsByRegions.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getProductsByRegions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });


        // Products by applications
        builder
            .addCase(getProductsByApplications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductsByApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data.products;
                state.pagination = action.payload.data.pagination;
            })
            .addCase(getProductsByApplications.rejected, (state, action) => {
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
                state.species = action.payload.data.species;
                state.pagination = action.payload.data.pagination
            })
            .addCase(getSpecies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });



        // get Application list
        builder
            .addCase(getApplications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getApplications.fulfilled, (state, action) => {
                state.loading = false;
                state.applications = action.payload.data.applications;
                state.pagination = action.payload.data.pagination
            })
            .addCase(getApplications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });


        // get Region list
        builder
            .addCase(getRegions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRegions.fulfilled, (state, action) => {
                state.loading = false;
                state.regions = action.payload.data.regions;
                state.pagination = action.payload.data.pagination
            })
            .addCase(getRegions.rejected, (state, action) => {
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


        // Delete product category
        builder
            .addCase(deleteCategory.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(deleteCategory.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });






        // Create product species
        builder
            .addCase(createSpecies.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(createSpecies.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(createSpecies.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });


        // Delete product species
        builder
            .addCase(deleteSpecies.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(deleteSpecies.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(deleteSpecies.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });






        // Create product application
        builder
            .addCase(createApplication.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(createApplication.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(createApplication.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });


        // Delete product application
        builder
            .addCase(deleteApplication.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(deleteApplication.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(deleteApplication.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });





        // Create product region
        builder
            .addCase(createRegion.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(createRegion.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(createRegion.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });


        // Delete product region
        builder
            .addCase(deleteRegion.pending, (state) => {
                state.categoryLoading = true;
                state.error = null;
            })
            .addCase(deleteRegion.fulfilled, (state, action) => {
                state.categoryLoading = false;
                // state.category = action.payload.data
            }
            )
            .addCase(deleteRegion.rejected, (state, action) => {
                state.categoryLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetLeads } = productSlice.actions;

export default productSlice.reducer;
