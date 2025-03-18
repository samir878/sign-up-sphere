
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Index = () => {
  const { user, signOut } = useAuth();

  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-red-600 mb-4">Configuration Error</h1>
          <p className="text-gray-600 mb-4">
            Missing Supabase credentials. To fix this:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Create a .env file in your project root</li>
            <li>Add VITE_SUPABASE_URL=your-url</li>
            <li>Add VITE_SUPABASE_ANON_KEY=your-key</li>
            <li>Restart your development server</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Instagram className="h-8 w-8" />
            <h1 className="text-xl font-bold">Instagram Clone</h1>
          </div>
          <Button onClick={signOut} variant="outline">Sign Out</Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Welcome to your Dashboard</h2>
          <div className="mb-4">
            <p className="text-gray-600">You are logged in as:</p>
            <p className="font-medium">{user?.email}</p>
          </div>
          <p className="text-gray-600">
            This is a simple Instagram clone. The authentication system is working with Supabase!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
