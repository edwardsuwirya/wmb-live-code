import {menus} from "../data";

const MenuService = () => {
    const getMenu = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(menus);
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
        getMenu, addMenu, deleteMenu
    }
}

export default MenuService;