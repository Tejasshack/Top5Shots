"use client";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">About Top5Shots</h1>
      <p className="text-lg mb-6 text-center text-gray-600">
        Your daily dose of the world’s top 5 trending stories, updates, and recommendations—served fresh, fast, and factual.
      </p>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            <span className="font-semibold">Top5Shots</span> is a curated content platform built for the busy and the curious. We believe in delivering concise, powerful, and meaningful content in the form of top 5 lists—ranging from trending news, tech gadgets, entertainment buzz, to lifestyle tips.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            To simplify the overwhelming information flood by giving you only what truly matters. Each day, we research, refine, and present the top 5 most valuable shots of information across categories to keep you updated and ahead.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">What Makes Us Different</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Curated Quality:</strong> Every shot is researched, verified, and valuable.</li>
            <li><strong>Time-Saving:</strong> 5 shots a day is all you need to stay informed.</li>
            <li><strong>Visual + Verbal:</strong> We blend strong headlines with striking visuals.</li>
            <li><strong>Multi-Niche:</strong> News, Tech, Lifestyle, Offers, and more.</li>
            <li><strong>Made for You:</strong> Built for fast scrolls, short reads, and deep impact.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Join the Movement</h2>
          <p>
            Whether you’re a news junkie, a tech geek, a deal hunter, or just someone who loves top 5 lists—Top5Shots is your new favorite corner of the internet.
            Subscribe, follow us, and stay tuned for your daily shots of clarity.
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <p className="text-gray-600">📬 Got feedback or want to collaborate?</p>
        <a
          href="mailto:hello@top5shots.com"
          className="text-blue-600 hover:underline font-medium"
        >
          hello@top5shots.com
        </a>
      </div>
    </div>
  );
}
