type Invoice = {
  number: string,
  date: Date
  positions: {
    name: string
    price: number
    quantity: number
  }[]
  rebate: number
}

type Bill = {
  date: Date
  totalPrice: number
}

type DebtPayment = { amount: number; due: Date }

type CompanyPurchase = Invoice | Bill | DebtPayment

const getPrice = (purchase: CompanyPurchase): number => {
  // implementation here...
  if (purchase)
  purchase
}

// 🔥 a potem rozszerzamy Unię o trzeci typ, np.
// type DebtPayment = { amount: number; due: Date }
