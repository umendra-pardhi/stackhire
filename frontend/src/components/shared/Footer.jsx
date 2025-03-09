import React from 'react';

const Footer = () => {
  return (
    
    <footer id="footer" class="bg-neutral-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-1">
                <h3 class="text-lg font-bold text-gray-900 mb-4">StackHire</h3>
                <p class="text-gray-600 text-sm">Connecting talent with opportunity. Your next career move starts here.</p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                </div>
            </div>

            <div class="col-span-1">
                <h4 class="text-sm font-semibold text-gray-900 uppercase mb-4">For Job Seekers</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Browse Jobs</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Career Resources</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">All Jobs</a></li>
             
                </ul>
            </div>

            <div class="col-span-1">
                <h4 class="text-sm font-semibold text-gray-900 uppercase mb-4">For Employers</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Post a Job</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Browse Candidates</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Recruitment Solutions</a></li>

                </ul>
            </div>

            <div class="col-span-1">
                <h4 class="text-sm font-semibold text-gray-900 uppercase mb-4">Company</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">About Us</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Contact</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-blue-600 text-sm transition-colors">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-gray-200 mt-8 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">© 2024 StackHire. All rights reserved.</p>
                <div class="mt-4 md:mt-0">
                    <ul class="flex space-x-6">
                        <li><a href="#" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy</a></li>
                        <li><a href="#" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms</a></li>
                        <li><a href="#" class="text-gray-500 hover:text-blue-600 text-sm transition-colors">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;