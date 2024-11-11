const text = "charan";

function AtcFunction (state = text, action){

switch(action.type){
    case "ADDTOCART":
        return state + 1;
    default:
        return state = 0;
    }
}

export default AtcFunction;