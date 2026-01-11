'use client'
import { useEffect, useState } from 'react';
// import LeadDetailsPage from '../../components/Leads/LeadDetails';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { Eye, Pencil, UserPlus, Loader2, Trash, X, Loader } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchConvertedLeads, fetchExpiredLeads, fetchNewLeads, fetchRejectedLeads, fetchUntouchedLeads, fetchWorkingLeads } from '@/store/slices/leadSlice';
import { formatIndianBudget, formatDateTime } from '@/helpers';
import { leadSources } from '@/constants/leadmanagement';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import { createApplication, createCategory, deleteApplication, deleteCategory, getApplications, getCategories, getProducts } from '@/store/slices/productSlice';
import { Category } from '@/types/product.types';

// interface FetchLeadsPayload {
//   page: number;
//   limit: number;
//   search?: string;
//   bid: string;
// }

// type LeadFetchAction = (
//   payload: FetchLeadsPayload | undefined
// ) => ReturnType<typeof fetchNewLeads>;

// interface Lead {
//   id: string;
//   name: string;
//   leadId: string;
//   email: string;
//   phone: string;
//   property: string;
//   propertyId: string;
//   createdAt: string;
//   budget: string;
//   assignedTo: string;
//   assignedDate?: string;
// }

// interface Stats {
//   total: number;
//   fresh: number;
//   following: number;
//   interested: number;
//   hot: number;
// }

// interface PageProps {
//   type: string;
//   title?: string;
//   viewLeadBaseUrl?: string;
//   editLeadBaseUrl?: string;
//   addLeadBaseUrl?: string;
// }

// const allProps = [
//   {
//     type: "all",
//     title: "All Leads",
//     viewLeadBaseUrl: "/account/leads/all",
//     editLeadBaseUrl: "/account/leads/all/edit",
//     addLeadBaseUrl: "/account/leads/all/add",
//   },
//   {
//     type: "working",
//     title: "Working Leads",
//     viewLeadBaseUrl: "/account/leads/working",
//     editLeadBaseUrl: "/account/leads/working/edit",
//     addLeadBaseUrl: "/account/leads/working/add",
//   },
//   {
//     type: "new",
//     title: "New Leads",
//     viewLeadBaseUrl: "/account/leads/new",
//     editLeadBaseUrl: "/account/leads/new/edit",
//     addLeadBaseUrl: "/account/leads/new/add",
//   },
//   {
//     type: "untouched",
//     title: "Untouched Leads",
//     viewLeadBaseUrl: "/account/leads/untouched",
//     editLeadBaseUrl: "/account/leads/untouched/edit",
//     addLeadBaseUrl: "/account/leads/untouched/add",
//   },
//   {
//     type: "expired",
//     title: "Expired Leads",
//     viewLeadBaseUrl: "/account/leads/expired",
//     editLeadBaseUrl: "/account/leads/expired/edit",
//     addLeadBaseUrl: "/account/leads/expired/add",
//   },
//   {
//     type: "rejected",
//     title: "Rejected Leads",
//     viewLeadBaseUrl: "/account/leads/rejected",
//     editLeadBaseUrl: "/account/leads/rejected/edit",
//     addLeadBaseUrl: "/account/leads/rejected/add",
//   },
//   {
//     type: "converted",
//     title: "Converted Leads",
//     viewLeadBaseUrl: "/account/leads/converted",
//     editLeadBaseUrl: "/account/leads/converted/edit",
//     addLeadBaseUrl: "/account/leads/converted/add",
//   }
// ]
const CategoryPage = () => {

  // const matched = allProps.find(obj => obj.type === type) ?? {
  //   type,
  //   title: "",
  //   viewLeadBaseUrl: "",
  //   editLeadBaseUrl: "",
  //   addLeadBaseUrl: ""
  // };
  // const { title, viewLeadBaseUrl, editLeadBaseUrl, addLeadBaseUrl } = matched;


  const dispatch = useAppDispatch()
  const { applications, loading, error, pagination, categoryLoading } = useAppSelector(state => state.productReducer)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  // const [showFilters, setShowFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  // Pagination calculations
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // setSelectedLeads([]);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    // setSelectedLeads([]);
  };

  const getPageNumbers = () => {
    // const pages: (number | "...")[] = [];
    const maxVisible = 5;
    const totalPages = pagination.totalPages

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    dispatch(getApplications({ limit: itemsPerPage, page: currentPage, search: debouncedSearch }))
  }, [currentPage, itemsPerPage, debouncedSearch]);

  const formattedDate = (dateString: string) => new Date(dateString).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).replace(',', ' at');


  const cancelDelete = () => {
    setShowDeleteAlert(false);
    setDeletingId(null);
  };

  const confirmDelete = () => {
    if (deletingId) {
      // setCategories(categories.filter(cat => cat.id !== deletingId));
      setShowDeleteAlert(false);
      setDeletingId(null);
    }
  };

  const handleAddClick = () => {
    setEditingCategory(null);
    setFormData({ name: '', description: '' });
    setShowModal(true);
  };


  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.description.trim()) {
      return;
    }

    if (editingCategory) {
      // setCategories(categories.map(cat =>
      //   cat.id === editingCategory.id
      //     ? { ...cat, name: formData.name, description: formData.description }
      //     : cat
      // ));

      alert('editing category edit success')
    } else {
      // const newCategory: Category = {
      //   id: Math.max(...categories.map(c => c.id), 0) + 1,
      //   name: formData.name,
      //   description: formData.description,
      //   createdAt: new Date().toISOString().split('T')[0]
      // };
      // setCategories([...categories, newCategory]);
      // alert('new category added')
      const data = await dispatch(createApplication(formData)).unwrap()
      if (data.success) {
        await dispatch(getApplications({ limit: itemsPerPage, page: currentPage, search: debouncedSearch }))
      }
      console.log(data)
    }

    setShowModal(false);
    setFormData({ name: '', description: '' });
  };

  const handleDeleteCategory = async (id: string) => {
    const resp = await dispatch(deleteApplication({ id })).unwrap()
    if (resp.success) {
      await dispatch(getApplications({ limit: itemsPerPage, page: currentPage, search: debouncedSearch }))
    }
  }


  // console.log("Categories : ", categories)
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">All Applications</h1>
              <p className="text-gray-600 text-sm">Manage your applications</p>
            </div>
            <div className="flex gap-3">
              {/* <button
                onClick={handleBulkUpload}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="text-sm font-medium">Bulk Upload</span>
              </button> */}
              <button
                onClick={handleAddClick}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Add Application</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-600">Total Applications</span>
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {
                loading ?
                  <Loader2 className="animate-spin text-green-500" size={30} />
                  :
                  <p className="text-3xl font-bold text-green-500">{pagination.total}</p>
              }
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search application by Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button> */}
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Showing {startIndex + 1}-{Math.min(endIndex, pagination.total)} of {pagination.total} applications
          </p>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-visible">
            <div className="overflow-x-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border border-gray-300 shadow-sm">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Application Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Slug</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Created At</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ?
                    <tr>
                      <td colSpan={8} className="py-16 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Loader2 className="animate-spin text-blue-600" size={40} />
                          <p className="text-gray-500 font-medium">Loading applications...</p>
                        </div>
                      </td>
                    </tr>
                    :
                    applications.length == 0 ?
                      <tr>
                        <td colSpan={8} className="py-16 text-center">
                          <div className="flex flex-col items-center justify-center">
                            <p className="text-black font-medium">No Application Found!</p>
                          </div>
                        </td>
                      </tr>
                      :
                      applications.map((obj, i) => {
                        return (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <p className="font-medium text-sm">{obj.name || "-"}</p>
                            </td>
                            <td className="px-4 py-4">
                              <div className="text-sm">
                                <p className="text-gray-700">{obj.slug}</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div>
                                {obj.status === "active" ? <p className="font-normal text-sm text-green-600">Active</p> : <p className="font-normal text-sm text-red-500">Inactive</p>}
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-normal text-sm">{formattedDate(obj.createdAt) || "-"}</p>
                            </td>
                            <td className="px-4 py-4">
                              <div className="relative">
                                <button
                                  onClick={() => setActiveDropdown(activeDropdown === obj.slug ? null : obj.slug)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                >
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                  </svg>
                                </button>
                                {activeDropdown === obj.slug && (
                                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    {/* <button
                                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                                    >
                                      <Pencil size={16} color='blue' />
                                      Edit Category
                                    </button> */}
                                    <button
                                      onClick={() => handleDeleteCategory(obj._id)}
                                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                                    >
                                      <Trash size={16} color='red' />
                                      Delete Application
                                    </button>
                                    {/* <Link
                                      href={`${viewLeadBaseUrl}/${lead._id}`}
                                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                                    >
                                      <Eye size={16} />
                                      View
                                    </Link> */}
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )
                      })
                  }
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {
              !loading && applications?.length > 0 &&
              <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Rows per page:</span>
                  <select
                    value={pagination.limit}
                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <div className="flex gap-1">
                    {getPageNumbers().map((page, index) => (
                      page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-1 text-sm text-gray-600">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page as number)}
                          className={`px-3 py-1 rounded-lg text-sm ${currentPage === page
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.totalPages}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  Page {currentPage} of {pagination.totalPages}
                </div>
              </div>
            }


            {/* Add/Edit Category Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                  <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {editingCategory ? 'Edit Application' : 'Add Application'}
                    </h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} className="text-gray-600" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Application Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter application name"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Enter application description"
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3 justify-end">
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {
                          categoryLoading ?
                            <>
                              Loading... <Loader size={16} />
                            </>
                            :
                            <>
                              {editingCategory ? 'Update' : 'Add'} Application
                            </>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}



            {/* Delete Confirmation Alert */}
            {showDeleteAlert && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Delete Application</h3>
                  <p className="text-gray-600 mb-6">
                    Are you sure you want to delete this category? This action cannot be undone.
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={cancelDelete}
                      className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmDelete}
                      className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;