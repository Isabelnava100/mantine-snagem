
import { TodoState } from "./interfaces";

export const INITIAL_STATE:TodoState= {
  
  AllMarketplaces: [{
    storeID:1,
    storeName:'The Roll',
    stock:[{
      itemID:1,
      price:1000,
      discount:50,
      quantity:2
    }]
  },{
    storeID:2,
    storeName:'The Ram',
    stock:[{
      price:1000,
      discount:50,
      itemID:2,
      quantity:2
    
    }]
  }]
}