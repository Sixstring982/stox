export const INITIALIZE: number = 1;
export const initialize = () => ({
    type: INITIALIZE,
});

export const ADVANCE: number = 2;
export const advance = () => ({
    type: ADVANCE,
})

export const SET_SELECTED_STOCK: number = 3;
export const setSelectedStock = (selected_stock: number) => ({
    type: SET_SELECTED_STOCK,
    selected_stock
})

export const BUY_CURRENT_SHARE: number = 4;
export const buyCurrentShare = () => ({
    type: BUY_CURRENT_SHARE,
})

export const SELL_CURRENT_SHARE: number = 5;
export const sellCurrentShare = () => ({
    type: SELL_CURRENT_SHARE,
})