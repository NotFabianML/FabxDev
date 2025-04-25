// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, Code, Github, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/root/lib/utils";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
//         isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <Link
//           href="/"
//           className="flex items-center space-x-2 text-2xl font-bold text-primary"
//         >
//           {/* <Code className="h-8 w-8" /> */}
//           <span className="font-anton tracking-wider">FabxDev</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-sm font-medium animated-underline hover:text-primary transition-colors"
//             >
//               {item.name}
//             </Link>
//           ))}

//           <div className="flex items-center space-x-2">
//             <Link href="https://github.com/NotFabianML" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Github className="h-5 w-5" />
//               </Button>
//             </Link>
//             <Link href="https://www.linkedin.com/in/fabian-miranda-loaiza/" target="_blank" rel="noopener noreferrer">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden p-2 text-foreground"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 slide-in-bottom">
//           <nav className="container flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="py-2 px-4 text-sm font-medium hover:bg-muted rounded-md transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="flex items-center space-x-2 py-2 px-4">
//               <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <Github className="h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <Button variant="ghost" size="icon" className="rounded-full">
//                   <Linkedin className="h-5 w-5" />
//                 </Button>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, Github, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/root/lib/utils";
// import LocaleSwitcher from "@/components/LocaleSwitcher";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <Link
//           href="/"
//           className="flex items-center space-x-2 text-2xl font-bold text-primary"
//         >
//           <span className="font-anton tracking-wider">FabxDev</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-sm font-medium animated-underline hover:text-primary transition-colors"
//             >
//               {item.name}
//             </Link>
//           ))}

//           <div className="flex items-center space-x-2">
//             <Link
//               href="https://github.com/NotFabianML"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button variant="ghost" size="icon">
//                 <Github className="h-5 w-5" />
//               </Button>
//             </Link>
//             <Link
//               href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button variant="ghost" size="icon">
//                 <Linkedin className="h-5 w-5" />
//               </Button>
//             </Link>
//           </div>

//           {/* Locale Switcher */}
//           <LocaleSwitcher />
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden p-2 text-foreground"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 slide-in-bottom">
//           <nav className="container flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="py-2 px-4 text-sm font-medium hover:bg-muted rounded-md transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <div className="flex items-center space-x-2 py-2 px-4">
//               <Link
//                 href="https://github.com/NotFabianML"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button variant="ghost" size="icon">
//                   <Github className="h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link
//                 href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button variant="ghost" size="icon">
//                   <Linkedin className="h-5 w-5" />
//                 </Button>
//               </Link>
//             </div>

//             {/* Locale Switcher Mobile */}
//             <div className="px-4">
//               <LocaleSwitcher />
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/root/lib/utils";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { key: "home" as const, href: "#home" },
    { key: "about" as const, href: "#about" },
    { key: "services" as const, href: "#services" },
    { key: "projects" as const, href: "#projects" },
    { key: "contact" as const, href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-primary"
        >
          <span className="font-anton tracking-wider">
            {t("brand")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium animated-underline hover:text-primary transition-colors"
            >
              {t(item.key)}
            </a>
          ))}

          <div className="flex items-center space-x-2">
            <Link
              href="https://github.com/NotFabianML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Locale Switcher */}
          <LocaleSwitcher />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label={t("toggleMenu")}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 slide-in-bottom">
          <nav className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="flex items-center space-x-2 py-2 px-4">
              <Link
                href="https://github.com/NotFabianML"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Locale Switcher Mobile */}
            <div className="px-4">
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
