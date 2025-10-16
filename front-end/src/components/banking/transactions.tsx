import { useCallback } from "react";
import { BoxIconLine, GroupIcon } from "../../icons";
import { useModal } from "../../hooks/useModal";

export default function EcommerceMetrics() {
  const { isOpen, openModal, closeModal } = useModal(false);
  const onBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closeModal();
    },
    [closeModal]
  );

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {/* <!-- Item: Send Money --> */}
      <button
        type="button"
        onClick={openModal}
        className="text-left rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/\[0.03\] hover:border-brand-200 dark:hover:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800">
            <GroupIcon className="text-gray-800 size-4 dark:text-white/90" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            Send Money
          </span>
        </div>
      </button>

      {/* <!-- Item: Invest Money using modal invest form --> */}
      <button type="button" onClick={openModal}
       className="text-left rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/\[0.03\] hover:border-brand-200 dark:hover:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300">
        <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/\[0.03\]">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <BoxIconLine className="text-gray-800 size-4 dark:text-white/90" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              Invest Money
            </span>
          </div>
        </div>
      </button>

      {/* <!-- Item: Save Money --> */}
      <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/\[0.03\]">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-800">
            <BoxIconLine className="text-gray-800 size-4 dark:text-white/90" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            Save Money
          </span>
        </div>
      </div>


      {/* Modal for send money */}
      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 dark:bg-black/60 px-4"
          onMouseDown={onBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 md:p-5">
            <div className="flex items-start justify-between">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Send Money</h2>
              <button
                type="button"
                onClick={closeModal}
                className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <button
                type="button"
                className="w-full rounded-xl border border-gray-200 p-3 text-left hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  Send to Stay Home Funds Account
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Free and instant
                </div>
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-gray-200 p-3 text-left hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  Send to other Bank Accounts
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Free and instant 
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}