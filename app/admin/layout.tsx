'use client'

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { loggedInUser } = useAppSelector(state => state.auth)
    const router = useRouter()
    useEffect(() => {
        if (!loggedInUser.token) {
            router.push('/login')
        }
    }, [])
    // console.log(loggedInUser)
    return (
        <div className="flex h-screen bg-gray-50">
            <ToastContainer position="top-right" autoClose={3000} />
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <AdminHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout