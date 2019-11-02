// ######### ACTION-TYPES #########
const OPEN_MENU = 'a3/main-menu/open';
const CLOSE_MENU = 'a3/main-menu/close';
const TOGGLE_MENU = 'a3/main-menu/toggle';


// ######### ACTIONS #########
export const doOpenMenu = () => ({ type: OPEN_MENU });
export const doCloseMenu = () => ({ type: CLOSE_MENU });
export const doToggleMenu = () => ({ type: TOGGLE_MENU });


// ######### SELECTORS #########
// export const getMenuState = (store: any) => store.mainMenu;
// export const getMenuIsOpen = (store: any) => getMenuState(store) && getMenuState(store).isOpen;


// ######### REDUCER #########
const initialState = {
  isOpen: false,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case OPEN_MENU: {
      // const { id } = action.payload;
      return {
        ...state,
        isOpen: true,
      };
    }
    case CLOSE_MENU: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case TOGGLE_MENU: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    default:
      return state;
  }
}
