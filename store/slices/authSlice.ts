import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
// import { leadService } from '@/services/lead.service';
// import type { BookingListResponse, CreateFollowUpRequest, UpdateLeadBookingRequest, CreateLeadBookingRequest, CreateLeadBookingReseponse, CreateLeadRequest, EditLeadResponse, FollowUp, FollowUpResponse, Lead, LeadBooking, LeadDetails, LeadListResponse, LeadResponse, Property, PropertyListResponse, UploadFileRequest, UploadFileResponse } from '@/types/lead.types';
// import { API_ENDPOINTS } from '@/config/api.config';
// import { toast } from "react-toastify";
import { authService } from '@/services/auth.service';
import { LoginResponse, User, UserLoginRequest } from '@/types/auth.types';
import { Product } from '@/types/product.types';
import { productService } from '@/services/product.service';

interface UserState {
    users: User[],
    loading: boolean;
    error: string | null;
    loggedInUser: {
        user: User | null;
        token: string | null;
    },
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

const getPersistedUser = (): {
    user: User | null;
    token: string | null;
} => {
    if (typeof window === 'undefined') {
        return { user: null, token: null };
    }

    try {
        const storedUser = localStorage.getItem('user');
        return storedUser
            ? JSON.parse(storedUser)
            : { user: null, token: null };
    } catch {
        return { user: null, token: null };
    }
};

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    loggedInUser: getPersistedUser(),
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
    },
};




export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: UserLoginRequest, { rejectWithValue }) => {
        try {
            const response: LoginResponse = await authService.login(data);
            // const leadData = (response as any) || response;
            // toast.success(response?.message || "Login Successfully");
            console.log(response)
            if (!response.success) {
                return rejectWithValue(response.message || 'Invalid credentials');
            }

            return response;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }

            return rejectWithValue('Failed to login');
        }

    }
);




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Reset leads state (useful when switching filters/screens)
         */
        // resetLeads(state) {
        //     state.products = [];
        //     state.pagination = initialState.pagination;
        //     state.loading = false;
        //     state.error = null;
        // },
        logoutUser(state) {
            state.loggedInUser = { user: null, token: null }
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {
        // Login User
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedInUser = action.payload.data
                localStorage.setItem('user', JSON.stringify(action.payload.data))
            }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
