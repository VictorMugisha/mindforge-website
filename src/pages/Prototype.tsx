import SafeReports from "../components/SafeReport";

export default function Prototype() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-8">
        <h1 className="text-3xl font-semibold mb-4">Prototype Page</h1>
        <p className="text-lg text-gray-700">
          This is a prototype page demonstrating the report submission form.
        </p>
      </section>
      <section className="mb-8">
        <SafeReports />
      </section>
    </div>
  );
};
