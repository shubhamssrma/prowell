// "use client";

// import { Mail, Phone, User, MessageSquare } from "lucide-react";

// interface InputProps {
//   label: string;
//   type?: string;
//   placeholder: string;
//   icon: React.ReactNode;
// }

// const InputField = ({ label, type = "text", placeholder, icon }: InputProps) => (
//   <div className="space-y-1">
//     <label className="text-sm font-medium text-green-800">{label}</label>
//     <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 focus-within:border-green-500">
//       <span className="text-cyan-600">{icon}</span>
//       <input
//         type={type}
//         placeholder={placeholder}
//         className="w-full bg-transparent outline-none text-sm"
//       />
//     </div>
//   </div>
// );

// export default function ContactUsRedesign() {
//   return (
//     <section className="bg-gradient-to-b from-white via-cyan-50 to-green-50 py-20 px-4">
//       <div className="max-w-7xl mx-auto space-y-24">
//         {/* Distributor & Dealer */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Info */}
//           <div>
//             <p className="tracking-widest text-xs text-gray-400 mb-2">CONTACT NOW</p>
//             <h2 className="text-3xl font-bold text-green-700 mb-6">
//               Registered Office
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Flat No. 405, GH-3, Sector 21D,<br />
//               Faridabad, Haryana – 121001
//             </p>
//           </div>

//           {/* Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-xl font-semibold text-green-800 mb-6">
//               Distributor & Dealer Inquiries
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-5">
//               <InputField label="Full Name" placeholder="Your Name" icon={<User size={18} />} />
//               <InputField
//                 label="Email Address"
//                 type="email"
//                 placeholder="you@email.com"
//                 icon={<Mail size={18} />}
//               />
//               <InputField
//                 label="Phone Number"
//                 type="tel"
//                 placeholder="+91 XXXXX XXXXX"
//                 icon={<Phone size={18} />}
//               />
//               <InputField label="Subject" placeholder="Inquiry Subject" icon={<MessageSquare size={18} />} />
//             </div>

//             <div className="mt-5">
//               <label className="text-sm font-medium text-green-800">Message</label>
//               <textarea
//                 placeholder="Write your message..."
//                 className="mt-1 w-full rounded-xl border border-cyan-100 bg-white px-4 py-3 h-32 resize-none outline-none focus:border-green-500"
//               />
//             </div>

//             <button className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
//               Send Message
//             </button>
//           </div>
//         </div>

//         {/* Other Inquiries */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h3 className="text-xl font-semibold text-green-800 mb-6">
//               Other Inquiries
//             </h3>

//             <div className="grid sm:grid-cols-2 gap-5">
//               <InputField label="Full Name" placeholder="Your Name" icon={<User size={18} />} />
//               <InputField
//                 label="Email Address"
//                 type="email"
//                 placeholder="you@email.com"
//                 icon={<Mail size={18} />}
//               />
//               <InputField
//                 label="Phone Number"
//                 type="tel"
//                 placeholder="+91 XXXXX XXXXX"
//                 icon={<Phone size={18} />}
//               />
//               <InputField label="Subject" placeholder="Inquiry Subject" icon={<MessageSquare size={18} />} />
//             </div>

//             <div className="mt-5">
//               <label className="text-sm font-medium text-green-800">Message</label>
//               <textarea
//                 placeholder="Write your message..."
//                 className="mt-1 w-full rounded-xl border border-cyan-100 bg-white px-4 py-3 h-32 resize-none outline-none focus:border-green-500"
//               />
//             </div>

//             <button className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
//               Send Message
//             </button>
//           </div>

//           {/* Info */}
//           <div>
//             <p className="tracking-widest text-xs text-gray-400 mb-2">CONTACT NOW</p>
//             <h2 className="text-3xl font-bold text-green-700 mb-6">Zonal Office</h2>
//             <p className="text-gray-600 leading-relaxed">
//               2/153 & 47 SF No. 17/3B, Avadi Main Road,<br />
//               Senneerkuppam, Chennai, Tiruvallur,<br />
//               Tamil Nadu – 600056
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Send, Loader2 } from 'lucide-react';
import CTA from '@/components/ui/CTA';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { contactUser } from '@/store/slices/authSlice';
import { toast } from 'react-toastify';

export default function ContactUsPage() {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.auth)
  const [activeTab, setActiveTab] = useState<'distributor' | 'other'>('distributor');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: "+91",
    contact: '',
    message: ''
  });

  const handleSubmit = async () => {
    console.log('Form submitted:', { ...formData, inquiryType: activeTab });
    // alert(`${activeTab === 'distributor' ? 'Distributor/Dealer' : 'Other'} inquiry submitted successfully!`);
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   contact: '',
    //   message: ''
    // });

    let payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contactNumber: formData.countryCode + formData.contact,
      message: formData.message,
      inquiryType: activeTab === 'distributor' ? '1' : '2',
      officeType: activeTab == "distributor" ? "Registered Office" : "Zonal Office"
    }

    const resp = await dispatch(contactUser(payload)).unwrap()
    console.log(resp)
    if (resp.success) {
      toast.success(resp.message)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '',
        contact: '',
        message: ''
      });
    } else {
      toast.error(resp.message)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center pt-12 mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
              Contact Us
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help! Choose your inquiry type and get in touch with the right team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Tab Selector */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('distributor')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${activeTab === 'distributor'
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Distributor & Dealer Inquiries
                </button>
                <button
                  onClick={() => setActiveTab('other')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${activeTab === 'other'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  Other Inquiries
                </button>
              </div>

              {/* Office Info Banner */}
              <div className={`mb-8 p-4 rounded-xl border-2 ${activeTab === 'distributor'
                ? 'bg-cyan-50 border-cyan-200'
                : 'bg-green-50 border-green-200'
                }`}>
                <div className="flex items-start gap-3">
                  <MapPin className={activeTab === 'distributor' ? 'text-cyan-600' : 'text-green-600'} size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {activeTab === 'distributor' ? 'Registered Office' : 'Zonal Office'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Your inquiry will be directed to our {activeTab === 'distributor' ? 'Registered Office' : 'Zonal Office'} team
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <div className="flex gap-2">
                      <select value={formData.countryCode} name="countryCode" onChange={handleChange} className="px-3 py-3 rounded-lg border border-gray-300 bg-white outline-none">
                        <option value="+91">+91</option>
                        <option value="+971">+971</option>
                        <option value="+1">+1</option>
                      </select>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                {/* <CTA
                  href={slide.href}
                  title={slide.buttonText}
                  showArrow={true}
                /> */}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'distributor'
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                    }`}
                >
                  {
                    loading ?
                      <>
                        <Loader2 className='animate-spin' size={20} />
                        Sending...
                      </>
                      :
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Registered Office */}
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Registered Office</h3>
              <p className="text-cyan-100 text-sm mb-6">
                For Distributor & Dealer Inquiries
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Phone size={20} />
                  <div>
                    <p className="text-xs text-cyan-100">Hotline</p>
                    <p className="font-semibold">+91 96506 68744</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <MessageSquare size={20} />
                  <div>
                    <p className="text-xs text-cyan-100">SMS / WhatsApp</p>
                    <p className="font-semibold">+91 96506 68744</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-cyan-100">Email</p>
                    <p className="font-semibold text-sm">info@prowell.asia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zonal Office */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Zonal Office</h3>
              <p className="text-green-100 text-sm mb-6">
                For Other Inquiries
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Phone size={20} />
                  <div>
                    <p className="text-xs text-green-100">Hotline</p>
                    <p className="font-semibold">+91 96506 68744</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <MessageSquare size={20} />
                  <div>
                    <p className="text-xs text-green-100">SMS / WhatsApp</p>
                    <p className="font-semibold">+91 96506 68744</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-green-100">Email</p>
                    <p className="font-semibold text-sm">info@prowell.asia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Map Section */}
        <div className="mt-12">
          <div className="text-center pt-12 mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-600 to-teal-600">
                Our Office Locations
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit us at our offices across the United Arab Emirates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Registered Office Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-xl font-bold">Registered Office</h3>
                </div>
                <p className="text-cyan-100 text-sm">
                  For Distributor & Dealer Inquiries
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.951187631577!2d77.2899573!3d28.420729700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdddef85a6389%3A0x1c3b10b2c7026cec!2sShubh%20Apartments%20Sector%2021D!5e0!3m2!1sen!2sin!4v1766511381112!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Registered Office Location"
                />
              </div>

              <div className="p-6 bg-cyan-50 h-full">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-sm text-gray-600">Flat No. 405, GH -3, Sector 21D, Faridabad, Haryana -121001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-sm text-gray-600">+91 96506 68744</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">info@prowell.asia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zonal Office Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-xl font-bold">Zonal Office</h3>
                </div>
                <p className="text-green-100 text-sm">
                  For Other Inquiries
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.610168309166!2d80.1127486!3d13.060467799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610025fc1a57%3A0xbee61ebf46308e13!2sProwell%20life%20sciences%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1766511515538!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zonal Office Location"
                />
              </div>

              <div className="p-6 bg-green-50">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-sm text-gray-600">2/153 and 47 SF No. 17/3B, Avadi Main Road, Senneerkuppam, Chennai, Tiruvallur, Tamil Nadu - 600056</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-sm text-gray-600">+91 96506 68744</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">info@prowell.asia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}