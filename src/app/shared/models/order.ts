import { ShoppingCart } from './shopping-cart';
export class Order {

  datePlaced: string;
  items: any[];
  netPrice: number;
  user: {
    username: string,
    userId: string,
    email: string
  };

  constructor(userId, userName,Email,
    public shipping: any, carts: ShoppingCart) {

    // this.datePlaced = new Date().getTime();
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    this.datePlaced = dateTime;
    this.items = carts.items.map(item => {
      return {
        product: {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price
        },
        qty: item.qty,
        price: item.price,
        totalPrice: item.totalPrice
      };
    });

    this.user = {
      userId: userId,
      username: userName,
      email: Email
    };
    this.netPrice = carts.totalPrice;


  }
}
