// API service for broker registration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://real1.siddhesh.net/broker/api/v1';

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage =
          (data && typeof data.error === 'string' && data.error) ||
          (data && typeof data.message === 'string' && data.message) ||
          `API request failed with status ${response.status}`;
        const error = new Error(errorMessage);
        error.response = { status: response.status, data };
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Verification endpoints
  async sendMobileOtp(mobileNumber) {
    return this.request('/broker/sendMobileOtp', {
      method: 'POST',
      body: JSON.stringify({ mobileNumber }),
    });
  }

  async verifyMobileOtp(mobileNumber, otp) {
    return this.request('/broker/verifyMobileOtp', {
      method: 'PUT',
      body: JSON.stringify({ mobileNumber, otp }),
    });
  }

  // Send email OTP
  async sendEmailOtp(email) {
    return this.request('/broker/sendEmailOtp', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // Verify email OTP
  async verifyEmailOtp(email, otp) {
    return this.request('/broker/verifyEmailOtp', {
      method: 'PUT',
      body: JSON.stringify({ email, otp }),
    });
  }

  // Broker authentication
  async loginWithOtp({ email, mobileNumber, brokerId }) {
    const payload = {};
    if (email) payload.email = email;
    if (mobileNumber) payload.mobileNumber = mobileNumber;
    if (brokerId) payload.brokerId = brokerId;

    return this.request('/broker/loginWithotp', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async verifyAccountOtp({ mobileNumber, accountOtp }) {
    return this.request('/broker/verifyOtp', {
      method: 'POST',
      body: JSON.stringify({ mobileNumber, accountOtp }),
    });
  }

  async loginWithPassword(payload) {
    return this.request('/broker/loginWithpassword', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  // Password recovery & setup
  async requestPasswordOtp({ email, mobileNumber }) {
    const body = {};
    if (email) body.email = email;
    if (mobileNumber) body.mobileNumber = mobileNumber;

    return this.request('/broker/requestForgetPassword', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async verifyPasswordOtp({ email, mobileNumber, otp }) {
    const body = { otp };
    if (email) body.email = email;
    if (mobileNumber) body.mobileNumber = mobileNumber;

    return this.request('/broker/verifyForgetPasswordOtp', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async resetPassword({ email, mobileNumber, newPassword, confirmPassword }) {
    const body = { newPassword, confirmPassword };
    if (email) body.email = email;
    if (mobileNumber) body.mobileNumber = mobileNumber;

    return this.request('/broker/resetPassword', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  // Registration step endpoints
  async savePersonalDetails(personalData) {
    // Generate required fields that backend expects
    const enhancedData = {
      ...personalData,
      // Generate a unique brokerId if not provided
      brokerId: personalData.brokerId || `BRK-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      // Generate a temporary 6-digit OTP if not provided
      accountOtp: personalData.accountOtp || String(Math.floor(100000 + Math.random() * 900000)),
      // Don't generate temporary password - let it be null/undefined for first-time users
      // accountPassword will be set only when user creates their actual password
      // Ensure required boolean fields are set
      isMobileverify:
        personalData.mobileVerified ??
        personalData.isMobileverify ??
        false,
      isEmailVerify:
        personalData.emailVerified ??
        personalData.isEmailVerify ??
        false,
      isPersonalDetailsFilled:
        typeof personalData.isPersonalDetailsFilled === 'boolean'
          ? personalData.isPersonalDetailsFilled
          : true,
      // Map frontend field names to backend field names
      mobileNumber: personalData.mobile || personalData.mobileNumber,
      whatsappNumber: personalData.whatsapp || personalData.whatsappNumber,
      // Map address fields with correct backend naming
      permanentCountry:
        personalData.permanentCountry ??
        personalData.country ??
        '',
      permanentState:
        personalData.permanentState ??
        personalData.state ??
        '',
      permanentCity:
        personalData.permanentCity ??
        personalData.city ??
        '',
      permanentPincode:
        personalData.permanentPincode ??
        personalData.pinCode ??
        '',
      permanentAddressLine1:
        personalData.permanentAddressLine1 ??
        personalData.residenceAddress ??
        '',
      permanentAddressLine2:
        personalData.permanentAddressLine2 ??
        personalData.residenceAddressLine2 ??
        '',
      corrspondanceCountry:
        personalData.corrspondanceCountry ??
        personalData.correspondenceCountry ??
        personalData.country ??
        '',
      corrspondanceState:
        personalData.corrspondanceState ??
        personalData.correspondenceState ??
        personalData.state ??
        '',
      corrspondanceCity:
        personalData.corrspondanceCity ??
        personalData.correspondenceCity ??
        personalData.city ??
        '',
      corrspondancePincode:
        personalData.corrspondancePincode ??
        personalData.correspondencePinCode ??
        personalData.pinCode ??
        '',
      corrspondanceAddressLine1:
        personalData.corrspondanceAddressLine1 ??
        personalData.correspondenceAddressLine1 ??
        personalData.residenceAddress ??
        '',
      corrspondanceAddressLine2:
        personalData.corrspondanceAddressLine2 ??
        personalData.correspondenceAddressLine2 ??
        personalData.residenceAddressLine2 ??
        '',
    };

    return this.request('/broker/personalDetails', {
      method: 'POST',
      body: JSON.stringify(enhancedData),
    });
  }

  async updatePersonalDetails(id, personalData) {
    // Map frontend field names to backend field names for updates
    const mappedData = {
      ...personalData,
      // Ensure required boolean fields are set
      isMobileverify:
        personalData.mobileVerified ??
        personalData.isMobileverify ??
        false,
      isEmailVerify:
        personalData.emailVerified ??
        personalData.isEmailVerify ??
        false,
      isPersonalDetailsFilled:
        typeof personalData.isPersonalDetailsFilled === 'boolean'
          ? personalData.isPersonalDetailsFilled
          : true,
      // Map frontend field names to backend field names
      mobileNumber: personalData.mobile || personalData.mobileNumber,
      whatsappNumber: personalData.whatsapp || personalData.whatsappNumber,
      // Map address fields with correct backend naming
      permanentCountry:
        personalData.permanentCountry ??
        personalData.country ??
        '',
      permanentState:
        personalData.permanentState ??
        personalData.state ??
        '',
      permanentCity:
        personalData.permanentCity ??
        personalData.city ??
        '',
      permanentPincode:
        personalData.permanentPincode ??
        personalData.pinCode ??
        '',
      permanentAddressLine1:
        personalData.permanentAddressLine1 ??
        personalData.residenceAddress ??
        '',
      permanentAddressLine2:
        personalData.permanentAddressLine2 ??
        personalData.residenceAddressLine2 ??
        '',
      corrspondanceCountry:
        personalData.corrspondanceCountry ??
        personalData.correspondenceCountry ??
        personalData.country ??
        '',
      corrspondanceState:
        personalData.corrspondanceState ??
        personalData.correspondenceState ??
        personalData.state ??
        '',
      corrspondanceCity:
        personalData.corrspondanceCity ??
        personalData.correspondenceCity ??
        personalData.city ??
        '',
      corrspondancePincode:
        personalData.corrspondancePincode ??
        personalData.correspondencePinCode ??
        personalData.pinCode ??
        '',
      corrspondanceAddressLine1:
        personalData.corrspondanceAddressLine1 ??
        personalData.correspondenceAddressLine1 ??
        personalData.residenceAddress ??
        '',
      corrspondanceAddressLine2:
        personalData.corrspondanceAddressLine2 ??
        personalData.correspondenceAddressLine2 ??
        personalData.residenceAddressLine2 ??
        '',
    };

    return this.request(`/broker/updatePersonalDetails/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mappedData),
    });
  }

  async saveBasicCompanyInfo(id, companyData) {
    // Map frontend field names to backend field names and set required flags
    const agreedTerms =
      typeof companyData.isAgreedTermsOfUse === 'boolean'
        ? companyData.isAgreedTermsOfUse
        : companyData.agreeTerms === undefined
          ? true
          : Boolean(companyData.agreeTerms);

    const mappedData = {
      ...companyData,
      isCompanyDetailsFilled: true, // Mark as filled when saving
      // Map years to the expected backend field name
      yearsInRealEstate: companyData.years || companyData.yearsInRealEstate,
      // Map address fields
      addressLine1: companyData.officeAddress || companyData.addressLine1,
      addressLine2: companyData.officeAddressLine2 || companyData.addressLine2 || '',
      // Ensure required boolean field is set
      isAgreedTermsOfUse: agreedTerms,
    };

    return this.request(`/broker/basicCompanyinfo/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mappedData),
    });
  }

  async saveVerificationOrKyc(id, verificationData) {
    // Map frontend field names to backend field names and set required flags
    const agreedTerms =
      typeof verificationData.isAgreedTermsOfUseForKyc === 'boolean'
        ? verificationData.isAgreedTermsOfUseForKyc
        : verificationData.agreeTerms === undefined
          ? true
          : Boolean(verificationData.agreeTerms);

    const mappedData = {
      ...verificationData,
      isKycFilled: true, // Mark as filled when saving
      // Ensure required boolean field is set
      isAgreedTermsOfUseForKyc: agreedTerms,
    };

    return this.request(`/broker/verificationOrkyc/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mappedData),
    });
  }

  async saveBankDetails(id, bankData) {
    // Map frontend field names to backend field names and set required flags
    const agreedTerms =
      typeof bankData.isAgreedTermsOfUseForBankDetails === 'boolean'
        ? bankData.isAgreedTermsOfUseForBankDetails
        : bankData.agreeTerms === undefined
          ? true
          : Boolean(bankData.agreeTerms);

    const mappedData = {
      ...bankData,
      isBankInfoFilled: true, // Mark as filled when saving
      brokerStatus: 'pending', // Set status to pending after completing all steps
      // Map frontend field names to backend field names
      ifscCode: bankData.ifsc || bankData.ifscCode,
      swiftCode: bankData.swift || bankData.swiftCode,
      branchAddress: bankData.branch || bankData.branchAddress,
      passbookOrCancelledCheque: bankData.file || bankData.passbookOrCancelledCheque,
      // Ensure required boolean field is set
      isAgreedTermsOfUseForBankDetails: agreedTerms,
    };

    return this.request(`/broker/bankDetails/${id}`, {
      method: 'PUT',
      body: JSON.stringify(mappedData),
    });
  }

  async updateProfileStatus(id, statusPayload) {
    const payload =
      typeof statusPayload === 'string'
        ? { brokerStatus: statusPayload }
        : { ...statusPayload };

    return this.request(`/broker/updateProfilestatus/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  // Get broker by ID to check existing registration
  async getBrokerById(id) {
    return this.request(`/broker/getBrokerById/${id}`);
  }

  // Check if user has incomplete registration by mobile/email
  async checkIncompleteRegistration(mobileNumber, email) {
    // This might need a custom endpoint or use existing getAllBroker with filters
    return this.request(`/broker/getAllBroker?mobile=${mobileNumber}&email=${email}`);
  }

  // Get complete broker data by ID
  async getBrokerById(brokerId) {
    return this.request(`/broker/getBrokerById/${brokerId}`);
  }

  // File upload endpoints
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${API_BASE_URL}/upload/uploadFile`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData, // Don't set Content-Type header, let browser set it with boundary
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'File upload failed');
      }
      
      return data;
    } catch (error) {
      console.error('File Upload Error:', error);
      throw error;
    }
  }

  // Get file URL by key
  async getFileUrl(key, expiresIn = 3600) {
    return this.request(`/upload/${key}?expiresIn=${expiresIn}`);
  }

  // Delete file by key
  async deleteFile(key) {
    return this.request(`/upload/${key}`, {
      method: 'DELETE',
    });
  }
}

const apiService = new ApiService();
export default apiService;