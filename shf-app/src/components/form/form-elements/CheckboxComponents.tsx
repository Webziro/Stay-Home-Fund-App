export default function CheckboxComponents() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Checkboxes</h3>
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <input type="checkbox" className="size-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-700" defaultChecked />
          Receive notifications
        </label>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <input type="checkbox" className="size-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-700" />
          Enable two-factor auth
        </label>
        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <input type="checkbox" className="size-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-700" />
          Subscribe to newsletter
        </label>
      </div>
    </div>
  );
}


