import React from "react";

const Bounded = React.forwardRef(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={`px-4 py-10 md:py-14 lg:py-16 ${className}`}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
