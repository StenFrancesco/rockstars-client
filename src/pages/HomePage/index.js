//module imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "../../components/Category/style.css"


//component imports
import Category from "../../components/Category"

//store imports
import { selectCategories } from "../../store/categories/selectors"
import { fetchCategories } from "../../store/categories/actions"

//Bootstrap imports
import Jumbotron from "react-bootstrap/Jumbotron"
import CardGroup from "react-bootstrap/CardGroup"
import { CardDeck } from 'react-bootstrap'

export default function HomePage() {

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  console.log("categories is:", categories)

  return (
    <div>
      <Jumbotron>
        <h1>Categories
      </h1>
      </Jumbotron>
      <div className="box">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>




    </div>
  )
}