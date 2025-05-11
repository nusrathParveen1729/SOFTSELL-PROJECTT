import { UploadIcon, DollarSignIcon, ClipboardCheckIcon } from 'lucide-react'; // or any icon set
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="bg-gray-100 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Step 1 */}
                    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
                        <div className="flex justify-center mb-4 text-blue-600">
                            <UploadIcon size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Submit Your Unused Licenses</h3>
                        <p className="text-gray-600">Easily upload your unused software licenses through our secure platform.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
                        <div className="flex justify-center mb-4 text-indigo-600">
                            <ClipboardCheckIcon size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Get Instant License Assessment</h3>
                        <p className="text-gray-600">We’ll evaluate your licenses and provide a fair market value estimate based on condition and demand.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
                        <div className="flex justify-center mb-4 text-green-600">
                            <DollarSignIcon size={40} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Receive Secure Payment</h3>
                        <p className="text-gray-600">Once your licenses are verified and valued, we’ll send you a payment swiftly and securely.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
