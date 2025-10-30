import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

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
    status: "Canceled",
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
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
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
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
            {tableData.map((TransactionDetails) => (
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
      </div>
    </div>
  );
}
