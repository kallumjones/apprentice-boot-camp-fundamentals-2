export const bowl = (rolls) => {
    let total = 0;
    const frames = [];
  
    for (let i = 0; i < rolls.length; i += 2) {
      // total += rolls[i];
  
      frames.push([rolls[i], rolls[i + 1]]);
    }
  
    for (let i = 0; i < frames.length; i++) {
      const currentFrame = frames[i]
      const scoreForFrame = currentFrame[0] + currentFrame[1]
  
      total += scoreForFrame
    }
    
    return total;
  
    //   return rolls.reduce((score, roll) => score + roll, 0);
  };
  