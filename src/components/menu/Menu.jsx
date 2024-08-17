import React from 'react';
import './menu.css';

const Menu = () => {
  const menuData = [
    {
      category: 'NonVeg',
      items: [
        { name: 'Chicken Tikka', price: 120 },
        { name: 'Chicken Briyani', price: 120 },
        { name: 'Mutton Briyani', price: 200 },
        { name: 'Vanjaram Fish Fry', price: 180 },
        { name: 'Chicken 65', price: 100 },
        { name: 'Mutton Chukka', price: 240 },
        { name: 'Chicken Chintamani', price: 200 },
      ],
    },
    {
      category: 'Veg',
      items: [
        { name: 'Panner Tikka', price: 120 },
        { name: 'Veg Briyani', price: 120 },
        { name: 'Curd Rice', price: 80 },
        { name: 'Potato Fry', price: 80 },
        { name: 'Gobi 65', price: 100 },
        { name: 'Cauliflower Chukka', price: 180 },
        { name: 'Potato Fries', price: 180 },
      ],
    },
    {
      category: 'Snaks',
      items: [
        { name: 'Paani Poori', price: 100 },
        { name: 'Samosa (5)', price: 100 },
        { name: 'French Fries', price: 120 },
        { name: 'Burger', price: 160 },
        { name: 'Sandwich', price: 100 },
        { name: 'Shawarma', price: 120 },
        { name: 'Momos', price: 200 },
      ],
    },
  ];

  return (


    <>
     <h1 className='menucard' id='menucard'>Menu Card</h1>
    <div className="menu">
       
      {menuData.map((category, index) => (
        <div className="category" key={index}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">{category.category}</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>&#8377; {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </>
  );
};

export default Menu;
