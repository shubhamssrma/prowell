export const formatIndianBudget = (value: number) => {
    if (value >= 10000000) {
        return `₹${(value / 10000000).toFixed(value % 10000000 === 0 ? 0 : 2)}Cr`;
    } else if (value >= 100000) {
        return `₹${(value / 100000).toFixed(value % 100000 === 0 ? 0 : 2)}L`;
    }
    return `₹${value}`;
};

export const formatDateTime = (timestamp?: string) => {
    if (timestamp) {
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
        const year = date.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;

        const formattedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        return { formattedDate, formattedTime };
    }

    return null
}


// export const leadStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//         case 'progress': {
//             return 'bg-blue-500'        // Progress → active / in motion
//         }
//         case 'connected': {
//             return 'bg-green-600'       // Connected → successful
//         }
//         case 'hot': {
//             return 'bg-red-600'         // Hot lead → urgent
//         }
//         case 'contacted': {
//             return 'bg-yellow-500'      // Contacted → attention
//         }
//         case 'interested': {
//             return 'bg-emerald-500'     // Interested → positive but not closed
//         }
//         default: {
//             return 'bg-gray-300'        // Default → neutral
//         }
//     }
// }

export const contactStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
        case 'connected':
            return 'bg-green-600'     // Positive / engaged

        case 'not-connected':
            return 'bg-gray-400'      // Neutral / unreachable

        case 'no-answer':
            return 'bg-yellow-500'    // Waiting / attention

        case 'voicemail':
            return 'bg-indigo-500'    // Passive response

        case 'busy':
            return 'bg-orange-500'    // Temporarily unavailable

        case 'call-back-requested':
            return 'bg-cyan-500'      // Action required

        case 'wrong-number':
        case 'number-not-in-service':
            return 'bg-red-700'       // Invalid / dead

        case 'switched-off':
            return 'bg-slate-500'     // Temporarily unreachable

        case 'email-sent':
        case 'sms-sent':
        case 'whatsapp-sent':
            return 'bg-blue-500'      // Outreach done

        case 'whatsapp-replied':
            return 'bg-emerald-500'   // Engaged digitally

        default:
            return 'bg-gray-300'
    }
}


export const leadStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
        case 'hot':
        case 'interested':
            return 'bg-red-600'            // High intent

        case 'converted':
            return 'bg-green-700'          // Success

        case 'requirements-discussed':
        case 'property-shared':
            return 'bg-teal-500'           // Progressing

        case 'site-visit-scheduled':
            return 'bg-purple-600'         // Strong signal

        case 'negotiation':
        case 'warm':
            return 'bg-orange-600'         // Critical stage

        case 'token-discussion':
            return 'bg-pink-600'           // Almost closed

        case 'follow-up-required':
        case 'callback-scheduled':
            return 'bg-yellow-500'         // Action pending

        case 'attempting-contact':
            return 'bg-blue-400'           // In progress

        case 'on-hold':
        case 'cold':
            return 'bg-slate-400'          // Paused

        case 'not-interested':
        case "lukewarm":
            return 'bg-gray-500'           // Low intent

        case 'dead-lead':
            return 'bg-red-800'            // Closed / dead

        case 're-engaged':
            return 'bg-lime-600'           // Revival

        default:
            return 'bg-gray-300'
    }
}
