import React, { useState } from "react";
import axiosConfig from "../../config/axiosConfig";
import type { ProjectFormData } from "../../types/Project";

interface AddProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
const AddProjectPopup: React.FC<AddProjectPopupProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    projectUrl: "",
    year: new Date().getFullYear().toString(),
    status: "completed",
    imagePosition: "left",
    imageSrc: "",
    translations: [
      {
        language: "en",
        title: "",
        category: "",
        description: "",
      },
      {
        language: "id",
        title: "",
        category: "",
        description: "",
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const renderStepperHeader = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step <= currentStep
                ? "bg-indigo-600 text-white"
                : "bg-gray-600 text-gray-300"
            }`}
          >
            {step}
          </div>
          <span className="ml-2 text-sm text-white">
            {step === 1}
            {step === 2}
            {step === 3}
          </span>
          {step < 3 && <div className="w-16 h-0.5 bg-gray-600 mx-4" />}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderProjectInfoStep();
      case 2:
        return renderUploadDetailsStep();
      case 3:
        return renderTechnologiesStep();
      default:
        return null;
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderProjectInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Project Information</h3>
      {/* Pindahkan bagian translations ke sini */}
    </div>
  );

  const renderUploadDetailsStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">
        Upload & Project Details
      </h3>
      {/* Pindahkan bagian projectUrl, year, status, imagePosition, imageSrc ke sini */}
    </div>
  );

  const renderTechnologiesStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Technologies</h3>
      {/* Tambahkan form untuk technologies */}
    </div>
  );

  const handleTranslationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      translations: prev.translations.map((trans, i) =>
        i === index ? { ...trans, [field]: value } : trans
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await axiosConfig.axiosInstance.post("/projects", formData);
      onSuccess();
      onClose();

      setFormData({
        projectUrl: "",
        year: new Date().getFullYear().toString(),
        status: "completed",
        imagePosition: "left",
        imageSrc: "",
        translations: [
          { language: "en", title: "", category: "", description: "" },
          { language: "id", title: "", category: "", description: "" },
        ],
      });
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create project");
    } finally {
      setIsLoading(false);
    }
  };

  const renderNavigationButtons = () => (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => setCurrentStep((prev) => prev - 1)}
        disabled={currentStep === 1}
        className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>

      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {isLoading ? "Creating..." : "Create Project"}
        </button>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-5xl h-[90vh] overflow-y-auto">
        {/* Header dengan close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Add New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Stepper Header */}
        {renderStepperHeader()}

        <form onSubmit={handleSubmit}>
          {/* Step Content */}
          {renderStepContent()}

          {/* Navigation Buttons */}
          {renderNavigationButtons()}
        </form>
      </div>
    </div>
  );
};

export default AddProjectPopup;
