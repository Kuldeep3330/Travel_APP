import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCategory, useFilter } from '../../context'
import Carousal from '@itseasy21/react-elastic-carousel'
import './Categories.css'

export const Categories = () => {
  const [categories, setCategories] = useState([])
  const { hotelCategory, setHotelCategory } = useCategory()

  // const [numberOfCategories, setNumberOfCategories]= useState(0)

  const { filterDispatch } = useFilter()

  const handleFilterClick = () => {
    filterDispatch({
      type: 'SHOW_FILTER_MODAL',
    })
  }

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('/api/v1/category')

        // const categoriesToshow= data.slice(0, 10);
        // setCategories(categoriesToshow)

        setCategories(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const handleCategoryClick = (category) => {
    console.log(category);
    
    setHotelCategory(category)
  }

  return (
    <section className="categories d-flex gap">
      <Carousal
        className="carousel"
        itemsToShow={9}
        itemsToScroll={6}
        pagination={false}
      >
        {categories &&
          categories.map(({ _id, category }) => (
            <span
              key={_id}
              className={`${
                category === hotelCategory ? 'category-color' : ''
              } item`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
      </Carousal>
      <div>
        <button
          className="button btn-filter d-flex align-center gap-small cursor-pointer"
          onClick={handleFilterClick}
        >
          <span className="material-icons-outlined">filter_alt</span>
          <span>Filter</span>
        </button>
      </div>
    </section>
  )
}
