import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  menuList from './menu.json'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuData:any
  public soupData:any

  

  constructor(private router: Router)
  {
    this.menuData=menuList.menuList;
    this.loadStarter(); 
   }

   starter: Array<any> = [];
   vegsoup: Array<any> = [];
   nonvegsoup: Array<any> = [];
   briyani: Array<any> = [];
   seafoodgravy: Array<any> = [];
   veggravy: Array<any> = [];
   nonveggravy: Array<any> = [];
   nonvegstarters: Array<any> = [];
   vegstarters: Array<any> = [];
   seafoodstarters: Array<any> = [];
   chickenmandhi: Array<any> = [];
   muttonmandhi: Array<any> = [];
   shawaigrillmandhi: Array<any> = [];
   indianbreads: Array<any> = [];
   indiangravy: Array<any> = [];
   indiannonveggravy: Array<any> = [];
   tandoori: Array<any> = [];
   vegrice: Array<any> = [];
   nonvegrice: Array<any> = [];
   vegnoodles: Array<any> = [];
   nonvegnoodles: Array<any> = [];
   eggvarieties: Array<any> = [];
   freshjuice: Array<any> = [];
   milkshake: Array<any> = [];
   milkshakewithicecream: Array<any> = [];
   icecream: Array<any> = [];
   extratouch: Array<any> = [];
   hot: Array<any> = [];
   crushers: Array<any> = [];
   sharjah: Array<any> = [];
   lassi: Array<any> = [];
   specialshakes: Array<any> = [];
   
   
   loadStarter = () => {
    this.starter = [
      {title: 'Shawarma Roil', price: '70.00' },
      {title: 'Shawarma Plate', price: '110.00' },
      {title: 'Spl Shawarma Roll (Without veg)', price: '115.00' },
      {title: 'Spl Shawarma Plate (Without veg)', price: '145.00' },
      {title: 'Mexican Shauuarma Roll (spicg)', price: '135.00' },
      {title: 'Mexican Shawarma Plate (sp)', price: '160.00' },
      {title: 'Grilled Chicken Full', price: '390.00' },
      {title: 'Grilled Chicken Half', price: '200.00' },
      {title: 'Barbecue Chicken Full', price: '400.00' },
      {title: 'Barbecue Chicken Half ', price: '210.00' },
      {title: 'Pepper Barbecue Chicken (F)', price: '420.00' },
      {title: 'Pepper Barbecue Chicken (H)', price: '220.00' },
      {title: 'Alfaham Chicken (Full) Spicy', price: '410.00' },
      {title: 'Alfaham Chicken (Half)', price: '215.00' },
      {title: 'Fish BBQ', price: '000.00' }
    ];
    this.nonvegsoup = [
      {title: 'Chicken Clear Soup', price: '60.00' },
      {title: 'Sweet Corn Chicken Soup', price: '70.00' },
      {title: 'Hot & Sour Chicken Soup', price: '80.00' },
      {title: 'Chicken manchow Soup', price: '80.00' },
      {title: 'Chicken Pepper Soup', price: '80.00' },
      {title: 'Cream of Chicken Soup', price: '90.00' },
      {title: 'mutton Soup (Bone)', price: '90.00' },
      {title: 'Hot Sour mutton Soup', price: '100.00' },
      {title: 'Mutton Pepper Soup', price: '100.00' }
    ];
    this.vegsoup = [
      {title: 'Veg Sweet Corn Soup', price: '50.00' },
      {title: 'Veg Clear Soup', price: '50.00' },
      {title: 'Hot & Sour Veg Soup', price: '60.00' },
      {title: 'Veg Manchow Soup', price: '60.00' },
      {title: 'Mushroom Soup', price: '60.00' },
      {title: 'Cream of Mushroom Soup', price: '80.00' },
      {title: 'Cream of Tomato Soup', price: '80.00' }
    ];
    this.briyani = [
      {title: 'Chicken Biriyani', price: '170.00' },
      {title: 'mutton Biryani', price: '220.00' },
      {title: 'Egg Biriyani', price: '130.00' },
      {title: 'Prawn Biryani', price: '200.00' },
      {title: 'Fish Biriyani', price: '190.00' },
      {title: 'Arabian Spl Chicken Biryani', price: '230.00' },
      {title: 'Plain Biriyani', price: '110.00' }
    ];
    this.seafoodgravy = [
      {title: 'Prawn Manchurian (Gravy)', price: '190.00' },
      {title: 'Chilli Prawn (Gravy)', price: '190.00' },
      {title: 'Garlic Prawn (Gravy)', price: '200.00' },
      {title: 'Ginger Prawn (Gravy)', price: '200.00' },
      {title: 'Chilli Fish (Gravy)', price: '180.00' },
      {title: 'Fish Manchurian (Gravy)', price: '180.00' }      
    ];
    this.veggravy = [
      {title: 'Gobi Manchurian (Gravy)', price: '120.00' },
      {title: 'Paneer Manchurian (Gravy)', price: '140.00' },
      {title: 'Chilli Gobi (Gravy)', price: '130.00' },
      {title: 'Chilli Paneer (Gravy)', price: '140.00' },
      {title: 'Mushroom Manchurian (Gravy)', price: '130.00' }      
    ];
    this.nonveggravy = [
      {title: 'Chilli Chicken (Gravy)', price: '150.00' },
      {title: 'Chicken Manchurian (Gravy)', price: '160.00' },
      {title: 'Garlic Chicken (Gravy)', price: '170.00' },
      {title: 'Ginger Chicken (Gravy)', price: '170.00' }      
    ];
    this.nonvegstarters = [
      {title: 'Chicken 65-1 plate (Boneless)', price: '170.00' },
      {title: 'Chicken Lollipop (6 Pcs Dry)', price: '170.00' },
      {title: 'Chicken Lollipop (6 Pcsjuicy)', price: '190.00' },
      {title: 'Lemon Chicken (Boneless)', price: '170.00' },
      {title: 'Crispy Fry Chicken (BoneLess)', price: '190.00' },
      {title: 'Dragon Chicken (Boneless)', price: '190.00' },
      {title: 'Chilli Chicken (Dry)', price: '140.00' },
      {title: 'Chicken Manchurian (Dry)', price: '150.00' },
      {title: 'Garlic Chicken (Dry)', price: '160.00' },
      {title: 'Ginger Chicken (Dry)', price: '160.00' },
      {title: 'Mutton Papper Fry ', price: '210.00' },
      {title: 'Chicken Papper Fry', price: '170.00' }
    ];
    this.vegstarters = [
      {title: 'Gobi Manchurian (Dry)', price: '110.00' },
      {title: 'Paneer Manchurian (Dry)', price: '130.00' },
      {title: 'Chilli Gobi pry)', price: '120.00' },
      {title: 'Chilli Paneer (Dry)', price: '130.00' },
      {title: 'Mushroom Manchurian (Dry)', price: '120.00' },
      {title: 'Mushroom Pepper Salt (Dry)', price: '120.00' },    
      {title: 'Paneer 65', price: '140.00' },
      {title: 'Mushroom 65', price: '130.00' },
      {title: 'Gobi 65', price: '120.00' }      
    ];
    this.seafoodstarters = [
      {title: 'Fish 65', price: '200.00' },
      {title: 'Fish 65 ', price: '210.00' },
      {title: 'Dragon Prawn', price: '220.00' },
      {title: 'Golden Prawn Fry', price: '240.00' },
      {title: 'Prawn Manchurian (Dry)', price: '180.00' },      
      {title: 'Chilli Prawn (Dry)', price: '180.00' },
      {title: 'Garlic Prawn (Dry)', price: '190.00' },
      {title: 'Ginger Prawn (Dry)', price: '190.00' },
      {title: 'Chilli Fish (Dry)', price: '170.00' },
      {title: 'Fish Manchurian (Dry)', price: '170.00' },
      {title: 'Lemon Fish', price: '200.00' },
      {title: 'Dragon Fish', price: '200.00' },
      {title: 'Prawn Papper Fry', price: '210.00' },
      {title: 'Fish Fingher(6)', price: '250.00' },
      {title: 'Fish tawa Fry(1) (Seasonal)', price: '000.00' },
      {title: 'Fish Tikka (5)', price: '000.00' }      
    ];
    this.chickenmandhi = [
      {title: 'mandhi Full', price: '780.00' },
      {title: 'mandhi Half', price: '410.00' },
      {title: 'Mandhi Quater', price: '210.00' }           
    ];
    this.muttonmandhi = [
      {title: 'mandhi Full', price: '960.00' },
      {title: 'mandhi Half', price: '500.00' }      
    ];
    this.shawaigrillmandhi = [
      {title: 'shawai mandhi Full', price: '820.00' },
      {title: 'shawai mandhi Half', price: '430.00' },
      {title: 'Mandhi rice', price: '120.00' }      
    ];
    this.indianbreads = [
      {title: 'Naan', price: '35.00' },
      {title: 'Butter Naan', price: '40.00' },
      {title: 'Chicken Keema Naan', price: '50.00' },
      {title: 'Mutton Keema Naan', price: '70.00' },
      {title: 'Garlic Naan', price: '45.00' },
      {title: 'Cashew nut Naan', price: '65.00' },
      {title: 'Kashmiri Naan', price: '75.00' },
      {title: 'Kulcha ', price: '30.00' },
      {title: 'Butter Kulcha', price: '35.00' },
      {title: 'Paneer Kulcha', price: '40.00' },
      {title: 'Masala Kulcha', price: '45.00' },
      {title: 'Aalu Parotta', price: '50.00' },
      {title: 'Phalka (2 Pcs Maida)', price: '40.00' },
      {title: 'Lacha Parotta (maida)', price: '40.00' },
      {title: 'Rotti (Wheat)', price: '30.00' },
      {title: 'Rotti Butter (Wheat)', price: '35.00' },
      {title: 'Tandoori Parotta (Wheat)', price: '40.00' },
      {title: 'PhuLka {2 Pcs Wheat)', price: '30.00' },
      {title: 'Pudina Parotta (Wheat)', price: '40.00' }      
    ];
    this.indiangravy = [
      {title: 'Aalu Gobi Masala', price: '150.00' },
      {title: 'Aalu mutter Masala', price: '150.00' },
      {title: 'Green Peas Masala', price: '140.00' },
      {title: 'Kadai Veg Masala', price: '150.00' },
      {title: 'Veg Kurma', price: '140.00' },
      {title: 'mix Veg Curry', price: '150.00' },
      {title: 'Paneer Butter Masala', price: '170.00' },
      {title: ' Kadai Paneer', price: '170.00' },
      {title: 'Mushroom Masala', price: '150.00' },
      {title: 'Dhat Fry', price: '110.00' },
      {title: 'Dhal Tadka', price: '130.00' }        
    ];
    this.indiannonveggravy = [
      {title: 'Chicken Masala', price: '180.00' },
      {title: ' Kadai Chicken Masala', price: '190.00' },
      {title: 'Chicken Tikka Masala (Bonetess)', price: '230.00' },
      {title: 'Pepper Chicken Masala', price: '190.00' },
      {title: 'Chettinad Chicken Masala', price: '200.00' },
      {title: 'Butter Chicken Masala', price: '230.00' },
      {title: 'Hyderabad Chicken Masala', price: '190.00' },
      {title: 'Punjabi Chicken Masala', price: '190.00' },
      {title: 'Chicken mughLai', price: '190.00' },
      {title: 'methi Chicken', price: '200.00' },
      {title: 'Methi Mutton', price: '250.00' },
      {title: 'Mutton Masala', price: '230.00' },
      {title: 'Mutton Pepper Masala', price: '240.00' },
      {title: 'Mutton Chettinad Masala', price: '250.00' },
      {title: 'Kadai Mutton Masata', price: '240.00' },
      {title: 'Mutton Hyderabad Masala', price: '250.00' },
      {title: 'Mutton Punjabi Masala', price: '250.00' },
      {title: 'Mutton Pagan Josh', price: '270.00' },
      {title: 'Prawn Mosaic!', price: '200.00' },
      {title: 'Prawn Chettinad', price: '210.00' },
      {title: 'Prawn Pepper Masala', price: '220.00' },
      {title: 'Fish Masala', price: '190.00' },
      {title: 'Fish Chettinad', price: '210.00' },
      {title: 'Fish Hyderabad Masala', price: '210.00' }      
    ];
    this.tandoori = [
      {title: 'Tandoori Chicken FuLL', price: '370.00' },
      {title: 'Tandoori Chicken Half', price: '190.00' },
      {title: 'Tandoori Chicken 1/4', price: '100.00' },
      {title: 'Chicken Tikka (6 Pcs)', price: '180.00' },
      {title: 'Hariyali Kabab (6 Pcs)', price: '190.00' },
      {title: 'Peshmi Kabab (6 Pcs)', price: '200.00' },
      {title: 'Malai Kabab (6pcs)', price: '190.00' },
      {title: 'Katimirchi Kabab (6 Pcs)', price: '190.00' },
      {title: 'Achari Kabab (6 Pcs)', price: '190.00' },
      {title: 'Tangdi Kabab (2 Pcs)', price: '160.00' },
      {title: 'Kalimi Kabab (2 Pcs)', price: '160.00' },
      {title: 'Wings Kabab (5 pcs)', price: '170.00' },
      {title: 'Arabian Spl mix Kabab (6pcs)', price: '250.00' }      
    ];
    
    this.vegrice = [
      {title: 'Veg Fried Rice', price: '120.00' },
      {title: 'Veg Schezwan Rice (spice)', price: '130.00' },
      {title: 'Mushroom Rice', price: '130.00' },
      {title: 'Mushroom Schezwan Rice', price: '140.00' },
      {title: 'Panneer Rice', price: '130.00' },
      {title: 'Panneer Schezwan Rice', price: '140.00' },
      {title: 'Jeera Rice', price: '90.00' },
      {title: 'Ghee Rice', price: '110.00' },
      {title: 'Veg Pulav', price: '130.00' },
      {title: 'Panneer Pulav', price: '140.00' },
      {title: 'Kashmir Pulav', price: '160.00' }
    ];
    this.nonvegrice = [
      {title: 'Egg Fried Rice', price: '130.00' },
      {title: 'Egg Schezwan Rice (spice)', price: '140.00' },
      {title: 'Chicken Fried Rice', price: '150.00' },
      {title: 'Chicken Schezwan Rice', price: '160.00' },
      {title: 'mutton Rice', price: '190.00' },
      {title: 'Mutton Schezwan Rice', price: '200.00' },
      {title: 'Prawn Rice', price: '170.00' },
      {title: 'Prawn Schezwan Rice', price: '180.00' },
      {title: 'Fish Fried Rice', price: '160.00' },
      {title: 'Fish Schezwan Rice', price: '170.00' },
      {title: 'Mixed Rice', price: '210.00' },
      {title: 'mixed Schezwan Rice', price: '220.00' },
      {title: 'Shanghai Fried Rice', price: '200.00' }
    ];
    this.vegnoodles = [
      {title: 'Veg noodles', price: '110.00' },
      {title: 'Veg Schezwan noodles', price: '120.00' },
      {title: 'Mushroom noodles', price: '120.00' },
      {title: 'Mushroom Schezwan noodles', price: '130.00' },
      {title: 'Paneer noodles', price: '120.00' },
      {title: 'Paneer Schezwan noodles', price: '130.00' },
      {title: 'Veg American chopsi', price: '190.00' }
    ];
    this.nonvegnoodles = [
      {title: 'Egg noodles', price: '120.00' },
      {title: 'Egg Schezwan noodles', price: '130.00' },
      {title: 'Chicken noodles', price: '140.00' },
      {title: 'Chicken Schezwan noodles', price: '150.00' },
      {title: 'mutton noodles', price: '180.00' },
      {title: 'Mutton Schezwan noodles', price: '190.00' },
      {title: 'Prawn noodles', price: '160.00' },
      {title: 'Prawn Schezwan noodles', price: '170.00' },
      {title: 'Fish noodles', price: '150.00' },
      {title: 'Fish Schezwan noodles', price: '160.00' },
      {title: 'Mixed noodles', price: '200.00' },
      {title: 'Mixed Schezwan noodles', price: '210.00' },
      {title: 'Singapore noodles', price: '200.00' },
      {title: 'American Chopsi', price: '240.00' },
      
    ];
    this.eggvarieties = [
      {title: 'Boiled Egg (2 Pcs)', price: '25.00' },
      {title: 'Boiled Egg (1 Piece)', price: '15.00' },
      {title: 'Half Boil', price: '20.00' },
      {title: 'Omelette', price: '40.00' },
      {title: 'Masala Omelette', price: '50.00' }      
    ];
    this.freshjuice = [
      {title: 'Fresh Lime', price: '40.00' },
      {title: 'Lime Salt (soda)', price: '45.00' },
      {title: 'Lime Sweet (soda)', price: '45.00' },
      {title: 'Lime Soda (Sweet & Salt)', price: '50.00' },
      {title: 'mint Lime', price: '50.00' },
      {title: 'mint Lime Ginger', price: '55.00' },
      {title: 'Grape Lime', price: '60.00' },
      {title: 'magic Lime', price: '60.00' },
      {title: 'Sweet Lime', price: '70.00' },      
      {title: 'Water melon', price: '60.00' },
      {title: 'Apple', price: '90.00' },
      {title: 'Grapes', price: '80.00' },
      {title: 'Pineapple', price: '70.00' },
      {title: 'Papaya', price: '70.00' },
      {title: 'Pomegranate', price: '90.00' },
      {title: 'Orange', price: '100.00' }      
    ];
    
    this.milkshake = [
      {title: 'Vannila', price: '90.00' },
      {title: ' Strawberry ', price: '100.00' },
      {title: 'Butterscotch', price: '110.00' },
      {title: 'Pista', price: '110.00' },
      {title: 'Chocolate', price: '130.00' },
    ];
    
    this.milkshakewithicecream = [
      {title: 'Vannila', price: '140.00' },
      {title: 'Strawberry', price: '140.00' },
      {title: 'Butterscotch', price: '150.00' },
      {title: 'Pistha', price: '150.00' },
      {title: 'Chocolate', price: '160.00' }      
    ];
    this.icecream = [
      {title: 'Vannila', price: '70.00' },
      {title: 'Strawberry', price: '70.00' },
      {title: 'Butterscotch', price: '90.00' },
      {title: 'Pistha', price: '90.00' },
      {title: 'Chocolate', price: '90.00' },
      {title: 'Fruit Salad', price: '100.00' },
      {title: 'Fruit + Salad with Ice Cream', price: '130.00' },
      {title: 'Falooda', price: '160.00' },
      {title: 'Arabian SPL Falooda', price: '190.00' }      
    ];
    this.extratouch = [
      {title: 'Kuffus', price: '10.00' },
      {title: 'Extra mayonnaise', price: '25.00' },
      {title: 'Green Salad', price: '30.00' },
      {title: 'French Frys', price: '70.00' }
    ];
    this.hot = [
      {title: 'Tea', price: '20.00' },
      {title: 'Lemon Tea', price: '25.00' },
      {title: 'mint Te', price: '25.00' },
      {title: 'Spl Sulaimani', price: '25.00' },
      {title: 'Coffee', price: '30.00' }      
    ];
    this.crushers = [
      {title: 'Cool Blue', price: '90.00' },
      {title: 'mint Crushers', price: '90.00' },
      {title: 'Strawberry Lime', price: '80.00' },
      {title: 'Green Apple', price: '80.00' }      
    ];
    this.sharjah = [
      {title: 'Plain Sharjah', price: '80.00' },
      {title: 'Chocolate Sharjah', price: '100.00' },
      {title: 'Fruit Sharjah', price: '110.00' },
      {title: 'Special Sharjah', price: '120.00' },
      {title: 'Cherry Sharjah', price: '110.00' },
      {title: 'Sharjah with IceCream', price: '140.00' }      
    ];
    this.lassi = [
      {title: 'Sweet Lassi', price: '70.00' },
      {title: 'Banana Lassi', price: '80.00' },
      {title: 'Pineapple Lassi', price: '80.00' },
      {title: 'Fruit Lassi', price: '80.00' },
      {title: 'mango Lassi', price: '90.00' },
      {title: 'Special Lassi ', price: '100.00' }   
    ];    
    this.specialshakes = [
      {title: 'Tender Coconut', price: '100.00' },
      {title: 'Coconut Boost', price: '110.00' },
      {title: 'Coconut Chocolate', price: '120.00' },
      {title: 'Coconut Oreo', price: '110.00' },
      {title: 'Coconut Gems', price: '120.00' },
      {title: 'Coconut mango', price: '130.00' },
      {title: 'Arabian SPL Coconut', price: '150.00' },
      {title: 'Dry SPL Fruit Shake', price: '170.00' }      
    ];
    
  }

  



  ngOnInit(): void {
  }

}
