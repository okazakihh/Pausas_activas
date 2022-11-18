import { types } from "../types/Types";


const initialState = {
    data: [],
};
export const NominaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pausasAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      
      case types.pausasRead:
        return {
          ...state,
          data: action.payload,
        };

        /*case types.nominaSearch:
          return {
            ...state,
            data: state.data.filter((nomina) => {
              console.log(nomina)
              return nomina.Lugar !== action.payload;
            }),
          };*/

        case types.pausasDelete:
      return {
        ...state,
        data: state.data.filter((pausas) => {
          return pausas.id !== action.payload;
        }),
      };


      case types.pausasClean:
      return {
        ...state,
        data: [],
      };
        
        default:
          return state;
      }
};
