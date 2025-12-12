import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ReservationForm {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    message:string;
    guests: number;
}

export default function ReservationPage() {
    const [form, setForm] = useState<ReservationForm>({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message:"",
        guests: 1,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: name === "guests" ? Number(value) : value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reservation submitted:", form);
        alert("✅ Your table has been reserved successfully!");
        setForm({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
           message:"",
            guests: 1,
        });
    };

    return (
        <>
        <Navigation/>
        <div className="min-h-screen bg-gradient-to-br bg-restaurant-darker flex items-center justify-center p-6 mt-24">
            <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
                <h1 className="text-3xl font-bold text-center  text-primary mb-6">
                    🍽️ Reserve Your Table
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            placeholder="+250 78 123 4567"
                        />
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Time</label>
                            <input
                                type="time"
                                name="time"
                                value={form.time}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Number of Guests
                        </label>
                        <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? "Person" : "People"}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">More Details</label>
                        <textarea
                            
                            name="Description"
                            value={form.message}
                           
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                            placeholder="Explain more details"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        Reserve Table
                    </button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}
