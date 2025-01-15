import { SignIn } from '@clerk/nextjs';
import { Video } from 'lucide-react';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex items-center space-x-2">
        <Video className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Loom</h1>
      </div>
      
      <div className="w-full max-w-md">
        <div className="   rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
            <p className="text-gray-600 mt-2">Sign in to start your video calls</p>
          </div>
          
          <SignIn
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-indigo-600 hover:bg-indigo-700 text-sm normal-case",
                card: "shadow-none p-8",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: 
                  "border-gray-200 text-gray-600 hover:bg-gray-50 text-sm normal-case"
              }
            }}
          />
        </div>
        
        <p className="text-center mt-6 text-sm text-gray-600">
          New to Loom? 
          <a href="#/sign-up" className="text-indigo-600 hover:text-indigo-500 ml-1">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}