import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Link } from "react-router";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import { useState, useMemo } from "react";

const StatusIcon = ({ status }: { status: "Delivered" | "Pending" | "Canceled" }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`flex h-2.5 w-2.5 rounded-full ${
        status === "Delivered"
          ? "bg-green-500"
          : status === "Pending"
          ? "bg-yellow-500"
          : "bg-red-500"
      }`} />
      <span className={`text-theme-sm ${
        status === "Delivered"
          ? "text-green-600 dark:text-green-400"
          : status === "Pending"
          ? "text-yellow-600 dark:text-yellow-400"
          : "text-red-600 dark:text-red-400"
      }`}>
        {status}
      </span>
    </div>
  );
};

// Define the TypeScript interface for the table rows
interface TransactionDetails {

  ReceieverDetails: string; 
  TransactionType: string; 
  Remarks: string; 
  DebitedFrom: string; 
  TransactionId: string;
  TransactionDate: string;
  SessionId: string;
  TransactionAmount: string;
  TransactionCurrency: string;
  TransactionMethod: string;
  TransactionStatus: string;
  Fee: string;
  status: "Delivered" | "Pending" | "Canceled"; //Enum
}

const tableData: TransactionDetails[] = [
  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "CR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "Laptop",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Laptop",
    Fee: "0",
    status: "Delivered",
  },

  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "DR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "Laptop",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Laptop",
    Fee: "0",
    status: "Pending",
  },

  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "DR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "Laptop",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Laptop",
    Fee: "0",
    status: "Delivered",
  },

  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "DR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "Laptop",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Laptop",
    Fee: "0",
    status: "Delivered",
  },

  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "DR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "Laptop",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Laptop",
    Fee: "0",
    status: "Canceled",
  },
];

interface FilterState {
  type: string;
  status: string;
  startDate: string;
  endDate: string;
}

export default function RecentOrders() {
  const filterModal = useModal(false);
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    status: '',
    startDate: '',
    endDate: ''
  });
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    filterModal.closeModal();
    // Will apply filters to tableData here
  };

  const filteredData = tableData.filter(transaction => {
    if (filters.type && transaction.TransactionType !== filters.type) return false;
    if (filters.status && transaction.status !== filters.status) return false;
    if (filters.startDate && new Date(transaction.TransactionDate) < new Date(filters.startDate)) return false;
    if (filters.endDate && new Date(transaction.TransactionDate) > new Date(filters.endDate)) return false;
    return true;
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={filterModal.openModal}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <Link
            to="/tranx-history"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            See all
          </Link>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400" >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                Amount
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                Type
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {filteredData.slice(0, visibleCount).map((TransactionDetails) => (
              <TableRow key={TransactionDetails.TransactionId} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {TransactionDetails.ReceieverDetails}
                      </p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                        {TransactionDetails.Remarks}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {TransactionDetails.DebitedFrom}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {TransactionDetails.TransactionType}
                </TableCell>
                <TableCell className="py-3">
                  <StatusIcon status={TransactionDetails.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-center gap-2">
          {filteredData.length > visibleCount && (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              Load More
            </button>
          )}
          {visibleCount > 3 && (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <Modal isOpen={filterModal.isOpen} onClose={filterModal.closeModal} className="w-full max-w-md">
        <div className="p-4">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">Filter Transactions</h4>
            <button
              onClick={filterModal.closeModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              Close
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Transaction Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <option value="">All Types</option>
                <option value="CR">Credit (CR)</option>
                <option value="DR">Debit (DR)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <option value="">All Statuses</option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="date"
                    value={filters.startDate}
                    onChange={(e) => handleFilterChange('startDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    value={filters.endDate}
                    onChange={(e) => handleFilterChange('endDate', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => {
                  setFilters({
                    type: '',
                    status: '',
                    startDate: '',
                    endDate: ''
                  });
                  filterModal.closeModal();
                }}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Reset
              </button>
              <button
                onClick={applyFilters}
                className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-400"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
