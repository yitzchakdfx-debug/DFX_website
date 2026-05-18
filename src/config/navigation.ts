export type NavSubItem = { label: string; href: string };
export type NavItem = { label: string; href?: string; items?: NavSubItem[] };

export const navigationConfig: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    items: [
      { label: "Burn IN Rack", href: "/solutions/burn-in-rack" },
      { label: "Back Plan Tester", href: "/solutions/back-plan-tester" },
      { label: "Boundary Scan", href: "/solutions/boundary-scan" },
      { label: "MDA+BS+Functional", href: "/solutions/mda-bs-functional" },
      { label: "Turn Key", href: "/solutions/turn-key" },
      { label: "Micro Controller", href: "/solutions/micro-controller" }
    ]
  },
  {
    label: "Products",
    items: [
      { label: "Board Testers", href: "/products/board-testers" },
      { label: "Programmers", href: "/products/programmers" },
      { label: "Services", href: "/products/services" },
      { label: "Introspect", href: "/products/introspect" }
    ]
  },
  {
    label: "Vendors",
    items: [
      { label: "Digital Test", href: "/companies/digital-test" },
      { label: "Boundary Scan", href: "/companies/boundary-scan-company" },
      { label: "ATX", href: "/companies/atx" },
      { label: "Firecron", href: "/companies/firecron" },
      { label: "SiliconAid", href: "/companies/siliconaid" },
      { label: "Testonica", href: "/companies/testonica" },
      { label: "Xeltek", href: "/companies/xeltek" },
      { label: "PIONEER", href: "/companies/pioneer" }
    ]
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];



