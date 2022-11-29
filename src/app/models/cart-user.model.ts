export interface CartUserModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  products:
    [{
      productId: number;
      quantity: number;
    }] ;
}
