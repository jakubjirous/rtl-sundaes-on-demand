export enum OptionType {
  TOPPINGS = "toppings",
  SCOOPS = "scoops",
}

type OptionTypeKeys = keyof typeof OptionType;
type OptionTypeKeysNumberFields = {
  [key in Lowercase<OptionTypeKeys>]: number;
};
type OptionTypeKeysMapFields = {
  [key in Lowercase<OptionTypeKeys>]: Map<string, number>;
};

export type CtxOptionCount = OptionTypeKeysMapFields;

export interface CtxTotal extends OptionTypeKeysNumberFields {
  grandTotal: number;
}

export type CtxPricePerItem = OptionTypeKeysNumberFields;

export interface OrderDetailsContextType {
  orderDetails: {
    totals: CtxTotal;
  };
  updateItemCount: (
    itemName: string,
    newItemCount: number,
    optionType: OptionType
  ) => void;
}
