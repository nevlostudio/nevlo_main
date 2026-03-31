type LogoMarkProps = {
  size?: "sm" | "md" | "lg";
};

export function LogoMark({ size = "md" }: LogoMarkProps) {
  const isSmall = size === "sm";
  const isLarge = size === "lg";
  const boxSize = isSmall
    ? "h-10 w-10 rounded-[0.7rem]"
    : isLarge
      ? "h-[4.75rem] w-[4.75rem] rounded-[1rem]"
      : "h-12 w-12 rounded-[0.8rem]";
  const gapClass = isSmall ? "ml-[0.04em]" : isLarge ? "ml-[0.05em]" : "ml-[0.06em]";

  return (
    <div
      className={`flex items-center justify-center bg-[linear-gradient(180deg,#2B74B8,#185FA5)] text-white shadow-[0_14px_26px_rgba(12,68,124,0.26)] ${boxSize}`}
    >
      <span
        className={`font-display font-semibold ${isSmall ? "text-[1.08rem]" : isLarge ? "text-[2rem]" : "text-[1.25rem]"}`}
      >
        N<span className={`${gapClass} inline-block`}>v</span>
      </span>
    </div>
  );
}
