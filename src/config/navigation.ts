export type NavSubItem = { label: string; href: string };
export type NavItem = { label: string; href?: string; items?: NavSubItem[] };

export const navigationConfig: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Solutions",
    items: [
      { label: "Burn IN Rack", href: "/solutions/burn-in-rack" },
      { label: "Air System Tester", href: "/solutions/air-system-tester" },      { label: "High Voltage Relay Tester", href: "/solutions/high-voltage-relay-tester" },
      { label: "MDA+BS+Functional", href: "/solutions/mda-bs-functional" },
      { label: "Turn Key", href: "/solutions/turn-key" },
      { label: "Pool Cleaning Robot Tester", href: "/solutions/pool-cleaning-robot-tester" },
      { label: "Base Station Tester", href: "/solutions/base-station-tester" },
      { label: "Burn-In Cabinet for Boards", href: "/solutions/card-burn-in-cabinet" },
      { label: "Solar Panel Controller Tester", href: "/solutions/solar-panel-controller-tester" },
      { label: "Accident Prevention System Tester", href: "/solutions/accident-prevention-system-tester" },
      { label: "Wire Coloring System Tester", href: "/solutions/wire-coloring-system-tester" },
      { label: "Collar Tester", href: "/solutions/collar-tester" }
    ]
  },
  {
    label: "Products",
    items: [
      { label: "Board Testers", href: "/products/board-testers" },
      { label: "Programmers", href: "/products/programmers" },
      { label: "Xeltek Programming Systems", href: "/products/xeltek-programming-systems" }
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
      { label: "EMC PIONEER", href: "/companies/pioneer" }
    ]
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];




