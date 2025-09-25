//Account type component as a header with a badge with the account type: Coporate, Elite, Standard or Individual
import { useState } from "react";   
import Badge from "../ui/badge/Badge";
export default function AccountType() {
  return (
    <h1 className="py-1 sm:py-2 text-gray-900 dark:text-white">
      <Badge variant="light" color="primary">
        Account Type : Corporate
      </Badge>
    </h1>
  );
}
