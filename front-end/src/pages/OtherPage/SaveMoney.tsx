import { DollarLineIcon, DownloadIcon, PlugInIcon, CopyIcon, PaperPlaneIcon } from "../../icons";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import QuickSaveForm from "../../components/form/save/QuickSaveForm";
import WithdrawForm from "../../components/form/save/WithdrawForm";
import { useState } from "react";

export default function SaveMoney() {
  const { isOpen, openModal, closeModal } = useModal(false);
  const withdraw = useModal(false);
  const receipt = useModal(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [showAll, setShowAll] = useState(false);

  type Transaction = {
    id: string;
    type: "savings" | "withdrawal";
    amount: string;
    date: string;
    description: string;
    fullId: string;
    fullDateTime: string;
  };

  const transactions: Transaction[] = [
    {
      id: "TXN-001",
      type: "savings",
      amount: "₦50,000",
      date: "2025-01-15",
      description: "Quick save from main balance",
      fullId: "TXN-20250115-001-ABC123",
      fullDateTime: "January 15, 2025 at 2:30 PM",
    },
    {
      id: "TXN-002",
      type: "withdrawal",
      amount: "₦25,000",
      date: "2025-01-14",
      description: "Withdrawal from savings account",
      fullId: "TXN-20250114-002-DEF456",
      fullDateTime: "January 14, 2025 at 10:15 AM",
    },
    {
      id: "TXN-003",
      type: "savings",
      amount: "₦100,000",
      date: "2025-01-13",
      description: "External payment via Paystack",
      fullId: "TXN-20250113-003-GHI789",
      fullDateTime: "January 13, 2025 at 4:45 PM",
    },
    {
      id: "TXN-004",
      type: "withdrawal",
      amount: "₦75,000",
      date: "2025-01-12",
      description: "Emergency withdrawal from investment",
      fullId: "TXN-20250112-004-JKL012",
      fullDateTime: "January 12, 2025 at 9:20 AM",
    },
    {
      id: "TXN-005",
      type: "savings",
      amount: "₦30,000",
      date: "2025-01-11",
      description: "Daily savings contribution",
      fullId: "TXN-20250111-005-MNO345",
      fullDateTime: "January 11, 2025 at 6:00 PM",
    },
    {
      id: "TXN-006",
      type: "withdrawal",
      amount: "₦40,000",
      date: "2025-01-10",
      description: "Scheduled withdrawal from savings",
      fullId: "TXN-20250110-006-PQR678",
      fullDateTime: "January 10, 2025 at 11:30 AM",
    },
  ];

  const displayTransactions = showAll ? transactions : transactions.slice(0, 5);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareReceipt = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Transaction Receipt',
        text: `Transaction ID: ${selectedTransaction?.fullId}\nAmount: ${selectedTransaction?.amount}\nDate: ${selectedTransaction?.fullDateTime}`,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard(`Transaction ID: ${selectedTransaction?.fullId}\nAmount: ${selectedTransaction?.amount}\nDate: ${selectedTransaction?.fullDateTime}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white/90">
          Save today and dont be stranded tomorrow Stay Home Funds is here for you
        </h1>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
          <li>You can save daily</li>
          <li>Intrest are paid daily</li>
          <li>You can withdraw free every 90 days</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <button onClick={openModal} className="text-left rounded-xl border border-orange-200 bg-white p-4 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-800">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-orange-400 dark:bg-gray-800">
              <DollarLineIcon className="size-5 text-gray-800 dark:text-white/90" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Quick save</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Top up your savings</div>
            </div>
          </div>
        </button>

        <button onClick={withdraw.openModal} className="text-left rounded-xl border border-orange-200 bg-white p-4 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-800">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-orange-400 dark:bg-gray-800">
              <DownloadIcon className="size-5 text-gray-800 dark:text-white/90" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Withdraw</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Access funds at intervals</div>
            </div>
          </div>
        </button>

        <button className="text-left rounded-xl border border-orange-200 bg-white p-4 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-brand-800">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-orange-400 dark:bg-gray-800">
              <PlugInIcon className="size-5 text-gray-800 dark:text-white/90" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Settings</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Automate and manage</div>
            </div>
          </div>
        </button>
      </div>

      {/* Transaction History */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white/90">Transaction History</h3>
        <div className="space-y-3">
          {displayTransactions.map((txn) => (
            <button
              key={txn.id}
              onClick={() => {
                setSelectedTransaction(txn);
                receipt.openModal();
              }}
              className="w-full rounded-xl border border-gray-200 p-3 text-left hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex size-8 items-center justify-center rounded-lg ${
                    txn.type === "savings" ? "bg-green-100 dark:bg-green-900/20" : "bg-red-100 dark:bg-red-900/20"
                  }`}>
                    {txn.type === "savings" ? (
                      <DollarLineIcon className="size-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <DownloadIcon className="size-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white capitalize">{txn.type}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{txn.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{txn.amount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{txn.id}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        {transactions.length > 5 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="w-full max-w-md">
        <div className="p-4 md:p-5">
          <div className="mb-3 flex items-start justify-between">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Quick save</h2>
            <button
              onClick={closeModal}
              className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <QuickSaveForm onClose={closeModal} onSubmit={() => {}} />
        </div>
      </Modal>

      <Modal isOpen={withdraw.isOpen} onClose={withdraw.closeModal} className="w-full max-w-md">
        <div className="p-4 md:p-5">
          <div className="mb-3 flex items-start justify-between">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Want to Break your Savings now!</h2>
            <button
              onClick={withdraw.closeModal}
              className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <WithdrawForm
            onClose={withdraw.closeModal}
            currentBalance="₦1,500,000.00"
            nextWithdrawalDate="2025-12-30"
            onSubmit={() => {}}
          />
        </div>
      </Modal>

      {/* Receipt Modal */}
      <Modal isOpen={receipt.isOpen} onClose={receipt.closeModal} className="w-full max-w-md">
        <div className="p-4 md:p-5">
          <div className="mb-3 flex items-start justify-between">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transaction Receipt</h2>
            <button
              onClick={receipt.closeModal}
              className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Transaction ID</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedTransaction.fullId}</span>
                      <button
                        onClick={() => copyToClipboard(selectedTransaction.fullId)}
                        className="inline-flex items-center justify-center rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      >
                        <CopyIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Amount</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedTransaction.amount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Type</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white/90 capitalize">{selectedTransaction.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Date & Time</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedTransaction.fullDateTime}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Description</span>
                    <p className="mt-1 text-sm text-gray-900 dark:text-white/90">{selectedTransaction.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={receipt.closeModal}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Close
                </button>
                <button
                  onClick={shareReceipt}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm text-white hover:bg-brand-600"
                >
                  <PaperPlaneIcon className="size-4" />
                  Share Receipt
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

