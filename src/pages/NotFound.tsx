import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex gap-7 md:py-28 md:px-8 w-full">
      <div className="w-full flex flex-col items-center gap-5 text-center mb-10 py-10 px-4 md:p-0">
        <h1 className="italic font-bold text-3xl md:text-5xl text-slate-600 pb-3 leading-10 md:leading-14">
          404 - <span className="text-blue-400">Page Not Found</span>
        </h1>
        <p className="leading-7 text-slate-500 pb-3 mt-6 text-center">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-sm font-semibold text-white bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 hover:transition-all cursor-pointer"
          >
            Go Home
          </Link>
          <Link
            to="#"
            className="text-sm font-semibold text-blue-400 bg-slate-100 border border-blue-400 py-2 px-6 rounded-lg hover:bg-slate-50 hover:transition-all cursor-pointer"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
