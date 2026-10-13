export interface Product {
  id: string
  slug: string
  title: string
  description: string
  images: string[]
}

export interface Price {
  amountCents: number
  currency: string
  inStock: boolean
}
