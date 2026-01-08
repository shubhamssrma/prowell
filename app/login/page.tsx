'use client'
import { useState, FormEvent, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loginUser } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
// import { authService } from '../services/auth.service';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { loggedInUser } = useAppSelector(state => state.auth)

    useEffect(() => {
        if (loggedInUser.token) {
            router.push('/admin/dashboard')
        }
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        console.log(email, password)

        setIsLoading(true);

        try {

            const response = await dispatch(
                loginUser({ email, password })
            ).unwrap();

            if (response.success) {
                router.push('/admin/dashboard');
            }
            console.log(response)
        } catch (err: unknown) {
            const apiMessage =
                typeof err === 'object' && err !== null && 'response' in err && (err as any).response?.data?.message
                    ? (err as any).response.data.message
                    : err instanceof Error
                        ? err.message
                        : 'Unable to sign in';

            setError(apiMessage || 'Unable to sign in');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <img src={"/images/logo.png"} alt="Real1 Logo" className='w-70' />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-600 text-center mb-8">Sign in to your account</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                {/* <div className="mt-6 text-center text-sm text-gray-600">
          <p>Seeded credentials:</p>
          <p className="font-medium">admin@real1connect.com / Admin@123</p>
        </div> */}
            </div>
        </div>
    );
}