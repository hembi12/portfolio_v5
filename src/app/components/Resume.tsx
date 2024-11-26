"use client";

const Resume = () => {
    return (
        <section
            id="resume"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-100 text-gray-900 px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                {/* Título */}
                <h2 className="text-4xl font-bold text-indigo-900 mb-6">My Resume</h2>
                {/* Descripción */}
                <p className="text-lg leading-8 mb-8">
                    Explore my detailed professional journey and educational background in my resume.
                </p>
                {/* Botones */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <a
                        href="/Hector_Martil_CV.pdf" // Cambiar por el enlace correcto
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-indigo-700 text-white font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:shadow-2xl transition-all duration-200"
                    >
                        View
                    </a>
                    <a
                        href="/Hector_Martil_CV.pdf" // Cambiar por el enlace correcto
                        download
                        className="px-6 py-3 border-2 border-indigo-700 text-indigo-700 font-bold rounded-full shadow-lg hover:bg-indigo-500 hover:border-indigo-500 hover:text-white hover:shadow-2xl transition-all duration-200"
                    >
                        Download
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;