import { useState, useCallback } from "react";
import ComponentCard from "../../common/ComponentCard";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";
import { useModal } from "../../../hooks/useModal";
import TranxConfirmation from "./TranxConfirmation";
export default function InputStates() {
  const [email, setEmail] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [error, setError] = useState(false);
  const { isOpen: showConfirm, openModal: openConfirm, closeModal: closeConfirm } = useModal(false);

  // Simulate a validation check
  const validateEmail = (value: string) => {
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const handleEmailTwoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailTwo(value);
    validateEmail(value);
  };
  const onBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) closeConfirm();
    },
    [closeConfirm]
  );
  const handleTransfer = () => {
    openConfirm();
  };
  const handleProceed = () => {
    // Handle final transfer logic here
    closeConfirm();
  };
  return (
    <>
    <ComponentCard
      title="Transfer to Other Banks "
      desc="Transfer money to other Banks Account"
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>Account Number</Label>
          <Input
            type="text"
            error={error}
            onChange={handleEmailChange}
            placeholder="Enter 10 digits Account Number"
            hint={error ? "This is an invalid Account address." : ""}
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>Amount</Label>
          <Input
            type="text"
            onChange={handleEmailTwoChange}
            placeholder="Enter Amount to Transfer"
          />
        </div>

        <div>
          <Label>Note: Optional</Label>
          <Input
            type="text"
            placeholder="Transfer Description"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleTransfer}
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-brand-500 dark:hover:bg-brand-600"
          >
            Transfer Now
          </button>
        </div>
      </div>
    </ComponentCard>

    {showConfirm ? (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 dark:bg-black/60 px-4"
        onMouseDown={onBackdropClick}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 md:p-5">
          <div className="flex items-start justify-between">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Confirm Transfer</h2>
            <button
              type="button"
              onClick={closeConfirm}
              className="ml-3 inline-flex size-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:text-gray-400 dark:hover:bg-white/10"
              aria-label="Close"
            >
              ×
            </button>
          </div>

        {/* Confirm Transfer */}
           <TranxConfirmation/>
        </div>
      </div>
    ) : null}
    </>
  );
}
