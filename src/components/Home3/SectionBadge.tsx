import type { ReactNode } from "react";

/** Purple-tinted border used on cards and panels (not white). */
export const panelBorder = "border border-[#4c3d8f]/45";

export const panelBg = "bg-[#05060f]";

export function SectionBadge({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <p className="gradient-border-wrapper inline-flex items-center justify-center gap-2 rounded-full bg-[#08050f]/95 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] md:px-6 md:py-3 md:text-xs">
      {icon}
      {children}
    </p>
  );
}

export const sectionSubtextClass =
  "max-w-2xl text-center text-base font-normal leading-relaxed text-[#94a3b8] md:text-lg";

export function TrustBarGrid({
  children,
  columnsClass = "lg:grid-cols-4",
}: {
  children: ReactNode;
  columnsClass?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[26px] ${panelBorder} ${panelBg}`}
    >
      <div
        className={`grid auto-rows-fr grid-cols-1 sm:grid-cols-2 ${columnsClass}`}
      >
        {children}
      </div>
    </div>
  );
}

export function TrustBarCell({
  children,
  showDividerTop = false,
  showDividerTopSm = false,
  showDividerLeftSm = false,
  showDividerLeftLg = false,
}: {
  children: ReactNode;
  showDividerTop?: boolean;
  showDividerTopSm?: boolean;
  showDividerLeftSm?: boolean;
  showDividerLeftLg?: boolean;
}) {
  return (
    <div className={`relative flex items-center gap-5 ${panelBg} px-6 py-8 md:px-7`}>
      {showDividerTop && (
        <span
          className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[#4c3d8f]/55 sm:hidden"
          aria-hidden
        />
      )}
      {showDividerTopSm && (
        <span
          className="pointer-events-none absolute inset-x-5 top-0 hidden h-px bg-[#4c3d8f]/55 sm:block lg:hidden"
          aria-hidden
        />
      )}
      {showDividerLeftSm && (
        <span
          className="pointer-events-none absolute bottom-5 left-0 top-5 hidden w-px bg-[#4c3d8f]/55 sm:block lg:hidden"
          aria-hidden
        />
      )}
      {showDividerLeftLg && (
        <span
          className="pointer-events-none absolute bottom-5 left-0 top-5 hidden w-px bg-[#4c3d8f]/55 lg:block"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
