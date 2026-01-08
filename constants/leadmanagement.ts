type LeadSource =
    | "website"
    | "landingpage"
    | "meta"
    | "google"
    | "manual"
    | "chatbot";

type LeadPriority =
    | "hot"
    | "warm"
    | "cold"
    | "followup"
    | "lukewarm";

type LeadStatus =
    | "new"
    | "assigned"
    | "untouched"
    | "rejected"
    | "expired"
    | "converted";

type ContactStatus =
    | "connected"
    | "not-connected"
    | "busy"
    | "voicemail"
    | "no-answer"
    | "call-back-requested"
    | 'wrong-number'
    | 'number-not-in-service'
    | 'switched-off'
    | 'email-sent'
    | 'sms-sent'
    | 'whatsapp-sent'
    | 'whatsapp-replied'

export const LEAD_PRIORITY_COLORS: Record<string, string> = {
    hot: "bg-red-500",
    warm: "bg-orange-400",
    cold: "bg-blue-500",
    followup: "bg-yellow-500",
    dead: "bg-gray-500",
};

export const leadSources: { value: LeadSource; label: string }[] = [
    { value: "website", label: "Website" },
    { value: "landingpage", label: "Landing Page" },
    { value: "meta", label: "Meta Ads" },
    { value: "google", label: "Google Ads" },
    { value: "manual", label: "Manual" },
    { value: "chatbot", label: "Chatbot" },
];

export const leadPriorities: { value: LeadPriority; label: string }[] = [
    { value: "hot", label: "Hot" },
    { value: "warm", label: "Warm" },
    { value: "cold", label: "Cold" },
    { value: "lukewarm", label: "Lukewarm" },
    // { value: "followup", label: "Followup" },
    // { value: "dead", label: "Dead" },
]


export const leadStatuses: { value: LeadStatus; label: string }[] = [
    { value: "new", label: "New" },
    { value: "assigned", label: "Assigned" },
    { value: "untouched", label: "Untouched" },
    { value: "rejected", label: "Rejected" },
    { value: "expired", label: "Expired" },
    { value: "converted", label: "Converted" },
];

export const leadContactStatus: { value: { status: { value: string, label: string }[], value: string }; label: string }[] = [
    {
        value: {
            status: [
                { value: 'contacted', label: 'Contacted' },
                { value: 'converted', label: 'Converted' },
                { value: 'interested', label: 'Interested' },
                { value: 'not-interested', label: 'Not Interested' },
                { value: 'requirements-discussed', label: 'Requirements Discussed' },
                { value: 'property-shared', label: 'Property Details Shared' },
                { value: 'site-visit-scheduled', label: 'Site Visit Scheduled' },
                { value: 'callback-scheduled', label: 'Callback Scheduled' },
                { value: 'follow-up-required', label: 'Follow Up Required' },
                { value: 'negotiation', label: 'Price Negotiation' },
                { value: 'token-discussion', label: 'Token/Booking Discussion' },
                { value: 'email-sent', label: 'Email Sent' },
                { value: 'sms-sent', label: 'SMS Sent' },
                { value: 'whatsapp-sent', label: 'WhatsApp Sent' },
            ], value: 'connected'
        },
        label: 'Connected'
    },
    {
        value: {
            status: [
                { value: 'attempting-contact', label: 'Attempting Contact' },
                { value: 'follow-up-required', label: 'Follow Up Required' },
                { value: 'on-hold', label: 'On Hold' },
                { value: 'callback-scheduled', label: 'Callback Scheduled' },
                { value: 'voicemail-left', label: 'Voicemail Left' },
                { value: 'busy', label: 'Busy' },
                { value: 'switched-off', label: 'Switched Off' },
                { value: 'dead-lead', label: 'Dead Lead' },
            ],
            value: 'not-connected'
        }, label: 'Not Connected'
    },
];

export const leadRemarkStatuses: { value: string; label: string }[] = [
    { value: 'new', label: 'New Lead' },
    { value: 'site-visit-completed', label: 'Site Visit Completed' },
    { value: 'second-visit-scheduled', label: 'Second Visit Scheduled' },
    { value: 'interested-after-visit', label: 'Interested After Visit' },
    { value: 'not-interested-after-visit', label: 'Not Interested After Visit' },
    { value: 'documentation-initiated', label: 'Documentation Initiated' },
    { value: 'loan-application-submitted', label: 'Loan Application Submitted' },
    { value: 'loan-approved', label: 'Loan Approved' },
    { value: 'loan-rejected', label: 'Loan Rejected' },
    { value: 'token-paid', label: 'Token Amount Paid' },
    { value: 'agreement-signed', label: 'Agreement Signed' },
    { value: 'registration-pending', label: 'Registration Pending' },
    { value: 'deal-closed', label: 'Deal Closed' },
    { value: 'lost-to-competitor', label: 'Lost to Competitor' },
    { value: 'budget-mismatch', label: 'Budget Mismatch' },
    { value: 'location-not-suitable', label: 'Location Not Suitable' },
    { value: 'property-sold-out', label: 'Property Sold Out' },
];
