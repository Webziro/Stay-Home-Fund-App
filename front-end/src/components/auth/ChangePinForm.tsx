import { useState } from "react";
import { Link } from "react-router";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

export default function ChangePinForm() {
  const [showPin, setShowPin] = useState(false);
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!currentPin || !newPin || !confirmPin) {
      // In real app show an error 
      console.warn("Please fill all fields");
      return;
    }
    if (newPin !== confirmPin) {
      console.warn("New PIN and confirmation do not match");
      return;
    }

    // TODO: wire API to change pin
    console.log("Change pin request", { currentPin, newPin });
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Change PIN
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Update your account PIN. Choose a secure 4-digit PIN.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label>Current PIN <span className="text-error-500">*</span></Label>
                <Input value={currentPin} onChange={(e) => setCurrentPin((e.target as HTMLInputElement).value)} type={showPin ? "text" : "password"} placeholder="Enter current PIN" />
              </div>

              <div>
                <Label>New PIN <span className="text-error-500">*</span></Label>
                <Input value={newPin} onChange={(e) => setNewPin((e.target as HTMLInputElement).value)} type={showPin ? "text" : "password"} placeholder="Enter new PIN" />
              </div>

              <div>
                <Label>Confirm New PIN <span className="text-error-500">*</span></Label>
                <Input value={confirmPin} onChange={(e) => setConfirmPin((e.target as HTMLInputElement).value)} type={showPin ? "text" : "password"} placeholder="Confirm new PIN" />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input type="checkbox" checked={showPin} onChange={() => setShowPin(!showPin)} />
                  Show PINs
                </label>
              </div>

              <div>
                <Button type="submit" className="w-full" size="sm">Update PIN</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
