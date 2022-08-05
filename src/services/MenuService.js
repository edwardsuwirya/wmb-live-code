import {menus} from "../data";

const MenuService = () => {
    const getMenu = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(menus);
                // reject(new Error('Failed to get data'))
            }, 2000)
        })
    }

    const getMenuByCategory = async (category) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const menuByCategory = []
                for (let menu of menus) {
                    if (menu.category === category) {
                        menuByCategory.push(menu)
                    }
                }
                resolve(menuByCategory);
            }, 2000)
        })
    }

    const addMenu = async (newMenu) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                menus.push({...newMenu});
                resolve(newMenu)
            }, 1000)
        })
    }

    const deleteMenu = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = menus.findIndex(menu => menu.id === id);
                menus.splice(index, 1);
                resolve(index)
            }, 1000)
        })
    }
    return {
        getMenu, addMenu, deleteMenu, getMenuByCategory
    }
}

export default MenuService;