import React, { useRef, useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
    if (emailInputRef.current) {
      emailInputRef.current.style.border = "none";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    if (emailInputRef.current) {
      emailInputRef.current.style.border = "none";
    }

    if (!email.trim()) {
      if (emailInputRef.current) {
        emailInputRef.current.focus();
        emailInputRef.current.style.border = "1px solid red";
      }
      setEmailError("Enter your email first.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (emailInputRef.current) {
        emailInputRef.current.focus();
        emailInputRef.current.style.border = "1px solid red";
      }
      setEmailError("Email is not valid.");
      return;
    }
  };
  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 justify-center gap-7 text-center ">
      <h2 className="font-bold text-2xl lg:text-3xl text-slate-700 px-4">
        Interested in us? Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center w-full md:w-md relative">
          <input
            type="email"
            name="user-email"
            placeholder="Your Email..."
            ref={emailInputRef}
            value={email}
            onChange={handleEmailChange}
            className="text-sm outline-none border-none py-3 md:py-5 px-4 md:px-6 sm:text-lg bg-white rounded-xl md:rounded-br-none md:rounded-tr-none shadow-lg md:w-sm"
          />
          {emailError && (
            <p className="text-red-500 absolute bottom-[-30px] left-2">
              {emailError}
            </p>
          )}
          <button
            type="submit"
            className="text-sm sm:text-lg py-3 md:py-5 px-4 md:px-6 text-white bg-cyan-950 rounded-xl md:rounded-bl-none md:rounded-tl-none shadow-lg cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
}
