import { DollarLineIcon, DownloadIcon, PlugInIcon } from "../../icons";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import QuickSaveForm from "../../components/form/save/QuickSaveForm";
import WithdrawForm from "../../components/form/save/WithdrawForm";

export default function SaveMoney() {
  const { isOpen, openModal, closeModal } = useModal(false);
  const withdraw = useModal(false);
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
    </div>
  );
}

