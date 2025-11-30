import React from 'react'
import Link from 'next/link'

export default function Unauthorized(): React.ReactElement {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100 p-6">
      <section className="max-w-4xl w-full bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-10 flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center ring-1 ring-red-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M10.29 3.86L1.82 12.34a2 2 0 0 0 0 2.83l7.88 7.88a2 2 0 0 0 2.83 0l8.48-8.48a2 2 0 0 0 0-2.83L13.12 3.86a2 2 0 0 0-2.83 0z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Access Denied
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                You don't have permission to view this page.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            If you believe this is an error, try the options below or contact your
            administrator. Some pages require additional privileges or a different account.
          </p>

          <ul className="text-sm text-gray-700 space-y-2 pl-4">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">•</span>
              Check that you&apos;re signed in with the correct account.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">•</span>
              Request access from the page owner or your administrator.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">•</span>
              Return to a safe page and try again.
            </li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/" className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md shadow-sm transition">
              Go to Home
            </Link>

            <a
              href="mailto:support@example.com?subject=Access%20Denied%20Help"
              className="inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              Contact Support
            </a>
          </div>

          <p className="mt-auto text-xs text-gray-400">
            Error code: 403 • This page is protected by authorization rules.
          </p>
        </div>

        <div className="md:w-1/2 bg-red-50 flex items-center justify-center p-8">
          <div className="max-w-xs text-center">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 h-64 mx-auto mb-4"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fee2e2" />
                  <stop offset="100%" stopColor="#fecaca" />
                </linearGradient>
              </defs>
              <rect x="20" y="80" width="460" height="320" rx="18" fill="url(#g)" />
              <path d="M150 160h200v20H150z" fill="#fff" opacity="0.9" />
              <circle cx="360" cy="220" r="40" fill="#fff" opacity="0.9" />
              <g transform="translate(240,260)" fill="none" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-90 0h110" />
                <path d="M-90 48h110" />
              </g>
              <g transform="translate(300,200)" fill="#ef4444">
                <rect x="-10" y="-10" width="20" height="20" rx="4" />
                <path d="M-20 30l40-40M20 30l-40-40" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
            </svg>

            <p className="text-sm text-gray-600">
              Need quick access? Ask your team lead to grant the right role or try a different account.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
