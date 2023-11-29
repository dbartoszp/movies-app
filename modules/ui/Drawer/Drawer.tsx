import clsx from "clsx";
import { HiXMark } from "react-icons/hi2";
import { useRouteChanged } from "@/modules/navigation/hooks/useRouteChanged/useRouteChanged";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  iconSize: number;
  belowNavbar: boolean;
};

export function Drawer({
  isOpen,
  onClose,
  iconSize,
  belowNavbar = false,
}: DrawerProps) {
  useRouteChanged(() => onClose());

  return (
    <main
      className={
        belowNavbar ? "z-50 mt-[55px] tracking-wider" : "z-50 tracking-wider"
      }
    >
      <section
        className={clsx(
          "delay-400 fixed left-0 z-40 h-full w-screen transform  bg-light-blue-lighter shadow-xl transition-all duration-500 ease-in-out",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
      >
        {!belowNavbar ? (
          <div className="w-full border-b border-light-blue bg-light-blue">
            <button className="cursor-pointer p-3" onClick={onClose}>
              <HiXMark size={iconSize} />
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
}
