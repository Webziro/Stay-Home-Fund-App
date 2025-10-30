import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";

const StatusIcon = ({ status }: { status: "Delivered" | "Pending" | "Canceled" }) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-2.5 w-2.5 rounded-full ${
          status === "Delivered" ? "bg-green-500" : status === "Pending" ? "bg-yellow-500" : "bg-red-500"
        }`}
      />
      <span
        className={`text-theme-sm ${
          status === "Delivered"
            ? "text-green-600 dark:text-green-400"
            : status === "Pending"
            ? "text-yellow-600 dark:text-yellow-400"
            : "text-red-600 dark:text-red-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

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
  status: "Delivered" | "Pending" | "Canceled";
}

const tableData: TransactionDetails[] = [
  {
    ReceieverDetails: "Stanley Amaziro",
    TransactionType: "CR",
    Remarks: "This is a test transaction",
    DebitedFrom: "$2399.00",
    TransactionId: "TRX-10001",
    TransactionDate: "2025-01-01",
    SessionId: "1234567890",
    TransactionStatus: "Success",
    TransactionAmount: "$2399.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Card",
    Fee: "0",
    status: "Delivered",
  },
  {
    ReceieverDetails: "Jane Doe",
    TransactionType: "DR",
    Remarks: "Subscription",
    DebitedFrom: "$25.00",
    TransactionId: "TRX-10002",
    TransactionDate: "2025-02-10",
    SessionId: "2234567890",
    TransactionStatus: "Pending",
    TransactionAmount: "$25.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Bank Transfer",
    Fee: "0",
    status: "Pending",
  },
  {
    ReceieverDetails: "John Smith",
    TransactionType: "DR",
    Remarks: "Refund",
    DebitedFrom: "$100.00",
    TransactionId: "TRX-10003",
    TransactionDate: "2025-03-05",
    SessionId: "3234567890",
    TransactionStatus: "Failed",
    TransactionAmount: "$100.00",
    TransactionCurrency: "USD",
    TransactionMethod: "Card",
    Fee: "2",
    status: "Canceled",
  },
];

export default function TranxHistory() {
  const modal = useModal(false);
  const [selected, setSelected] = useState<TransactionDetails | null>(null);

  const openDetails = (row: TransactionDetails) => {
    setSelected(row);
    modal.openModal();
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Transaction History</h3>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Name
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Amount
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Type
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Date
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((row) => (
              <TableRow
                key={row.TransactionId}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                onClick={() => openDetails(row)}
              >
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">{row.ReceieverDetails}</p>
                      <span className="text-gray-500 text-theme-xs dark:text-gray-400">{row.Remarks}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.TransactionAmount}</TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.TransactionType}</TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.TransactionDate}</TableCell>
                <TableCell className="py-3">
                  <StatusIcon status={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={modal.isOpen} onClose={modal.closeModal} className="w-full max-w-2xl">
        <div className="p-4">
          <div className="flex items-start justify-between">
            <h4 className="text-lg font-semibold">Transaction Details</h4>
            <button
              onClick={modal.closeModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
            >
              Close
            </button>
          </div>

          {selected ? (
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-500">Transaction ID</p>
                <p className="font-medium">{selected.TransactionId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Amount</p>
                <p className="font-medium">{selected.TransactionAmount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Currency</p>
                <p className="font-medium">{selected.TransactionCurrency}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="font-medium">{selected.TransactionDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <p className="font-medium">{selected.TransactionStatus}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Method</p>
                <p className="font-medium">{selected.TransactionMethod}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Session ID</p>
                <p className="font-medium">{selected.SessionId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Fee</p>
                <p className="font-medium">{selected.Fee}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No transaction selected.</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
