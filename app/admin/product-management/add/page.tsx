'use client'
import React, { useEffect, useState } from 'react';
import { Upload, X, Plus, Trash2, Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCategories, getSpecies } from '@/store/slices/productSlice';
import { toast } from 'react-toastify';

// Types
interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
}

interface ImageData {
  url: string;
  alt: string;
  publicId: string;
}

interface QuickFacts {
  concentration: string;
  activeIngredients: string;
  shelfLife: string;
  packaging: string;
  solubility: string;
  withdrawalPeriod: string;
}


interface DosageItem {
  species: string;   // species ObjectId
  dosage: string;
}


interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

interface FileData {
  url: string;
  name: string;
  publicId: string;
}

interface ModeOfActionItem {
  title: string;
  description: string;
}


interface ProductFormData {
  name: string;
  slug: string;
  categories: string[];
  species: string[];
  form: string;
  featuredImage: ImageData;
  images: ImageData[];
  quickFacts: QuickFacts;
  dosage: DosageItem[];
  modeOfAction: ModeOfActionItem[];
  keyBenefits: string[];
  applicationUsage: string;
  restrictions: string[];
  seo: SEOData;
  isFeatured: boolean;
  isActive: boolean;
  productOverview: string;
  productDescription: string;
  productSmallDescription: string;
  specSheet: FileData | null;
  sampleFile: FileData | null;

}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    slug: '',
    categories: [],
    species: [],
    form: '',
    featuredImage: { url: '', alt: '', publicId: '' },
    images: [],
    quickFacts: {
      concentration: '',
      activeIngredients: '',
      shelfLife: '',
      packaging: '',
      solubility: '',
      withdrawalPeriod: '',
    },
    dosage: [
      { species: '', dosage: '' }
    ],
    modeOfAction: [
      { title: '', description: '' }
    ],
    keyBenefits: [],
    applicationUsage: '',
    restrictions: [],
    seo: { metaTitle: '', metaDescription: '', keywords: [] },
    isFeatured: false,
    isActive: true,

    // 🔹 NEW
    productOverview: '',
    productDescription: '',
    productSmallDescription: '',
    specSheet: null,
    sampleFile: null,
  });


  const [uploading, setUploading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const { loading, error, categories, species } = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch()
  // // Mock categories and species - replace with actual data
  // const mockCategories = [
  //   { id: '507f1f77bcf86cd799439011', name: 'Fertilizers' },
  //   { id: '507f1f77bcf86cd799439012', name: 'Pesticides' },
  //   { id: '507f1f77bcf86cd799439013', name: 'Seeds' },
  // ];

  // const mockSpecies = [
  //   { id: '607f1f77bcf86cd799439011', name: 'Rice' },
  //   { id: '607f1f77bcf86cd799439012', name: 'Wheat' },
  //   { id: '607f1f77bcf86cd799439013', name: 'Cotton' },
  // ];

  // Upload to Cloudinary
  const uploadToCloudinary = async (file: File): Promise<CloudinaryResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'product_images'); // Replace with your preset
    formData.append('cloud_name', 'dgoy492ld'); // Replace with your cloud name
    // 581341457613542
    // ZcW4KO22lIlUHw9a__RV_4oS8h4
    // CLOUDINARY_URL=cloudinary://581341457613542:ZcW4KO22lIlUHw9a__RV_4oS8h4@dgoy492ld
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dgoy492ld/image/upload`,
      { method: 'POST', body: formData }
    );

    if (!response.ok) throw new Error('Upload failed');
    return response.json();
  };


  const uploadFileToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'product_files');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dgoy492ld/raw/upload`,
      { method: 'POST', body: formData }
    );

    if (!response.ok) throw new Error('Upload failed');
    return response.json();
  };


  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await uploadToCloudinary(file);
      setFormData(prev => ({
        ...prev,
        featuredImage: {
          url: result.secure_url,
          alt: formData.name || 'Product image',
          publicId: result.public_id,
        },
      }));
    } catch (error) {
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingGallery(true);
    try {
      const result = await uploadToCloudinary(file);
      setFormData(prev => ({
        ...prev,
        images: [
          ...prev.images,
          {
            url: result.secure_url,
            alt: formData.name || 'Product image',
            publicId: result.public_id,
          },
        ],
      }));
    } catch (error) {
      alert('Failed to upload image');
    } finally {
      setUploadingGallery(false);
    }
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }));
  };

  const addArrayItem = (field: keyof ProductFormData, item: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as any[]), item],
    }));
  };

  const removeArrayItem = (field: keyof ProductFormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (field: keyof ProductFormData, index: number, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      // const baseURL = "http://localhost:5000/api"
      const baseURL = "https://prowell-backend.onrender.com/api"
      const response = await fetch(`${baseURL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // if (!response.ok) throw new Error('Failed to create product');
      const data = await response.json();
      alert(data.message)
      // alert('Product created successfully!');
      // Reset form or redirect
    } catch (error) {
      alert('Failed to create product');
    } finally {
      setSubmitting(false);
    }
  };

  const steps = [
    { id: 1, name: 'Basic Info' },
    { id: 2, name: 'Images' },
    { id: 3, name: 'Details' },
    { id: 4, name: 'SEO & Settings' },
  ];

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getSpecies())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Product</h1>
          <p className="text-gray-600">Fill in the details to add a new product to your catalog</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${currentStep >= step.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    {step.id}
                  </div>
                  <span
                    className={`ml-3 font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                      }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded ${currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="product-slug"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Categories <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categories.map((cat) => {
                    const isSelected = formData.categories.includes(cat._id);

                    return (
                      <label
                        key={cat._id}
                        className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 cursor-pointer transition
            ${isSelected
                            ? 'bg-green-50 ring-2 ring-green-600'
                            : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                      >
                        {/* Hidden checkbox (accessibility) */}
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {
                            setFormData((prev) => ({
                              ...prev,
                              categories: isSelected
                                ? prev.categories.filter((id) => id !== cat._id)
                                : [...prev.categories, cat._id],
                            }));
                          }}
                          className="sr-only"
                        />

                        {/* Custom check indicator */}
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-md border transition
              ${isSelected
                              ? 'bg-green-600 border-green-600'
                              : 'border-gray-300 group-hover:border-gray-400'
                            }`}
                        >
                          {isSelected && (
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Text */}
                        <span className="text-sm font-medium text-gray-800">
                          {cat.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>


              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Species
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {species.map((spec) => {
                    const isSelected = formData.species.includes(spec._id);

                    return (
                      <label
                        key={spec._id}
                        className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 cursor-pointer transition
            ${isSelected
                            ? 'bg-green-50 ring-2 ring-green-600'
                            : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                      >
                        {/* Hidden checkbox */}
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {
                            setFormData((prev) => ({
                              ...prev,
                              species: isSelected
                                ? prev.species.filter((id) => id !== spec._id)
                                : [...prev.species, spec._id],
                            }));
                          }}
                          className="sr-only"
                        />

                        {/* Custom check */}
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-md border transition
              ${isSelected
                              ? 'bg-green-600 border-green-600'
                              : 'border-gray-300 group-hover:border-gray-400'
                            }`}
                        >
                          {isSelected && (
                            <svg
                              className="h-3.5 w-3.5 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Text */}
                        <span className="text-sm font-medium text-gray-800">
                          {spec.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Form
                </label>
                <input
                  type="text"
                  value={formData.form}
                  onChange={(e) => setFormData(prev => ({ ...prev, form: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="e.g., Liquid, Powder, Granular"
                />
              </div>
            </div>
          )}

          {/* Step 2: Images */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Images</h2>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image *
                </label>
                <div className="relative">
                  {formData.featuredImage.url ? (
                    <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                      <img
                        src={formData.featuredImage.url}
                        alt="Featured"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, featuredImage: { url: '', alt: '', publicId: '' } }))}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                      {uploading ? (
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                      ) : (
                        <>
                          <Upload className="w-12 h-12 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-600">Click to upload featured image</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                        </>
                      )}
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFeaturedImageUpload}
                        disabled={uploading}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Gallery Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gallery Images
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                      <img src={img.url} alt={img.alt} className="w-full h-32 object-cover" />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('images', index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  {uploadingGallery ? (
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                  ) : (
                    <>
                      <Plus className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Add gallery image</p>
                    </>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleGalleryImageUpload}
                    disabled={uploadingGallery}
                  />
                </label>
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spec Sheet (PDF/DOC)
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={async (e) => {
                    if (!e.target.files?.[0]) return;
                    const res = await uploadFileToCloudinary(e.target.files[0]);
                    setFormData(prev => ({
                      ...prev,
                      specSheet: {
                        url: res.secure_url,
                        name: e.target.files![0].name,
                        publicId: res.public_id,
                      },
                    }));
                  }}
                />

                {formData.specSheet && (
                  <p className="text-sm text-green-600 mt-1">
                    Uploaded: {formData.specSheet.name}
                  </p>
                )}
              </div>




              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sample File
                </label>

                <input
                  type="file"
                  accept=".pdf,image/*"
                  onChange={async (e) => {
                    if (!e.target.files?.[0]) return;
                    const res = await uploadFileToCloudinary(e.target.files[0]);
                    setFormData(prev => ({
                      ...prev,
                      sampleFile: {
                        url: res.secure_url,
                        name: e.target.files![0].name,
                        publicId: res.public_id,
                      },
                    }));
                  }}
                />

                {formData.sampleFile && (
                  <p className="text-sm text-green-600 mt-1">
                    Uploaded: {formData.sampleFile.name}
                  </p>
                )}
              </div>


            </div>
          )}

          {/* Step 3: Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h2>

              {/* Quick Facts */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Quick Facts
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Concentration"
                    value={formData.quickFacts.concentration}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, concentration: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                  <input
                    type="text"
                    placeholder="Active Ingredients"
                    value={formData.quickFacts.activeIngredients}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, activeIngredients: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                  <input
                    type="text"
                    placeholder="Shelf Life"
                    value={formData.quickFacts.shelfLife}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, shelfLife: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                  <input
                    type="text"
                    placeholder="Packaging"
                    value={formData.quickFacts.packaging}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, packaging: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                  <input
                    type="text"
                    placeholder="Solubility"
                    value={formData.quickFacts.solubility}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, solubility: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                  <input
                    type="text"
                    placeholder="Withdrawal Period"
                    value={formData.quickFacts.withdrawalPeriod}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        quickFacts: { ...prev.quickFacts, withdrawalPeriod: e.target.value }
                      }))
                    }
                    className="px-4 py-2 rounded-lg border"
                  />

                </div>
              </div>


              {/* Dosage */}
              <section className="space-y-5">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dosage
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      addArrayItem('dosage', { species: '', dosage: '' })
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <Plus className="w-4 h-4" />
                    Add dosage
                  </button>
                </div>

                {formData.dosage.map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
                  >
                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => removeArrayItem('dosage', index)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Species */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">
                          Species
                        </label>
                        <select
                          value={item.species}
                          onChange={(e) =>
                            updateArrayItem('dosage', index, {
                              ...item,
                              species: e.target.value,
                            })
                          }
                          className="w-full rounded-xl bg-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select species</option>
                          {species.map((sp) => (
                            <option key={sp._id} value={sp._id}>
                              {sp.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Dosage */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-500">
                          Dosage
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 100–200 g / MT feed"
                          value={item.dosage}
                          onChange={(e) =>
                            updateArrayItem('dosage', index, {
                              ...item,
                              dosage: e.target.value,
                            })
                          }
                          className="w-full rounded-xl bg-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </section>



              {/* Mode of Action */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mode of Action
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      addArrayItem('modeOfAction', { title: '', description: '' })
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
                  >
                    <Plus className="w-4 h-4" />
                    Add step
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.modeOfAction.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Step Dot */}
                      <div className="absolute left-0 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow">
                        {index + 1}
                      </div>

                      {/* Content */}
                      <div className="rounded-2xl bg-gray-50 p-5 shadow-sm hover:shadow-md transition">
                        <button
                          type="button"
                          onClick={() => removeArrayItem('modeOfAction', index)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <input
                          type="text"
                          placeholder="Title"
                          value={item.title}
                          onChange={(e) =>
                            updateArrayItem('modeOfAction', index, {
                              ...item,
                              title: e.target.value,
                            })
                          }
                          className="mb-3 w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                          rows={3}
                          placeholder="Explain how the product works"
                          value={item.description}
                          onChange={(e) =>
                            updateArrayItem('modeOfAction', index, {
                              ...item,
                              description: e.target.value,
                            })
                          }
                          className="w-full rounded-xl bg-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>



              {/* Key Benefits */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Benefits
                </label>
                {formData.keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => updateArrayItem('keyBenefits', index, e.target.value)}
                      placeholder="Enter benefit"
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem('keyBenefits', index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('keyBenefits', '')}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add Benefit
                </button>
              </div>

              {/* Application Usage */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application & Usage
                </label>
                <textarea
                  value={formData.applicationUsage}
                  onChange={(e) => setFormData(prev => ({ ...prev, applicationUsage: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Describe how to apply and use this product"
                />
              </div>

              {/* Product Overview */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Overview
                </label>
                <textarea
                  value={formData.productOverview}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, productOverview: e.target.value }))
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border"
                  placeholder="Brief overview of the product"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Small Description
                </label>
                <textarea
                  value={formData.productSmallDescription}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, productSmallDescription: e.target.value }))
                  }
                  rows={2}
                  maxLength={250}
                  className="w-full px-4 py-2 rounded-lg border"
                  placeholder="Short summary (max 250 chars)"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  value={formData.productDescription}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, productDescription: e.target.value }))
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border"
                  placeholder="Detailed product description"
                />
              </div>

            </div>
          )}

          {/* Step 4: SEO & Settings */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">SEO & Settings</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.seo.metaTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, seo: { ...prev.seo, metaTitle: e.target.value } }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="SEO title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.seo.metaDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, seo: { ...prev.seo, metaDescription: e.target.value } }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="SEO description"
                />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">Featured Product</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">Active</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                className="px-6 py-3 rounded-lg font-medium text-white bg-green-600 hover:bg-cyan-700 transition"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-6 py-3 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 transition flex items-center gap-2"
              >
                {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
                {submitting ? 'Creating...' : 'Create Product'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;