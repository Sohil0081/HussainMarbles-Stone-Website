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
        image: "/CategoryImages/raninbowsandstonemain.webp"
      },
      {
        name: "Natural Stone Cladding",
        type: "Stone-Cladding",
        image: "/CategoryImages/naturalWallStoneCladding.webp"
      },
      {
        name: "Marble & Stone Inlay",
        type: "Stone-Inlay",
        image: "/CategoryImages/whiteMarbleFloralInlay.webp"
      },
      {
        name: "Stone Paving & Cobblestone",
        type: "Stone-Paving",
        image: "/CategoryImages/mintSandstonePaving.webp"
      },
      {
        name: "3D / Decorative Wall Panels",
        type: "Stone-Panel",
        image: "/CategoryImages/3DStoneWallPanel.webp"
      },
      {
        name: "Rocks & Mineral",
        type: "Rocks-Mineral",
        image: "/CategoryImages/agateStone.webp"
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