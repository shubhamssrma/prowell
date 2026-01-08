interface SpeciesItem {
    _id: string;
    name: string;
    slug: string;
}

interface DosageSpecies {
    _id: string;
    name: string;
}

interface DosageItem {
    species: DosageSpecies;
    dosage: string;
}

interface ModeOfActionItem {
    title: string;
    description: string;
}

interface CategoryItem {
    _id: string;
    name: string;
    slug: string;
}

interface SEOData {
    keywords: string[];
}

interface QuickFacts {
    concentration: string;
    shelfLife: string;
    packaging: string;
    withdrawalPeriod: string;
}

interface FileData {
    url: string;
    name: string;
    publicId: string;
}
export interface Product {
    _id: string;
    name: string;
    slug: string;
    species: SpeciesItem[];
    form: string;
    formType?: string;      // optional if sometimes present
    quickFacts: QuickFacts;
    dosage: DosageItem[];
    modeOfAction: ModeOfActionItem[];
    keyBenefits: string[];
    applicationUsage: string;
    restrictions: string[];
    isActive: boolean;
    categories: CategoryItem[];
    seo: SEOData;
    createdAt: string;
    updatedAt: string;
    __v: number;
    featuredImage: {
        url: string;
        alt: string;
    },
    images: {
        url: string;
        alt: string;
    }[],
    isFeatured: boolean;
    productOverview: string;
    productSmallDescription: string;
    productDescription: string;
    sampleFile: FileData;
    specSheet: {
        url: string;
        alt: string;
    }
}

export interface Category {
    _id: string;
    name: string;
}

export interface Species {
    _id: string;
    name: string;
}

export interface ProductListResponse {
    success: boolean;
    message: string;
    data: {
        products: Product[],
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        }
    }
}


export interface ProductDetailsResponse {
    success: boolean;
    message: string;
    data: Product
}


export interface CategoryListResponse {
    success: boolean;
    message: string;
    data: Category[]
}


export interface SpeciesListResponse {
    success: boolean;
    message: string;
    data: Species[]
}
