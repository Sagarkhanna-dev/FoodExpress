export default function HelpPage() {
    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order in real-time from the 'My Orders' section in the app or website."
        },
        {
            question: "What is your delivery time?",
            answer: "Delivery time varies between 25-45 minutes depending on restaurant preparation time and distance."
        },
        {
            question: "How can I cancel my order?",
            answer: "You can cancel your order within 1 minute of placing it from the 'My Orders' section."
        },
        {
            question: "Do you have customer support?",
            answer: "Yes, our 24/7 customer support is available at support@swiggy.com or call 1800-123-4567."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Help & Support</h1>
                    <p className="text-gray-600 mb-8">We're here to help you with any questions or issues.</p>
                    
                    <div className="grid gap-6 mb-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="font-semibold text-gray-800 text-lg mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-600 text-lg mb-2">📞 Call Us</h3>
                            <p className="text-blue-700">1800-123-4567</p>
                            <p className="text-blue-600 text-sm">24/7 Customer Support</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-600 text-lg mb-2">✉️ Email Us</h3>
                            <p className="text-green-700">support@swiggy.com</p>
                            <p className="text-green-600 text-sm">We reply within 2 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}