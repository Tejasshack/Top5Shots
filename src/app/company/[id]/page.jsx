"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CompanyDetailPage() {
  const { id } = useParams(); // gets the dynamic ID from URL
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCompany = async () => {
      try {
        const res = await fetch(`http://localhost:5000/getCompanyById/${id}`);
        const data = await res.json();
        setCompany(data);
      } catch (error) {
        console.error("Failed to fetch company:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading company details...</p>;
  if (!company) return <p className="text-center py-10">No company found for ID "{id}"</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="border rounded-xl p-6 shadow-sm bg-white mb-6">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th colSpan="2" className="text-center text-xl font-semibold text-black py-4">
                {company.websiteName}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" colSpan="2">
                <Image
                  src={company.logo}
                  alt={company.websiteName}
                  width={60}
                  height={60}
                  className="rounded-full mx-auto"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center text-lg font-semibold text-gray-800 py-2">
                {company.mainHeading}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="font-semibold text-gray-700 py-2">
                Key Benefits & Features
                <ul className="space-y-1 mt-2 text-sm text-gray-700">
                  {company.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td className="text-center text-sm text-yellow-600" colSpan="2">
                {company.rating} ⭐
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="font-semibold text-gray-700 py-2">
                Description
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-sm text-gray-600 py-1">
                {company.Description}
              </td>
            </tr>
            <tr>
              <td className="text-sm font-semibold text-green-500 py-2">Pros</td>
              <td className="text-sm font-semibold text-red-500 py-2">Cons</td>
            </tr>
            <tr>
              <td className="text-sm text-gray-600">
                <ul className="list-disc ml-4">{company.pros?.map((pro, i) => <li key={i}>{pro}</li>)}</ul>
              </td>
              <td className="text-sm text-gray-600">
                <ul className="list-disc ml-4">{company.cons?.map((con, i) => <li key={i}>{con}</li>)}</ul>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center py-4">
                <a
                  href={company.visitSiteUrl}
                  target="_blank"
                  className="inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Visit Site
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
