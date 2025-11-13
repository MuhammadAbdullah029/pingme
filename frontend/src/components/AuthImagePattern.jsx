import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Pattern Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl bg-primary/10
                ${i % 2 === 0 ? "animate-pulse" : ""}
              `}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Text Content */}
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-base-content/60">{subtitle}</p>}
      </div>
    </div>
  );
};

export default AuthImagePattern;
