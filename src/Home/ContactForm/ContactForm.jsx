import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        licenseType: "",
        message: "",
        subscribe: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const licenseOptions = ["Windows", "Office 365", "Adobe", "Other"];

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please enter your name.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.company.trim()) newErrors.company = "Company name is required.";
        if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
        if (!formData.message.trim()) newErrors.message = "Please write a message.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            licenseType: "",
            message: "",
            subscribe: false,
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            alert("Thank you! Your message has been sent.");
            handleReset();
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-20">
            <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["name", "email", "phone", "company"].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-gray-700 mb-1 capitalize">
                                {field === "phone" ? "Phone Number" : field}
                            </label>
                            <input
                                required
                                id={field}
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                className="w-full border border-gray-300 rounded-md p-3"
                                value={formData[field]}
                                onChange={handleChange}
                            />
                            {errors[field] && (
                                <p className="text-red-500 text-sm">{errors[field]}</p>
                            )}
                        </div>
                    ))}
                    <div>
                        <label htmlFor="licenseType" className="block text-gray-700 mb-1">License Type</label>
                        <select
                            required
                            id="licenseType"
                            name="licenseType"
                            className="w-full border border-gray-300 rounded-md p-3"
                            value={formData.licenseType}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Type --</option>
                            {licenseOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        {errors.licenseType && (
                            <p className="text-red-500 text-sm">{errors.licenseType}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-md p-3"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            id="subscribe"
                            name="subscribe"
                            type="checkbox"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600"
                        />
                        <label htmlFor="subscribe" className="text-gray-700">
                            Subscribe to our newsletter
                        </label>
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 rounded-md font-semibold transition ${
                                isSubmitting
                                    ? "bg-gray-400 text-white"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                            }`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full py-3 rounded-md font-semibold border border-gray-300 hover:bg-gray-100"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
