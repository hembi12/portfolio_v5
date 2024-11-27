"use client";

const Contact = ({ title }: { title: string }) => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">{title}</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    Feel free to reach out to me for any inquiries, collaborations, or opportunities.
                </p>
            </div>

            {/* Formulario */}
            <form className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <div className="flex flex-col gap-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-indigo-800 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    {/* Correo */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-indigo-800 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-indigo-800 mb-2">
                            Subject
                        </label>
                        <select
                            id="subject"
                            className="w-full px-4 py-2 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        >
                            <option value="" disabled selected>
                                Select a subject
                            </option>
                            <option value="Project Collaboration">Project Collaboration</option>
                            <option value="Freelance Work">Freelance Work</option>
                            <option value="Job Opportunity">Job Opportunity</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                    </div>
                    {/* Mensaje */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-indigo-800 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-2 border border-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your message here..."
                            required
                        ></textarea>
                    </div>
                    {/* Botón */}
                    <button
                        type="submit"
                        className="px-6 py-3 bg-indigo-700 text-white font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:shadow-2xl transition-all duration-200"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;