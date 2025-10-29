import Transactions from "../../components/all-transactions/Transactions";
import MonthlyTarget from "../../components/all-transactions/MonthlyTarget";
import RecentTransactions from "../../components/all-transactions/RecentTranactions";
import PageMeta from "../../components/common/PageMeta";
import Greeting from "../../components/header/Greeting";
import AccountType from "../../components/header/AcccoutType";
import AvailableBalance from "../../components/header/AvailableBalance";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Stay Home Fund Dashboard | SHF - Grow your money with us!"
        description="This is Stay Home Fund Dashboard - Grow your money with us!"
      />
    
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <AvailableBalance />
        </div>
        <div className="flex-shrink-0">
          <AccountType />
        </div>
      </div>

      <Greeting />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <Transactions />
          <RecentTransactions/>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>
      </div>
    </>
  );
}
