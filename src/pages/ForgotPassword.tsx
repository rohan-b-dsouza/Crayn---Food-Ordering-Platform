import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password reset",
      description: "If an account exists, a reset link has been sent to your email.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
              <p className="text-muted-foreground">We'll send you a reset link</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-10" required />
                </div>
              </div>
              <Button type="submit" className="w-full gradient-hero">Send reset link</Button>
              <p className="text-center text-sm text-muted-foreground">
                Remembered your password? <Link to="/login" className="text-primary hover:underline">Back to Login</Link>
              </p>
            </form>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;


