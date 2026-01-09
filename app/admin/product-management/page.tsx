'use client'
import { useEffect, useState } from 'react';
// import LeadDetailsPage from '../../components/Leads/LeadDetails';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import { Eye, Pencil, UserPlus, Loader2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { fetchConvertedLeads, fetchExpiredLeads, fetchNewLeads, fetchRejectedLeads, fetchUntouchedLeads, fetchWorkingLeads } from '@/store/slices/leadSlice';
import { formatIndianBudget, formatDateTime } from '@/helpers';
import { leadSources } from '@/constants/leadmanagement';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import { getProducts } from '@/store/slices/productSlice';

interface FetchLeadsPayload {
  page: number;
  limit: number;
  search?: string;
  bid: string;
}

// type LeadFetchAction = (
//   payload: FetchLeadsPayload | undefined
// ) => ReturnType<typeof fetchNewLeads>;

interface Lead {
  id: string;
  name: string;
  leadId: string;
  email: string;
  phone: string;
  property: string;
  propertyId: string;
  createdAt: string;
  budget: string;
  assignedTo: string;
  assignedDate?: string;
}

interface Stats {
  total: number;
  fresh: number;
  following: number;
  interested: number;
  hot: number;
}

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
const LeadsDashboard = ({ type }: { type: string }) => {

  // const matched = allProps.find(obj => obj.type === type) ?? {
  //   type,
  //   title: "",
  //   viewLeadBaseUrl: "",
  //   editLeadBaseUrl: "",
  //   addLeadBaseUrl: ""
  // };
  // const { title, viewLeadBaseUrl, editLeadBaseUrl, addLeadBaseUrl } = matched;


  const dispatch = useAppDispatch()
  const { products, loading, error, pagination } = useAppSelector(state => state.productReducer)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  // const [showFilters, setShowFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  // const [loadingLeads, setLoadingLeads] = useState<boolean>(true)

  // const stats: Stats = {
  //   total: 82,
  //   fresh: 40,
  //   following: 19,
  //   interested: 15,
  //   hot: 8
  // };

  // const allLeads: Lead[] = Array.from({ length: 50 }, (_, i) => {
  //     const baseLeads = [
  //         {
  //             name: 'Rajesh Kumar',
  //             email: 'rajesh.kumar@gmail.com',
  //             property: 'DLF Avenue',
  //             assignedTo: 'Brijesh Kumar',
  //             assignedDate: ''
  //         },
  //         {
  //             name: 'Shagun Sharma',
  //             email: 'sharma2shagun@gmail.com',
  //             property: '3BHK Apartment in Whitefield',
  //             assignedTo: '',
  //             assignedDate: ''
  //         },
  //         {
  //             name: 'Ishan Duggal',
  //             email: 'ishanduggal@gmail.com',
  //             property: 'Villa in Electronic City',
  //             assignedTo: 'Abhi Bhardwaj',
  //             assignedDate: '12-12-2025'
  //         },
  //         {
  //             name: 'Shubham Singh',
  //             email: 'singhshubham@gmail.com',
  //             property: '3BHK Apartment in Whitefield',
  //             assignedTo: 'Sanju',
  //             assignedDate: '12-12-2025'
  //         },
  //         {
  //             name: 'Shantanu Jain',
  //             email: 'shantanujain@gmail.com',
  //             property: '3BHK Apartment in Whitefield',
  //             assignedTo: 'Unassigned',
  //             assignedDate: ''
  //         }
  //     ];

  //     const baseLead = baseLeads[i % baseLeads.length];
  //     return {
  //         id: `${i + 1}`,
  //         name: baseLead.name,
  //         leadId: `LD${String(i + 1).padStart(3, '0')}`,
  //         email: baseLead.email,
  //         phone: '9876xxxxxx',
  //         property: baseLead.property,
  //         propertyId: 'DL1234',
  //         createdAt: '12-07-2025\n10:25 AM',
  //         budget: '₹80L-₹1Cr',
  //         assignedTo: baseLead.assignedTo,
  //         assignedDate: baseLead.assignedDate
  //     };
  // });

  // const toggleSelectAll = () => {
  //   if (selectedLeads.length === paginatedLeads.length) {
  //     setSelectedLeads([]);
  //   } else {
  //     setSelectedLeads(paginatedLeads.map(lead => lead.id));
  //   }
  // };

  // const toggleSelectLead = (id: string) => {
  //   setSelectedLeads(prev =>
  //     prev.includes(id) ? prev.filter(leadId => leadId !== id) : [...prev, id]
  //   );
  // };

  // const handleBulkUpload = () => {
  //   alert('Bulk Upload functionality');
  // };

  // const handleAddLead = () => {
  //     alert('Add New Lead functionality');
  // };

  // const handleEditLead = (leadId: string) => {
  //     console.log('Edit lead:', leadId);
  //     alert(`Edit lead ${leadId}`);
  // };

  // const handleViewLead = (leadId: string) => {
  //     console.log('View lead:', leadId);
  //     alert(`View lead ${leadId}`);
  // };

  // const handleAssignLead = (leadId: string) => {
  //     console.log('Assign lead:', leadId);
  //     alert(`Assign lead ${leadId}`);
  // };

  // const handleExport = () => {
  //   alert('Export leads functionality');
  // };

  // const filteredLeads = products.filter(lead =>
  //   lead.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // Pagination calculations
  // const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const paginatedLeads = filteredLeads.slice(startIndex, endIndex);

  // const currentPage = pagination.page;
  // const totalPages = pagination.totalPages;
  // const itemsPerPage = pagination.limit;
  // const totalItems = pagination.total;

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


  const handleAssignLeads = () => {
    console.log(selectedLeads)
  }
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
    dispatch(getProducts({ limit: itemsPerPage, page: currentPage, search: debouncedSearch }))
  }, [currentPage, itemsPerPage, debouncedSearch, type]);


  console.log("products : ", products)
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">{"All Products"}</h1>
              <p className="text-gray-600 text-sm">Manage your products</p>
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
              <Link
                href={`/admin/product-management/add`}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-sm font-medium">Add Product</span>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-600">Total products</span>
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
                  placeholder="Search product by Product ID or Name..."
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
            Showing {startIndex + 1}-{Math.min(endIndex, pagination.total)} of {pagination.total} Products
          </p>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-visible">
            <div className="overflow-x-visible">
              <table className="w-full">
                <thead className="bg-gray-50 border border-gray-300 shadow-sm">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Product Name</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Categories</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Form</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Application Usage</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ?
                    <tr>
                      <td colSpan={8} className="py-16 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Loader2 className="animate-spin text-blue-600" size={40} />
                          <p className="text-gray-500 font-medium">Loading products...</p>
                        </div>
                      </td>
                    </tr>
                    :
                    products.length == 0 ?
                      <tr>
                        <td colSpan={8} className="py-16 text-center">
                          <div className="flex flex-col items-center justify-center">
                            <p className="text-black font-medium">No Product Found!</p>
                          </div>
                        </td>
                      </tr>
                      :
                      products.map((lead, i) => {
                        return (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-4 py-4">
                              <p className="font-medium text-sm">{lead.name || "-"}</p>
                            </td>
                            <td className="px-4 py-4">
                              <div className="text-sm">
                                <p className="text-gray-700">{lead.categories.map(c => c.name).join(' | ')}</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <div>
                                <p className="font-normal text-sm">{lead.form || "-"}</p>
                              </div>
                            </td>
                            <td className="px-4 py-4">
                              <p className="font-normal text-sm">{lead.applicationUsage || "-"}</p>
                            </td>
                            <td className="px-4 py-4">
                              <div className="relative">
                                <button
                                  onClick={() => setActiveDropdown(activeDropdown === lead.slug ? null : lead.slug)}
                                  className="p-1 hover:bg-gray-100 rounded"
                                >
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                  </svg>
                                </button>
                                {activeDropdown === lead.slug && (
                                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                    <Link
                                      href={`/admin/product-management/edit/${lead._id}`}
                                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                                    >
                                      <Pencil size={16} />
                                      Edit Product
                                    </Link>
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
              !loading && products?.length > 0 &&
              <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Rows per page:</span>
                  <select
                    value={pagination.limit}
                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
                            ? 'bg-blue-600 text-white'
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadsDashboard;