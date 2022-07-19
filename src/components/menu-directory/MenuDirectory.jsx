
import CategoryItem from "../category-item/CategoryItem";
import "./MenuDirectory.scss";

const MenuDirectory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default MenuDirectory;