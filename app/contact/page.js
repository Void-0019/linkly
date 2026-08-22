import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    const contacts = [
        {
            name: "Instagram",
            description: "Follow along and stay connected.",
            icon: "/instagram.png",
            href: "https://instagram.com/void_0019",
        },
        {
            name: "LinkedIn",
            description: "Let's connect professionally.",
            icon: "/linkedin.webp",
            href: "https://tinyurl.com/bd62x73c",
        },
        {
            name: "GitHub",
            description: "Explore my projects and code.",
            icon: "/github.png",
            href: "https://github.com/void-0019",
        },
        {
            name: "Email",
            description: "Have a question? Send me an email.",
            icon: "/email.png",
            href: "mailto:rrishabhsingh94@email.com",
        },
    ];

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-purple-50">
            <section className="max-w-4xl mx-auto px-6 py-16">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-purple-600 font-semibold text-sm tracking-wide mb-3">
                        GET IN TOUCH
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Contact <span className="text-purple-600">Us</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Have a question, suggestion, or just want to say hello?
                        Feel free to reach out through any of the platforms below.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-5">
                    {contacts.map((contact) => (
                        <Link
                            key={contact.name}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white border border-purple-100 rounded-2xl p-6
                            flex items-center gap-5 shadow-sm
                            hover:shadow-md hover:border-purple-200
                            hover:-translate-y-1 transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-100
                                flex items-center justify-center
                                group-hover:bg-purple-600
                                group-hover:scale-105 transition-all"
                            >
                                <Image
                                    src={contact.icon}
                                    alt={`${contact.name} icon`}
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-gray-900">
                                    {contact.name}
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    {contact.description}
                                </p>
                            </div>

                            {/* Arrow */}
                            <span className="text-gray-400 group-hover:text-purple-600
                                group-hover:translate-x-1 transition-all text-xl"
                            >
                                →
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        I usually respond as soon as possible.
                    </p>
                </div>

            </section>
        </main>
    );
};

export default Contact;