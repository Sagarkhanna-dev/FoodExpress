export default function CorporatePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Swiggy Corporate</h1>
                    <div className="space-y-4 text-gray-600">
                        <p>Welcome to Swiggy Corporate - The food delivery solution for your organization.</p>
                        <p>We help companies provide delicious meals to their employees with our corporate food solutions.</p>
                        
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                <h3 className="font-semibold text-orange-600 text-lg mb-2">Employee Meal Plans</h3>
                                <p>Customizable meal plans for your workforce with flexible options.</p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                <h3 className="font-semibold text-orange-600 text-lg mb-2">Corporate Catering</h3>
                                <p>Bulk orders for meetings, events, and office parties.</p>
                            </div>
                        </div>
                        
                        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Contact Corporate Sales</h3>
                            <p>Email: corporate@swiggy.com</p>
                            <p>Phone: 1800-123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}