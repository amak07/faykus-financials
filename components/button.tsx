import React, { ReactNode } from "react";

const AppButton: React.FC<{
  children: ReactNode;
  variant?: "SMALL" | "LARGE";
}> = ({ children, variant = "SMALL" }) => (
  <button
    className={`text-gray border-gray bg-transparent py-2 px-4 border hover:bg-gray hover:border-gray hover:text-white font-normal hidden xl:inline-block not-prose`}
    style={{
      fontSize: variant === "LARGE" ? 27 : 24,
      borderRadius: variant === "LARGE" ? 28 : 32,
    }}
  >
    {children}
  </button>
);

export default AppButton;
