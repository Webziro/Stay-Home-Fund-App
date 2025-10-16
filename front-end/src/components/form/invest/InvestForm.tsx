import { useState } from "react";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import Button from "../../ui/button/Button";
import { FolderIcon, AngleLeftIcon, ArrowRightIcon } from "../../../icons";

interface InvestFormProps {
  onClose?: () => void;
}

export default function InvestForm({ onClose }: InvestFormProps) {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const [duration, setDuration] = useState("");
  const [showBag, setShowBag] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);

  type Investment = {
    id: string;
    name: string;
    type: string;
    dateMade: string;
    maturityDate: string;
    maturityTime: string;
    totalExpectedReturns: string;
  };

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

  const investments: Investment[] = [
    {
      id: "inv-001",
      name: "SHF Fixed 2025A",
      type: "Fixed",
      dateMade: "2025-01-14",
      maturityDate: "2026-01-14",
      maturityTime: "10:30 AM",
      totalExpectedReturns: "N100,000 on N1,000,000 (21%/yr)",
    },
    {
      id: "inv-002",
      name: "Emergency Flex Q2",
      type: "Semi-Emergency",
      dateMade: "2025-05-10",
      maturityDate: "2025-08-08",
      maturityTime: "09:00 AM",
      totalExpectedReturns: "N100,000 after 90 days on N1,000,000 (10%)",
    },
    {
      id: "inv-003",
      name: "Give Back Fund",
      type: "Philanthropy",
      dateMade: "2024-07-01",
      maturityDate: "2025-10-01",
      maturityTime: "04:15 PM",
      totalExpectedReturns: "N1,000,000 on N10,000,000 after 15 months",
    },
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-900 dark:text-white/90">Investment</div>
        <button
          type="button"
          onClick={() => { setShowBag(true); setSelectedInvestment(null); }}
          className="inline-flex items-center justify-center gap-2 rounded-lg transition px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg:white/[0.03] dark:hover:text-gray-300"
        >
          <FolderIcon color="orange" className="size-4" />
          See Bag
        </button>
      </div>

      {showBag ? (
        selectedInvestment ? (
          <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedInvestment(null)}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <AngleLeftIcon className="size-4" /> Back to list
              </button>
              <button
                type="button"
                onClick={() => setShowBag(false)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Investment Name</p>
                <p className="text-sm font-medium text-gray-900 dark:text:white/90">{selectedInvestment.name}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Type</p>
                <p className="text-sm font-medium text-gray-900 dark:text:white/90">{selectedInvestment.type}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Date Made</p>
                  <p className="text-sm font-medium text-gray-900 dark:text:white/90">{selectedInvestment.dateMade}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Maturity Date</p>
                  <p className="text-sm font-medium text-gray-900 dark:text:white/90">{selectedInvestment.maturityDate} • {selectedInvestment.maturityTime}</p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Total Expected Returns</p>
                <p className="text-sm font-medium text-gray-900 dark:text:white/90">{selectedInvestment.totalExpectedReturns}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {investments.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedInvestment(item)}
                className="w-full rounded-xl border border-gray-200 p-3 text-left hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300 dark:border-gray-800 dark:hover:border-brand-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.type} • Made {item.dateMade}</div>
                  </div>
                  <ArrowRightIcon className="size-4 text-gray-400" />
                </div>
              </button>
            ))}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowBag(false)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        )
      ) : (
        <>
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
        </>
      )}
    </form>
  );
}
