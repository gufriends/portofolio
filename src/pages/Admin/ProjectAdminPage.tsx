import { useEffect, useState } from "react";
import { DataTable } from "../../components/dataTable/DataTable";
import type { Project } from "../../types/Project";
import axiosConfig from "../../config/axiosConfig";
import AddProjectPopup from "./AddProjectPopup";

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [totalData, setTotalData] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [showAddPopup, setShowAddPopup] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      try {
        const searchFilters = searchValue
          ? { "translations.title": searchValue }
          : {};
        const response = await axiosConfig.axiosInstance.get(
          `/projects?page=${page}&rows=${rows}&searchFilters=${encodeURIComponent(
            JSON.stringify(searchFilters)
          )}`
        );
        setProjects(response.data.content.entries);
        setTotalData(response.data.content.totalData);
        setTotalPage(response.data.content.totalPage);
      } catch (err: any) {
        setError(err.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [page, rows, searchValue]);

  const enTranslation = (p: Project) =>
    p.translations.find((t) => t.language === "en");
  const columns = [
    {
      key: "imageSrc",
      header: "Image",
      render: (p: Project) => {
        return (
          <img
            src={p.imageSrc}
            alt={enTranslation(p)?.title || "Project image"}
            className="w-12 h-12 rounded-lg object-cover"
          />
        );
      },
    },
    {
      key: "title",
      header: "Title",
      render: (p: Project) => {
        const enTranslation = p.translations.find((t) => t.language === "en");
        return (
          <div>
            <p className="text-white font-medium">
              {enTranslation?.title || "Untitled"}
            </p>
            <p className="text-gray-400 text-sm mt-1 max-w-xs truncate">
              {enTranslation?.description || "No description"}
            </p>
          </div>
        );
      },
    },
    {
      key: "category",
      header: "Category",
      render: (p: Project) => {
        const enTranslation = p.translations.find((t) => t.language === "en");
        return (
          <span className="px-2 py-1 rounded text-xs bg-indigo-100 text-indigo-800">
            {enTranslation?.category || "Uncategorized"}
          </span>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      render: (p: Project) => (
        <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
          {p.status}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <button
          onClick={() => setShowAddPopup(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Add New Project
        </button>
      </div>

      <DataTable
        title="All Projects"
        data={projects}
        columns={columns}
        isLoading={isLoading}
        error={error}
        totalData={totalData}
        totalPage={totalPage}
        page={page}
        rows={rows}
        onPageChange={setPage}
        onRowsChange={setRows}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      <AddProjectPopup
        isOpen={showAddPopup}
        onClose={() => setShowAddPopup(false)}
        onSuccess={() => {}}
      />
    </div>
  );
}
