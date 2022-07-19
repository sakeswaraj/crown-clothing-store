import React from 'react';
import MenuDirectory from '../../components/menu-directory/MenuDirectory';
import { categories } from "../../utils/ArrayList";
function Home() {
    return (
        <div>
            <MenuDirectory categories={categories} />
        </div>
    )
}

export default Home
