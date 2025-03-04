import { useState } from "react";

// Define the structure of an account 
interface Account {
  name: string;
  amount: number;
}

const BalanceCard = () => {
  // State to store account balances (initializing with 4 accounts)
  const [accounts, setAccounts] = useState<Account[]>(
    new Array(4).fill(0).map(() => ({ name: "Main account", amount: 413 }))
  );

  // Function to increase the balance of a specific account
  const handleIncrement = (index: number) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account, i) =>
        i === index ? { ...account, amount: account.amount + 10 } : account
      )
    );
  };

  // Function to decrease the balance of a specific account (ensures it doesn't go below 0)
  const handleDecrement = (index: number) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account, i) =>
        i === index && account.amount > 0
          ? { ...account, amount: account.amount - 10 }
          : account
      )
    );
  };

  // Calculate the total balance by summing all account amounts
  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.amount,
    0
  );

  return (
    <div className="w-full bg-white drop-shadow-[0_22px_40px_rgba(142,151,164,0.19)] rounded-[11px] p-10 ">
      <p className="text-[#404650] text-[18px] font-semibold leading-[23px] ">
        Balances
      </p>
      <p className="text-[#404650] text-[33px] font-semibold leading-[42px]">
        ${totalBalance.toLocaleString()}
      </p>

      {/* Account List Section */}
      <div className="py-8">
        {accounts.map((account, index) => (
          <div key={index}>
            {/* Divider between account rows (not for the first item) */}
            {index !== 0 && <hr className="border-[#F1F4F5] my-6" />}
            <div className="flex items-center justify-between">
              <p className="text-[#404650] text-[16px] font-normal">
                {account.name}
              </p>

              {/* Balance Controls (Minus, Amount, Plus) */}
              <div className="flex items-center gap-2">
                <img
                  src="/minus.svg"
                  alt="minus"
                  className="w-8 cursor-pointer"
                  onClick={() => handleDecrement(index)}
                />
                <p className="text-[#404650] text-[16px]">${account.amount}</p>
                <img
                  src="/plus.svg"
                  alt="plus"
                  className="w-8 cursor-pointer"
                  onClick={() => handleIncrement(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceCard;
