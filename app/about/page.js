import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-purple-50">
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-purple-600 font-semibold mb-3">
            ABOUT LINKLY
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Simple links.{" "}
            <span className="text-purple-600">Powerful sharing.</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Linkly is a simple and fast URL shortener built to turn long,
            complicated links into short and easy-to-share URLs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-purple-100">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-5">
              ⚡
            </div>
            <h2 className="text-xl font-bold mb-2">Fast & Simple</h2>
            <p className="text-gray-600 leading-relaxed">
              Create short URLs quickly without unnecessary steps or
              complicated settings.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-purple-100">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-5">
              🔗
            </div>
            <h2 className="text-xl font-bold mb-2">Easy to Share</h2>
            <p className="text-gray-600 leading-relaxed">
              Convert long URLs into clean, memorable links that are easy
              to share anywhere.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-purple-100">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-5">
              🛠️
            </div>
            <h2 className="text-xl font-bold mb-2">Built for Everyone</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're sharing links with friends or using them for
              your projects, Linkly keeps things straightforward.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-purple-700 rounded-3xl px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">
            Ready to shorten your links?
          </h2>

          <p className="text-purple-100 mb-7">
            Create a short and shareable URL in just a few seconds.
          </p>

          <Link
            href="/shorten"
            className="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition"
          >
            Get Started
          </Link>
        </div>

      </section>
    </main>
  );
};

export default About;
