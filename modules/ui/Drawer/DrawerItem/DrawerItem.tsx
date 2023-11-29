import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

type DrawerItemProps = {
  iconSize: number;
  category: string;
  href: string;
};

export function DrawerItem({ category, iconSize, href }: DrawerItemProps) {
  return (
    <Link className="flex items-center" href={href}>
      <span className="flex-1">{category}</span>
      <div className="pr-3">
        <HiArrowRight size={iconSize * 0.8} />
      </div>
    </Link>
  );
}
