import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PRODUCTS = [
    {
        id: 'academic',
        title: 'Academic Management System',
        description: 'A comprehensive solution to streamline academic operations, from curriculum planning to student performance analysis.',
        image: 'https://images.unsplash.com/photo-1546933099-07f905c11f7c?q=80&w=2574&auto=format&fit=crop', // Placeholder or reusable abstract image
    },
    {
        id: 'admission',
        title: 'Admission Management System',
        description: 'Simplify the entire admission lifecycle with automated workflows, online applications, and real-time tracking.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 'fine-arts',
        title: 'Fine Arts Management System',
        description: 'Specialized platform for managing fine arts institutions, including event scheduling, portfolio showcases, and talent tracking.',
        image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=2572&auto=format&fit=crop',
    },
];

const ProductsPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 relative px-6 text-white min-h-screen">
            {/* 🌌 Hero Section */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-extrabold gradient-text mb-6 drop-shadow-lg"
                >
                    Our Products
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400"
                >
                    Innovative platforms designed to power educational institutions and creative organizations.
                </motion.p>
            </div>

            {/* 🛒 Products Grid */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PRODUCTS.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="group relative bg-[#1b1b22]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-2xl"
                    >
                        {/* Image Area */}
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b22] to-transparent z-10"></div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content Area */}
                        <div className="p-8 relative z-20 -mt-10">
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors"
                            >
                                Request Demo <ExternalLink size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
