"use client";

export const ScrollBy = ({
  amount,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  amount: number;
}) => (
  <button
    {...props}
    onClick={(e) => {
      e.preventDefault();
      const scrollContainer = e.currentTarget.closest("peek-carousel");
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;
        const maxScrollLeft = scrollWidth - clientWidth;
        const targetScrollLeft = scrollLeft + amount;
        const clampedScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
        scrollContainer.scrollTo({
          left: clampedScrollLeft,
          behavior: "smooth",
        });
      }
    }}
  >
    {props.children}
  </button>
);
