export type ProductType = {
  name: string;
  price: number;
  description: string;
  tags?: string;
  image?: File | undefined;
}

export type ProductWithId = ProductType & { id: string | number }

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;