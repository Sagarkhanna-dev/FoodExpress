export default function OffersPage() {
    const offers = [
        {
            id: 1,
            title: "FLAT 50% OFF",
            description: "Up to ₹100 discount on your first order",
            code: "SWIGGY50",
            validUntil: "31 Dec 2024"
        },
        {
            id: 2,
            title: "FREE DELIVERY",
            description: "On orders above ₹299",
            code: "FREEDEL",
            validUntil: "15 Jan 2025"
        },
        {
            id: 3,
            title: "40% OFF",
            description: "On all restaurants in your area",
            code: "HUNGRY40",
            validUntil: "20 Dec 2024"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Today's Offers</h1>
                    <p className="text-gray-600 mb-8">Exclusive deals and discounts just for you!</p>
                    
                    <div className="grid gap-6">
                        {offers.map(offer => (
                            <div key={offer.id} className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-2xl mb-2">{offer.title}</h3>
                                        <p className="mb-2">{offer.description}</p>
                                        <p className="text-sm opacity-90">Use code: <span className="font-mono font-bold">{offer.code}</span></p>
                                    </div>
                                    <div className="text-right">
                                        <div className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                                            APPLY
                                        </div>
                                        <p className="text-xs mt-2 opacity-80">Valid until {offer.validUntil}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h3 className="font-semibold text-yellow-800 mb-2">💡 Pro Tip</h3>
                        <p className="text-yellow-700">Apply multiple offers to get maximum discount on your orders!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}