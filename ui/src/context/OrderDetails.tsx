import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PricePerItem } from "./constancts";
import {
  CtxOptionCount,
  CtxTotal,
  OptionType,
  OrderDetailsContextType,
} from "./type";

export const OrderDetailsContext =
  createContext<OrderDetailsContextType | null>(null);

export function useOrderDetailsContext() {
  const context = useContext(OrderDetailsContext);

  if (!context) {
    throw new Error(
      "useOrderDetails must be used within an OrderDetailsProvider"
    );
  }

  return context;
}

// format number as currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function calculateSubTotal(
  optionType: OptionType,
  optionCounts: CtxOptionCount
): number {
  let optionCount = 0;

  // @ts-ignore
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * PricePerItem[optionType];
}

export function OrderDetailsProvider(props: any) {
  const [optionCounts, setOptionCounts] = useState<CtxOptionCount>({
    scoops: new Map<string, number>(),
    toppings: new Map<string, number>(),
  });

  const [totals, setTotals] = useState<CtxTotal>({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const scoopsSubTotal = calculateSubTotal(OptionType.SCOOPS, optionCounts);
    const toppingsSubTotal = calculateSubTotal(
      OptionType.TOPPINGS,
      optionCounts
    );
    const grandTotal = scoopsSubTotal + toppingsSubTotal;

    setTotals({
      scoops: scoopsSubTotal,
      toppings: toppingsSubTotal,
      grandTotal,
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(
      itemName: string,
      newItemCount: number,
      optionType: OptionType
    ) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];

      optionCountsMap.set(itemName, newItemCount);

      setOptionCounts(newOptionCounts);
    }

    // getter: object containing option counts for scoop and toppings, subtotals, total
    // setter: updateOptionCount
    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);

  return <OrderDetailsContext.Provider value={value} {...props} />;
}
