import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-accent font-heading font-bold text-3xl">S</span>
          </div>
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Become a Citizen
          </h1>
          <p className="text-gray-600 mb-8">
            Create your account to access exclusive resources, masterclasses, and the community.
          </p>

          <form className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="button"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors mt-4"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            Already have an account? <Link href="#" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
