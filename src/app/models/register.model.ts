export interface RegisterModel {
    email:string;
    name: {
    firstname: string;
    lastname: string;
  };
     adress: {city:string;
     street:string;
     number:string;
     zipcode:string;};
   password: string;
   phone: string;
   username: string;
}
