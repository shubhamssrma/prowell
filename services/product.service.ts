import { ApiService } from './api.service';
import { API_BASE_URLS } from '@/config/api.config';
// import type { BookingListResponse, CreateFollowUpRequest, CreateLeadBookingRequest, CreateLeadBookingReseponse, CreateLeadRequest, FollowUp, FollowUpResponse, Lead, LeadListResponse, LeadResponse, PropertyListResponse, UpdateLeadBookingRequest, UploadFileRequest, UploadFileResponse } from '@/types/lead.types';
import { API_ENDPOINTS } from '@/config/api.config';
import { LoginResponse, UserLoginRequest } from '@/types/auth.types';
import { ApplicationListResponse, CategoryListResponse, CategoryRequest, CategoryResponse, Product, ProductDetailsResponse, ProductListResponse, RegionListResponse, SpeciesListResponse } from '@/types/product.types';

// Service instance for Property Management API
const ProductManagementService = new ApiService(API_BASE_URLS.PRODUCTS_MANAGEMENT);

class ProductService {
    // /**
    //  * Get Product List
    //  */
    async getProductList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_ALL}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }


    // /**
    //  * Get Featured Product List
    //  */
    async getFeaturedProductList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_ALL_FEATURED}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }


    // /**
    //  * Get Category List
    //  */
    async getCategoriesList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<CategoryListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.CATEGORIES.GET_ALL}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<CategoryListResponse>(url);
    }


    // /**
    //  * Get Species List
    //  */
    async getSpeciesList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<SpeciesListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.SPECIES.GET_ALL}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<SpeciesListResponse>(url);
    }


    // /**
    //  * Get Application List
    //  */
    async getApplicationList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ApplicationListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.APPLICATION.GET_ALL}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ApplicationListResponse>(url);
    }



    // /**
    //  * Get Region List
    //  */
    async getRegionList(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<RegionListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.REGION.GET_ALL}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<RegionListResponse>(url);
    }



    // /**
    //  * Get Product List By Species
    //  */
    async getProductListBySpecies(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_BY_SPECIES}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }


    // /**
    //  * Get Product List By Segments
    //  */
    async getProductListBySegments(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_BY_SEGMENTS}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }


    // /**
    //  * Get Product List By Applications
    //  */
    async getProductListByApplications(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_BY_APPLICATIONS}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }



    // /**
    //  * Get Product List By Regions
    //  */
    async getProductListByRegions(options?: {
        page?: number;
        limit?: number;
        search?: string;
    }): Promise<ProductListResponse> {
        const params = new URLSearchParams();
        if (options?.page) params.append('page', options.page.toString());
        if (options?.limit) params.append('limit', options.limit.toString());
        if (options?.search) params.append('search', options.search.toString());

        const url = `${API_ENDPOINTS.PRODUCTS.GET_BY_REGIONS}${params.toString() ? `?${params.toString()}` : ''}`;
        return ProductManagementService.get<ProductListResponse>(url);
    }



    // /**
    //  * Get Product List By Species
    //  */
    async getProductBySlug(options?: {
        slug?: string;
    }): Promise<ProductDetailsResponse> {
        const url = `${API_ENDPOINTS.PRODUCTS.GET_BY_SLUG}/${options?.slug}`;
        return ProductManagementService.get<ProductDetailsResponse>(url);
    }



    // /**
    //  * Add New Category
    //  */
    async addProductCategory(data: CategoryRequest): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.CATEGORIES.CREATE}`;
        return ProductManagementService.post<CategoryResponse>(url, data);
    }



    // /**
    //  * Delete Category
    //  */
    async deleteCategory(options: { id: string }): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.CATEGORIES.DELETE}/${options.id}`;
        return ProductManagementService.patch<CategoryResponse>(url, {});
    }












    // Species Service
    // /**
    //  * Add New Species
    //  */
    async addProductSpecies(data: CategoryRequest): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.SPECIES.CREATE}`;
        return ProductManagementService.post<CategoryResponse>(url, data);
    }



    // /**
    //  * Delete Species
    //  */
    async deleteSpecies(options: { id: string }): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.SPECIES.DELETE}/${options.id}`;
        return ProductManagementService.patch<CategoryResponse>(url, {});
    }







    // Application Services
    // /**
    //  * Add New application
    //  */
    async addProductApplication(data: CategoryRequest): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.APPLICATION.CREATE}`;
        return ProductManagementService.post<CategoryResponse>(url, data);
    }



    // /**
    //  * Delete application
    //  */
    async deleteApplication(options: { id: string }): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.APPLICATION.DELETE}/${options.id}`;
        return ProductManagementService.patch<CategoryResponse>(url, {});
    }






    // Region Services
    // /**
    //  * Add New region
    //  */
    async addProductRegion(data: CategoryRequest): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.REGION.CREATE}`;
        return ProductManagementService.post<CategoryResponse>(url, data);
    }



    // /**
    //  * Delete Region
    //  */
    async deleteRegion(options: { id: string }): Promise<CategoryResponse> {
        const url = `${API_ENDPOINTS.REGION.DELETE}/${options.id}`;
        return ProductManagementService.patch<CategoryResponse>(url, {});
    }
}

export const productService = new ProductService();
