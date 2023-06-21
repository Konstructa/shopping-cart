import { useId } from 'react'
import './styles.css'
import { useFilters } from '../../hooks/useFilters';


export const Filters = () => {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId();
    const minCategoryFilterId = useId();


    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: +event.target.value
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

 

    return (
    <section className='filters'>

        <div>
            <label htmlFor={minPriceFilterId}>Min Price</label>
            <input 
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                value={filters.minPrice}
                onChange={handleChangeMinPrice}
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={minCategoryFilterId}>Categoria</label>
            <select id={minCategoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='laptops'>Notebooks</option>
                <option value='smartphones'>Celulares</option>
            </select>
        </div>
    </section>
    )
}
