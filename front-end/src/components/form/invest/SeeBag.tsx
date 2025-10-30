import { FC, useState } from 'react';
import { AngleLeftIcon, ArrowRightIcon } from '../../../icons';

interface Investment {
  id: string;
  name: string;
  type: string;
  dateMade: string;
  maturityDate: string;
  maturityTime: string;
  totalExpectedReturns: string;
}

interface SeeBagProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const demoInvestment: Investment = {
  id: '1',
  name: 'High Yield Investment',
  type: 'Fixed',
  dateMade: '2025-10-30',
  maturityDate: '2026-10-30',
  maturityTime: '12 months',
  totalExpectedReturns: '₦120,000'
};

const SeeBag: FC<SeeBagProps> = ({ isVisible = false, onClose }) => {
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [investments] = useState<Investment[]>([demoInvestment]);

  if (!isVisible) return null;

  const handleClose = () => {
    setSelectedInvestment(null);
    onClose?.();
  };

  return (
    <div className="w-full">
      {selectedInvestment ? (
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
              onClick={handleClose}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Investment Name</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedInvestment.name}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Type</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedInvestment.type}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Date Made</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedInvestment.dateMade}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Maturity Date</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white/90">
                  {selectedInvestment.maturityDate} • {selectedInvestment.maturityTime}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Total Expected Returns</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white/90">{selectedInvestment.totalExpectedReturns}</p>
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
              onClick={handleClose}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeBag;