// PRACA DOMOWA - przemodelować typ

// do czego zdolne są unie 😱

// możemy w czasie kompilacji zwalidować poprawność danych
// ALE
// muszą być literałami - muszą być znane w czasie kompilacji
// (jak będą znane dopiero w runtime, to za późno - wiadomo)



type Country = 'PL' | 'DE' | 'FR' | 'UK'

type Tax_PL = 0 | 0.05 | 0.08 | 0.23 // 0%, 5%, 8%, 23%
type Tax_DE = 0 | 0.07 | 0.19 // 0%, 7%, 19%
type Tax_FR = 0 | 0.021 | 0.055 | 0.1 | 0.2 // 0%, 2.1%, 5.5%, 10%, 20%
type Tax_UK = 0 | 0.05 | 0.20 // 0%, 5%, 20%

type Tax<T> = T extends "PL" ? Tax_PL : T extends "DE" ? Tax_DE : T extends "FR" ? Tax_FR : Tax_UK;

// ten typ jest za szeroki...
// bo pozwala na połączenie dowolnej stawki podatku z dowolnym krajem
// a chcemy, aby dopuszczalne były tylko te
type PurchaseGeneric<T> = {
  country: T
  vatTax: Tax<T>
  name: string
  netPrice: number
}

type Purchase = PurchaseGeneric<"PL"> | PurchaseGeneric<"DE"> | PurchaseGeneric<"FR"> | PurchaseGeneric<"UK">

const purchases: Purchase[] = [{
  country: 'PL',
  vatTax: 0.05,
  name: 'dumplings',
  netPrice: 100,
}, {
  country: 'DE',
  vatTax: 0.1,
  name: 'bawarian beer',
  netPrice: 200,
}, {
  country: 'FR',
  vatTax: 0.055,
  name: 'frogs',
  netPrice: 300,
}, {
  country: 'UK',
  vatTax: 0.23,
  name: 'eggs & bacon',
  netPrice: 400,
}]