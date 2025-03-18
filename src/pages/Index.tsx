
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Index = () => {
  const { user, signOut } = useAuth();

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
