import { navigationConfig } from "@/config/navigation";
import { NavDropdown } from "@/components/navigation/nav-dropdown";

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
      {navigationConfig.map((item) => (
        <NavDropdown key={item.label} item={item} />
      ))}
    </nav>
  );
}
