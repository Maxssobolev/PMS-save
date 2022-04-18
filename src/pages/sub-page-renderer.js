import React from 'react';
import { useRouteMatch } from 'react-router-dom'

//Ищет в папке /pages папку с названием страницы, а уже в этой папке - файл, с названием компонента

const generatePage = (page, subcomponent) => {
    console.log(page, subcomponent)
    const component = () => require(`./${page}/${subcomponent}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function PageRenderer() {

    const {
        params: { page, subcomponent },

    } = useRouteMatch()

    return generatePage(page, subcomponent)
}