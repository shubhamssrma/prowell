import { ApiService } from './api.service';
import { API_BASE_URLS } from '@/config/api.config';
// import type { BookingListResponse, CreateFollowUpRequest, CreateLeadBookingRequest, CreateLeadBookingReseponse, CreateLeadRequest, FollowUp, FollowUpResponse, Lead, LeadListResponse, LeadResponse, PropertyListResponse, UpdateLeadBookingRequest, UploadFileRequest, UploadFileResponse } from '@/types/lead.types';
import { API_ENDPOINTS } from '@/config/api.config';
import { LoginResponse, UserLoginRequest } from '@/types/auth.types';

// Service instance for Property Management API
const AuthManagementService = new ApiService(API_BASE_URLS.AUTH);

class AuthService {
    /**
    * Login user
    */
    async login(data: UserLoginRequest): Promise<LoginResponse> {
        const url = `${API_ENDPOINTS.USERS.LOGIN}`;
        return AuthManagementService.post<LoginResponse>(url, data);
    }
}

export const authService = new AuthService();
