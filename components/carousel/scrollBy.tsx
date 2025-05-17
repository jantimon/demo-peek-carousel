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
        scrollContainer.scrollBy({
          left: amount,
          behavior: "smooth",
        });
      }
    }}
  >
    {props.children}
  </button>
);
