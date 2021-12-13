export const bowl = (rolls) => {
    let total = 0;
    
    for (let i = 0; i < rolls.length; i++) {
      total += rolls[i];
    }
  
    return total;
  };
  