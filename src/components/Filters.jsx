import { useId } from 'react'
import { useContext } from 'react'
import { FilterContext } from '../contexts/Filters'

export function Filters () {
  
  const MIN_PRICE_ID = useId()
  const CATEGORY_ID = useId()
  
  const {filters, setFilters} = useContext(FilterContext)

  const handleChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <div className='filters'>
      <div> 
        <label htmlFor={MIN_PRICE_ID}>Min price</label>
        <input id={MIN_PRICE_ID} type='range' min={0} max={200} step={10} value={filters.minPrice} onChange={handleChange}></input>
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={CATEGORY_ID}>Category</label>
        <select id={CATEGORY_ID} defaultValue={filters.category} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="Front-end">Front-end</option>
          <option value="Back-end">Back-end</option>
        </select>
      </div>
    </div>
  )
}