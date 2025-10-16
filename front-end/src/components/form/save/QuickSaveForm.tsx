import { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Button from "../../ui/button/Button";

interface QuickSaveFormProps {
  onClose?: () => void;
  onSubmit?: (payload: { amount: number; source: "paystack" | "balance" }) => void;
}

export default function QuickSaveForm({ onClose, onSubmit }: QuickSaveFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [amount, setAmount] = useState<string>("");
  const [source, setSource] = useState<"paystack" | "balance" | "">("");

  const nextDisabled = !amount || Number(amount) <= 0;
  const saveDisabled = !source;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!nextDisabled) setStep(2);
      return;
    }
    if (step === 2 && !saveDisabled) {
      onSubmit?.({ amount: Number(amount), source: source as "paystack" | "balance" });
      onClose?.();
    }
  };

  return (
    <form onSubmit={handleProceed} className="space-y-4">
      {step === 1 ? (
        <div>
          <Label htmlFor="qs-amount">Amount</Label>
          <Input
            id="qs-amount"
            name="qs-amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-900 dark:text-white/90">Select source</div>
          <button
            type="button"
            onClick={() => setSource("paystack")}
            className={`w-full rounded-xl border p-3 text-left focus:outline-none focus:ring-2 ${
              source === "paystack"
                ? "border-brand-300 ring-brand-300 dark:border-brand-700"
                : "border-gray-200 hover:border-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
            }`}
          >
            <div className="font-medium text-gray-900 dark:text-white">External source (Paystack)</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Use card, bank, or wallet via Paystack</div>
          </button>

          <button
            type="button"
            onClick={() => setSource("balance")}
            className={`w-full rounded-xl border p-3 text-left focus:outline-none focus:ring-2 ${
              source === "balance"
                ? "border-brand-300 ring-brand-300 dark:border-brand-700"
                : "border-gray-200 hover:border-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
            }`}
          >
            <div className="font-medium text-gray-900 dark:text-white">Main balance</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Deduct from your SHF main balance</div>
          </button>
        </div>
      )}

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        {step === 1 ? (
          <Button disabled={nextDisabled}>
            Continue
          </Button>
        ) : (
          <Button disabled={saveDisabled}>
            Save
          </Button>
        )}
      </div>
    </form>
  );
}


