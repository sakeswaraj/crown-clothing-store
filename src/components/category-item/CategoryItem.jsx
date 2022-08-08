import { Link } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className='category-item-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Link to={`shop/${title}`}>
                <div className='category-item-body-container'>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;