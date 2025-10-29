import { useState } from "react";   
import Badge from "../ui/badge/Badge";
import { EyeIcon, EyeCloseIcon } from "../../icons";

const AvailableBalance = () => {
    const [isAmountVisible, setIsAmountVisible] = useState(true);
    const availableBalance = 1_000_000;

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

    return (
        <div className="flex items-center gap-3">
            <div>
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Available Balance</h2>
                <Badge>
                    {isAmountVisible ? `₦${availableBalance.toLocaleString()}` : "****"}
                </Badge>
            </div>

            <button
                type="button"
                onClick={toggleAmountVisibility}
                aria-label={isAmountVisible ? "Hide available balance" : "Show available balance"}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
                {isAmountVisible ? (
                    <EyeIcon className="fill-gray-600 dark:fill-gray-300 size-5" />
                ) : (
                    <EyeCloseIcon className="fill-gray-600 dark:fill-gray-300 size-5" />
                )}
            </button>
        </div>
    );
};

export default AvailableBalance;
