import { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Button from "../../ui/button/Button";

interface QuickSaveFormProps {
  onClose?: () => void;
  onSubmit?: (payload: { amount: number; source: "paystack" | "balance"; pin: string }) => void;
}

export default function QuickSaveForm({ onClose, onSubmit }: QuickSaveFormProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [amount, setAmount] = useState<string>("");
  const [source, setSource] = useState<"paystack" | "balance" | "">("");
  const [pin, setPin] = useState<string>("");
  
  // Simulated savings details - Replace with actual calculation
  // Calculate amounts
  const fee = source === "paystack" ? Number(amount) * 0.015 : 0; // 1.5% for Paystack
  const total = source === "paystack" ? Number(amount) + fee : Number(amount);

  const nextDisabled = !amount || Number(amount) <= 0;
  const sourceDisabled = !source;
  const pinDisabled = !pin || pin.length !== 4;
  const saveDisabled = !source || !pin;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && !nextDisabled) {
      setStep(2);
      return;
    }
    if (step === 2 && !sourceDisabled) {
      setStep(3);
      return;
    }
    if (step === 3 && !pinDisabled) {
      setStep(4);
      return;
    }
    if (step === 4 && !saveDisabled) {
      onSubmit?.({ amount: Number(amount), source: source as "paystack" | "balance", pin });
      onClose?.();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => (prev - 1) as 1 | 2 | 3 | 4);
  };

  return (
    <form onSubmit={handleProceed} className="space-y-4">
      {step === 1 && (
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
      )}

      {step === 2 && (
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

      {step === 3 && (
        <div>
          <Label htmlFor="qs-pin">Enter PIN</Label>
          <Input
            id="qs-pin"
            name="qs-pin"
            type="password"
            placeholder="Enter 4-digit PIN"
            value={pin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 4);
              setPin(value);
            }}
          />
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Amount</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white/90">₦{Number(amount).toLocaleString()}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Source</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white/90">
                  {source === "paystack" ? "External source (Paystack)" : "Main balance"}
                </p>
              </div>
              {source === "paystack" && (
                <div>
                  <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Processing Fee (1.5%)</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white/90">
                    ₦{(Number(amount) * 0.015).toLocaleString()}
                  </p>
                </div>
              )}
              <div className="border-t border-gray-200 pt-3 dark:border-gray-700">
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Total</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white/90">
                  ₦{(source === "paystack" ? Number(amount) * 1.015 : Number(amount)).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 pt-2">
        <div>
          {step > 1 && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={
              (step === 1 && nextDisabled) ||
              (step === 2 && sourceDisabled) ||
              (step === 3 && pinDisabled) ||
              (step === 4 && saveDisabled)
            }
          >
            {step === 4 ? "Confirm" : "Continue"}
          </Button>
        </div>
      </div>
    </form>
  );
}


