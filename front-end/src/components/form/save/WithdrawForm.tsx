import { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import Button from "../../ui/button/Button";

interface WithdrawFormProps {
  onClose?: () => void;
  currentBalance?: string;
  nextWithdrawalDate?: string;
  onSubmit?: (payload: {
    amount: number;
    from: "saving" | "investment";
    pin: string;
  }) => void;
}

export default function WithdrawForm({
  onClose,
  currentBalance = "₦0.00",
  nextWithdrawalDate = "—",
  onSubmit,
}: WithdrawFormProps) {
  const [amount, setAmount] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const isDisabled = !amount || Number(amount) <= 0 || !from || pin.length !== 4;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;
    onSubmit?.({ amount: Number(amount), from: from as "saving" | "investment", pin });
    onClose?.();
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="rounded-xl border border-gray-200 p-3 text-sm dark:border-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Current balance</span>
          <span className="font-medium text-gray-900 dark:text-white/90">{currentBalance}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Next withdrawal</span>
          <span className="font-medium text-gray-900 dark:text-white/90">{nextWithdrawalDate}</span>
        </div>
      </div>

      <div>
        <Label htmlFor="wd-amount">Amount to withdraw</Label>
        <Input
          id="wd-amount"
          name="wd-amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label>From</Label>
          <Select
            options={[
              { value: "saving", label: "Saving" },
              { value: "investment", label: "Investment" },
            ]}
            placeholder="Choose source"
            onChange={setFrom}
            className="dark:bg-gray-900"
          />
        </div>
        <div>
          <Label htmlFor="wd-pin">PIN</Label>
          <Input
            id="wd-pin"
            name="wd-pin"
            type="password"
            placeholder="4-digit PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isDisabled}>
          Withdraw
        </Button>
      </div>
    </form>
  );
}


