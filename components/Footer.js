import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="shrink-0 bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
              GM
            </div>
            <div>
              <h4 className="text-lg font-semibold">GetMechai</h4>
              <p className="text-sm text-gray-400">Fund your ideas by your fans</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 19c7.732 0 11.965-6.404 11.965-11.965 0-.182 0-.364-.012-.544A8.56 8.56 0 0 0 22 4.557a8.3 8.3 0 0 1-2.357.646 4.123 4.123 0 0 0 1.806-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 12.07 8.03a11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 2.8 9.713v.052a4.106 4.106 0 0 0 3.292 4.023 4.095 4.095 0 0 1-1.085.145c-.265 0-.523-.026-.775-.074a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.542 11.616 11.616 0 0 0 8 19z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                <path d="M17.5 6.5h.01" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.95v-7.05H8.07v-2.9h2.37V9.03c0-2.34 1.4-3.63 3.54-3.63 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.59l-.41 2.9h-2.18v7.05C18.34 21.2 22 17.06 22 12.07z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} GetMechai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer 
