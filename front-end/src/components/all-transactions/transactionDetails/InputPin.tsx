import { useCallback, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface InputPinProps {
  isOpen: boolean;
  onClose: () => void;
  onPayNow?: () => void;
}

export default function InputPin({ isOpen, onClose, onPayNow }: InputPinProps) {
  const [pin, setPin] = useState("");
  
  const onPinBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) onClose();
    },
    [onClose]
  );
  
  const handlePayNow = () => {
    if (onPayNow) onPayNow();
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 dark:bg-black/60 px-4"
          onMouseDown={onPinBackdropClick}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 md:p-5">
            <div className="flex items-start justify-between">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">Input Pin to Pay</h2>
              <button
                type="button"
                onClick={onClose}
                className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
                aria-label="Close"
              >
                ×
              </button>
            </div>
    
            <div className="mt-4 space-y-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Amount: N1,000,000</p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Account Pin"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-300 focus:border-brand-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500"
                  maxLength={6}
                />
              </div>
              
              <button
                type="button"
                onClick={handlePayNow}
                className="w-full rounded-lg bg-brand-600 px-4 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}