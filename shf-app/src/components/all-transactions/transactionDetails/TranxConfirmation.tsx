import { useCallback, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import InputPin from "./InputPin";

export default function TranxConfirmation() {
  const { closeModal } = useModal(false);
  const { isOpen: showPinModal, openModal: openPinModal, closeModal: closePinModal } = useModal(false);
  const [pin, setPin] = useState("");
  const onBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closeModal();
    },
    [closeModal]
  );
  const handleProceed = () => {
    openPinModal();
  };
  
  const handlePayNow = () => {
    // Handle payment logic here
    closePinModal();
    closeModal();
  };
  
  const onPinBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closePinModal();
    },
    [closePinModal]
  );

  return (
    <div className="mt-4 space-y-3">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Bank:</span>
            <span className="font-medium text-gray-900 dark:text-white">Stay Home Funds</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Account:</span>
            <span className="font-medium text-gray-900 dark:text-white">1203451290</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Verified Name:</span>
            <span className="font-medium text-gray-900 dark:text-white">Stanley Amaziro</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Amount:</span>
            <span className="font-medium text-gray-900 dark:text-white">N100,000,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Fee:</span>
            <span className="font-medium text-gray-900 dark:text-white">N5</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Account Balance:</span>
            <span className="font-medium text-gray-900 dark:text-white">N10,000,000</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={closeModal}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleProceed}
          className="flex-1 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600"
        >
          Proceed
        </button>
      </div>
      

      {/* PIN Input Modal */}
      <InputPin 
        isOpen={showPinModal} 
        onClose={closePinModal} 
        onPayNow={handlePayNow} 
      />
    </div>
  );
}