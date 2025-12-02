    import { useState } from "react";
    import { Mail, Linkedin, MapPin, Phone, Download, X, ExternalLink, Send, User, MessageSquare } from "lucide-react";
    import emailjs from '@emailjs/browser';

    const Contact = () => {
        const [showContactForm, setShowContactForm] = useState(false);
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = useState(false);

        const [submitStatus, setSubmitStatus] = useState('');

        // Google Drive link for CV
        const cvDriveUrl = "https://drive.google.com/file/d/1dTILEMbeJedoZxe2IPEduCZgxxzf3G9K/view?usp=sharing";

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus('');

            try {
                const emailParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                };

                const serviceID = 'service_ohbtevn';        // Your Service ID
                const templateID = 'template_c0jses6';     // Your Template ID
                const publicKey = 'kbzUKPo7e7h_-tPis';    // Your Public API Key

                const response = await emailjs.send(serviceID, templateID, emailParams, publicKey);
                console.log('EmailJS response:', response);

                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                setTimeout(() => {
                    setShowContactForm(false);
                    setSubmitStatus('');
                }, 3000);

            } catch (error) {
                console.error('EmailJS error:', error);
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        };


        const contactInfo = [
            {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "ivineshaji123@gmail.com",
                href: "mailto:ivineshaji123@gmail.com",
                color: "from-red-400 to-red-600",
                description: "Drop me a line anytime"
            },
            {
                icon: <Linkedin className="w-6 h-6" />,
                label: "LinkedIn",
                value: "linkedin.com/in/ivine-shaji-kakkanat-88bb06251/",
                href: "https://www.linkedin.com/in/ivine-shaji-kakkanat-88bb06251/",
                color: "from-blue-400 to-blue-600",
                description: "Let's connect professionally"
            },
            {
                icon: <Phone className="w-6 h-6" />,
                label: "Phone",
                value: "+91 8592050898",
                href: "tel:+918592050898",
                color: "from-green-400 to-green-600",
                description: "Available for calls"
            },
            {
                icon: <MapPin className="w-6 h-6" />,
                label: "Location",
                value: "VIT Vellore, Tamil Nadu, India",
                href: "#map-section",
                color: "from-purple-400 to-purple-600",
                description: "Currently studying at"
            }
        ];

        return (
            <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen overflow-x-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities, collaborations, and innovative projects in cybersecurity and software development.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.href}
                                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                onClick={(e) => {
                                    if (contact.href.startsWith('#')) {
                                        e.preventDefault();
                                        const element = document.querySelector(contact.href);
                                        if (element) {
                                            element.scrollIntoView({ 
                                                behavior: 'smooth',
                                                block: 'center'
                                            });
                                        }
                                    }
                                }}
                                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                        {contact.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                            {contact.label}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-2 break-all">
                                            {contact.value}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {contact.description}
                                        </p>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CV Section */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-gray-700/50 shadow-lg mb-16">
                        <div className="text-center">
                            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
                                <Download className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                My Resume
                            </h2>
                            <div className="flex justify-center">
                                <a
                                    href={cvDriveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                                >
                                    <span className="text-xl">📁</span>
                                    <span>View Resume & Portfolio</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div id="map-section" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-gray-700/50 shadow-lg">
                        <div className="text-center mb-8">
                            <div className="inline-block p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Find Me Here
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Currently studying at VIT Vellore, Tamil Nadu, India
                            </p>
                        </div>
                        
                        {/* Map Container */}
                        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5649302089795!2d79.15548431482213!3d12.969476990859353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad61fb35e6b2c7%3A0x1c5c52c5b69b6c0!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1635789123456!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
                            <p className="text-blue-100 mb-6">
                                Whether it's a cybersecurity project, software development collaboration, or just a friendly chat about tech, I'm here for it!
                            </p>
                            <button
                                onClick={() => setShowContactForm(true)}
                                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Send Me a Message</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Form Modal */}
                {showContactForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send Message</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Get in touch with me directly</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowContactForm(false)}
                                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            
                            {/* Modal Content */}
                            <div className="p-6">
                                {submitStatus === 'success' ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out! I'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                <User className="w-4 h-4 inline mr-2" />
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                <Mail className="w-4 h-4 inline mr-2" />
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        {/* Subject Field */}
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Tell me about your project, question, or just say hi!"
                                            ></textarea>
                                        </div>

                                        {/* Error Message */}
                                        {submitStatus === 'error' && (
                                            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-4">
                                                <p className="text-red-600 dark:text-red-400 text-sm">
                                                    Sorry, there was an error sending your message. Please try again or contact me directly at ivineshaji@gmail.com
                                                </p>
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <div className="flex justify-end space-x-4">
                                            <button
                                                type="button"
                                                onClick={() => setShowContactForm(false)}
                                                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center space-x-2 ${
                                                    isSubmitting 
                                                        ? 'bg-gray-400 cursor-not-allowed' 
                                                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                                                }`}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Sending...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        <span>Send Message</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            
            </section>
        );
    };

    export default Contact;
