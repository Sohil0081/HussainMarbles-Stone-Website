  import React from "react";
  import { useNavigate } from "react-router-dom";
  import CategoryCard from "./CategoryCard";
  import "./Category.css";

  function Category() {

    const navigate = useNavigate();

    const categories = [
      {
        name: "Sandstone & Texture Stone",
        type: "Sandstone",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHqWmtDmnkUEDkU9sYYJ49km94Uvi4UuLYfAW-bJl-ZJuSi-7kJ83VY3q&s=10"
      },
      {
        name: "Natural Stone Cladding",
        type: "Stone-Cladding",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lb2C94rZ1zgVTKsGS-DYNN0Xw_Ad-9UhwzwpQPLZQ6IDHJmghxGyeqA&s=10"
      },
      {
        name: "Marble & Stone Inlay",
        type: "Stone-Inlay",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/11/RP/IZ/DE/421061/stone-inlay-pietra-dura-marble-inlay-500x500.jpg"
      },
      {
        name: "Stone Paving & Cobblestone",
        type: "Stone-Paving",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMrgO6wjb2FDvnKdap453XuMQeq23CIdjWzoAN4kFdWF3zjLNg7r7Oe_w&s=10"
      },
      {
        name: "3D / Decorative Wall Panels",
        type: "Decorative-Wall-Panels",
        image: "https://woodywalls.com/wp-content/uploads/2026/05/8-5-476x476.webp"
      },
      {
        name: "Rocks & Mineral",
        type: "Rocks-Mineral",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx06wLzHoT673EGsOJ_5femjjp23zEgrekZ7saS3t2ExgcLxhoND-cMA&s=10"
      }
    ];

    return (
      <>
        <div className="heading"><h1>Category</h1></div>

        <div className="category-container">

          {categories.map((category) => (

            <CategoryCard
              key={category.type}
              name={category.name}
              image={category.image}
              onClick={() =>
                navigate(`/products/${category.type}`)
              }
            />

          ))}

        </div>
      </>
    );
  }

  export default Category;