/**
 * MenuActionCreators.ts
 */

import * as UI from "./../../UI"
import * as MenuActions from "./MenuActions"

export const showPopupMenu = (id: string, opts?: MenuActions.IMenuOptions) => {

    const { backgroundColor, foregroundColor }  = UI.store.getState() as any

    const defaultOptions = {
        backgroundColor,
        foregroundColor,
    }

    const options = {
        ...defaultOptions,
        ...opts,
    }

    return {
        type: "SHOW_MENU",
        payload: {
            id,
            options,
        },
    }
}

export const setMenuLoading = (id: string, isLoading: boolean) => ({
    type: "SET_MENU_LOADING",
    payload: {
        id,
        isLoading,
    },
})

export const setMenuItems = (id: string, items: any[]) => ({
    type: "SET_MENU_ITEMS",
    payload: {
        id,
        items,
    },
})

export const setDetailedMenuItem = (item: any) => ({
    type: "SET_DETAILED_MENU_ITEM",
    payload: {
        detailedItem: item,
    },
})

export const hidePopupMenu = () => (dispatch: any, getState: any) => {
    const state = getState()

    if (!state.menu) {
        return
    }

    if (state.menu.onHide) {
        state.menu.onHide()
    }

    dispatch({
        type: "HIDE_MENU",
    })
}

export const previousMenuItem = () => ({
    type: "PREVIOUS_MENU",
})

export const filterMenu = (filterString: string) => (dispatch: any, getState: any) => {

    const state = getState()

    if (!state.menu) {
        return
    }

    if (state.menu.onFilterTextChanged) {
        state.menu.onFilterTextChanged(filterString)
    }

    dispatch({
        type: "FILTER_MENU",
        payload: {
            filter: filterString,
        },
    })
}

export const nextMenuItem = () => ({
    type: "NEXT_MENU",
})
