import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Authentication",
};

const AuthLayout = ({ children }) => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-[#ffedc9] flex justify-center items-center">
      <div className="min-h-[85vh] w-[90%] bg-white rounded-[20px] flex overflow-hidden box-shadow-lg">
        <div className="flex flex-[1.1] items-center justify-center">
          {children}
        </div>
        <div className="flex-[0.9] flex justify-center items-center bg-primary">
          <Image
            src="/images/auth.png"
            alt="Person using phone"
            width={400}
            height={480}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
