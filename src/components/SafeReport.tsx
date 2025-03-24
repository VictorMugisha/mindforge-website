import { useForm } from "react-hook-form";

interface FormData {
  reportType: "Anonymously" | "Publicly";
  description: string;
  evidence: FileList;
  name?: string;
  email?: string;
  incidentDate?: string;
}

export default function SafeReports() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Report Corruption</h2>
      <p className="mb-4">
        Report corruption cases anonymously or publicly. Attach evidence such as
        text, images, videos, or audio files.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Report Type
          </label>
          <select
            {...register("reportType", { required: "Report type is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Anonymously">Anonymously</option>
            <option value="Publicly">Publicly</option>
          </select>
          {errors.reportType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.reportType.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name", {
              maxLength: {
                value: 100,
                message: "Name cannot exceed 100 characters",
              },
            })}
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your name (optional)"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your email (optional)"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Incident Date
          </label>
          <input
            {...register("incidentDate", {
              required: "Incident date is required",
            })}
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.incidentDate && (
            <p className="text-red-500 text-xs mt-1">
              {errors.incidentDate.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder="Describe the corruption incident..."
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Attach Evidence
          </label>
          <input
            {...register("evidence", {
              required: "At least one file is required",
              validate: {
                lessThan10MB: (files) =>
                  files[0]?.size < 10000000 || "Max file size is 10MB",
                acceptedFormats: (files) =>
                  [
                    "image/jpeg",
                    "image/png",
                    "image/gif",
                    "application/pdf",
                  ].includes(files[0]?.type) ||
                  "Only PNG, JPEG, GIF, and PDF files are accepted",
              },
            })}
            type="file"
            className="mt-1 block w-full text-sm text-gray-500"
            multiple
          />
          {errors.evidence && (
            <p className="text-red-500 text-xs mt-1">
              {errors.evidence.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </section>
  );
};
