export const reducer = (states, actions) => {
  switch (actions.type) {
    case 'Addition':
      return { ...states, count: Number(states.num1) + Number(states.num2)};
    case 'SUB':
      return { ...states, count: Number(states.num1) - Number(states.num2)};
    case 'MUL':
      return { ...states, count: Number(states.num1) * Number(states.num2)};    
    case 'DIV':
          return { ...states, count: Number(states.num1) / Number(states.num2)};  
    
    case 'RESET':
      return { ...states, count: 0,num1:0,num2:0 };
    default:
      return states;
  }
};