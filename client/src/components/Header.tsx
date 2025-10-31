
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import logoImage from "@assets/Gemini_Generated_Image_b88tub88tub88tub_1759648053876.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Search", href: "/search" }, // Added Search link
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Immigration", href: "#immigration" },
    { label: "Resources", href: "#resources" },
    { label: "Contact Us", href: "#contact" },
    { label: "Member Login", href: "/admin/login" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3 hover-elevate px-2 py-1 rounded-md cursor-pointer">
              <img src={logoImage} alt="Global North Overseas" className="h-10 w-auto" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const isRoutePath = item.href.startsWith('/') && !item.href.startsWith('#');
              if (isRoutePath && item.href !== '/') {
                return (
                  <Link key={item.label} href={item.href}>
                    <span
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md cursor-pointer inline-block"
                      data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
               <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm hover-elevate rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
