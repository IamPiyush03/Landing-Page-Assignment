import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader onOpenEnquiry={() => (window.location.href = "/#contact")} />
      <div className="container grid min-h-[60vh] place-items-center">
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-extrabold">404</h1>
          <p className="mb-6 text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground">Return to Home</a>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
