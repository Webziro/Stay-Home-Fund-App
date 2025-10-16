import { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import Button from "../../ui/button/Button";

interface InvestFormProps {
  onClose?: () => void;
}

export default function InvestForm({ onClose }: InvestFormProps) {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [duration, setDuration] = useState("");

  const plans = [
    { value: "Fixed", label: "Fixed" },
    { value: "Semi-Emergency", label: "Semi-Emergency" },
    { value: "Philanthropy", label: "Philanthropy" },
  ];

  const planRewards: Record<string, string> = {
    "Fixed": "Earn 21% per year",
    "Semi-Emergency": "Earn 10% after 90 days",
    "Philanthropy": "Earn 50 after 15months",
  };

  const durations = [
    { value: "3", label: "3 months" },
    { value: "6", label: "6 months" },
    { value: "12", label: "12 months" },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API for investing
    if (onClose) onClose();
  };

  const isDisabled = !amount || !plan || !duration;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="plan">Investment Plan</Label>
        <Select
          options={plans}
          placeholder="Select plan"
          onChange={setPlan}
          className="dark:bg-gray-900"
        />
        {plan ? (
          <p className="mt-1.5 text-xs text-success-600 dark:text-success-500">
            {planRewards[plan]}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="duration">Duration</Label>
        <Select
          options={durations}
          placeholder="Select duration"
          onChange={setDuration}
          className="dark:bg-gray-900"
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isDisabled}>
          Invest Now
        </Button>
      </div>
    </form>
  );
}

