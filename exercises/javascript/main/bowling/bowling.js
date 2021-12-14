export const bowl = (rolls) => {
    let total = 0;
    const frames = [];
  
    for (let i = 0; i < rolls.length; i += 2) {
      // total += rolls[i];
  
      if (rolls[i] === 10) {
        frames.push([rolls[i]]);
        i--;
      } else {
        frames.push([rolls[i], rolls[i + 1]]);
        // i++
      }
    }
  
    for (let i = 0; i < frames.length; i++) {
      const currentFrame = frames[i];
    //   console.log(currentFrame);
  
      let scoreForFrame;
  
      const isStrike = currentFrame.length === 1;
      // const scoreFromCurrentFrame = isStrike ? currentFrame[0] : currentFrame[0] + currentFrame[1]
      // const scoreFromNextFrame = isStrike ? nextFrame[0] + nextFrame[1] : nextFrame[0]
  
      if (isStrike) {
        scoreForFrame = currentFrame[0];
  
        const nextFrame = frames[i + 1];
        scoreForFrame += nextFrame[0] + nextFrame[1];
  
        // console.log(scoreForFrame);
      } else {
        scoreForFrame = currentFrame[0] + currentFrame[1];
        const isSpare = scoreForFrame === 10;
        const nextFrame = frames[i + 1];
  
        if (isSpare) {
          scoreForFrame += nextFrame[0];
        }
      }
  
    //   console.log(frames);
  
      total += scoreForFrame;
    }
  
    return total;
}  