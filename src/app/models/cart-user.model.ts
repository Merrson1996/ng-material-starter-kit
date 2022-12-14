export interface CartUserModel {
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  products:
    [{
      productId: string;
      quantity: string;
    }] ;
  readonly __v:string;
}
