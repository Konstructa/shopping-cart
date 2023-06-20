import { useState, useId } from 'react'
import './styles.css'
import { IFilter } from '../../App';

interface IFiltersProps {
    onChange: React.Dispatch<React.SetStateAction<IFilter>>
}

export const Filters = ({ onChange }: IFiltersProps) => {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const minCategoryFilterId = useId();


    const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(+event.currentTarget.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: +event.target.value
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

 

    return (
    <section className='filters'>

        <div>
            <label htmlFor='price'>Min Price</label>
            <input 
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                value={minPrice}
                onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
        </div>

        <div>
            <label htmlFor='category'>Categoria</label>
            <select id={minCategoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='laptops'>Notebooks</option>
                <option value='smartphones'>Celulares</option>
            </select>
        </div>
    </section>
    )
}
