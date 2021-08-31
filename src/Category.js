import React from "react";
// Вывести категории
export const CategoryList = () => {
    const categories = [
        {
            text: 'All',
            id: 0
        },
        {
            text: 'Melodrams', 
            id: 2
        },
        {
            text: 'Game shows', 
            id: 3
        },
        {
            text: 'Depp house', 
            id: 4
        },
        {
            text: 'Music', 
            id: 4
        }
    ]
    return(
        <ul>
            {categories.map((item, index) => {
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
    )
}
export default CategoryList
// Map - принимает массив, возвращает новый массив. Длинна всегда одинакова
// ForEach - массив не возвращает, что-то делает с элементами массива.
// item -  элементы массива categories