import React from "react";

interface DataTableProps<T> {
  title: string;
  data: T[];
  columns: {
    key: string;
    header: string;
    render: (row: T) => React.ReactNode;
  }[];
  isLoading: boolean;
  error: string | null;
  totalData: number;
  totalPage: number;
  page: number;
  rows: number;
  onPageChange: (page: number) => void;
  onRowsChange: (rows: number) => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function DataTable<T>({
  title,
  data,
  columns,
  isLoading,
  error,
  totalData,
  totalPage,
  page,
  rows,
  onPageChange,
  onRowsChange,
  searchValue,
  onSearchChange,
}: DataTableProps<T>) {
  const [showAutocomplete, setShowAutocomplete] = React.useState(false);

  // Ambil semua title dari data
  const titles = data
    .map(
      (row) =>
        (row as any).translations?.find?.((t: any) => t.language === "en")
          ?.title
    )
    .filter((t) => typeof t === "string");

  // Filter autocomplete
  const filteredTitles = searchValue
    ? titles.filter((t) => t.toLowerCase().includes(searchValue.toLowerCase()))
    : [];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {/* Search Bar */}
      <div className="mb-4 relative">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setShowAutocomplete(true);
          }}
          onBlur={() => setTimeout(() => setShowAutocomplete(false), 150)}
          placeholder="Search by title..."
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
        />
        {/* Autocomplete */}
        {showAutocomplete && filteredTitles.length > 0 && (
          <ul className="absolute left-0 right-0 bg-gray-900 border border-gray-700 rounded mt-1 z-10 max-h-40 overflow-auto">
            {filteredTitles.map((t, idx) => (
              <li
                key={idx}
                className="px-3 py-2 cursor-pointer hover:bg-gray-700"
                onMouseDown={() => {
                  onSearchChange(t);
                  setShowAutocomplete(false);
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-3 py-2">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t border-gray-700">
                {columns.map((col) => (
                  <td key={col.key} className="px-3 py-2">
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-sm text-gray-400">
            Page {page} of {totalPage} — {totalData} total
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page === totalPage}
            onClick={() => onPageChange(page + 1)}
            className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
          <select
            value={rows}
            onChange={(e) => onRowsChange(Number(e.target.value))}
            className="ml-2 bg-gray-700 text-white px-2 py-1 rounded"
          >
            {[10, 20, 50].map((r) => (
              <option key={r} value={r}>
                {r} rows
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
