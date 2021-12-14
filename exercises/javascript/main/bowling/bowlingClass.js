export class Bowling {
    constructor() {
        this.score = 0;
    }

    createFrames(rolls) {
        const frames = [];
  
        for (let i = 0; i < rolls.length; i += 2) {
          if (rolls[i] === 10) {
            frames.push([rolls[i]]);
            i--;
          } else {
            frames.push([rolls[i], rolls[i + 1]]);
          }
        }
        // console.log(frames);
        return frames;
    }

    calculateScore(rolls) {
        let total = 0;
        const frames = this.createFrames(rolls);

        for (let i = 0; i < frames.length; i++) {
            let scoreForFrame;

            const currentFrame = frames[i];
            const isStrike = currentFrame.length === 1;
           
            if (isStrike) {
              scoreForFrame = currentFrame[0];
        
              const nextFrame = frames[i + 1];
              const isNextFrameStrike = nextFrame.length === 1;

              if(isNextFrameStrike) {

                const nextNextFrame = frames[i + 2];
                scoreForFrame += nextFrame[0] + nextNextFrame[0];
              } else {
                scoreForFrame += nextFrame[0] + nextFrame[1];
              }
        
            } else {
              scoreForFrame = currentFrame[0] + currentFrame[1];
              const isSpare = scoreForFrame === 10;
        
              if (isSpare) {
                const nextFrame = frames[i + 1];
                scoreForFrame += nextFrame[0];
              }
            }
            console.log(scoreForFrame);
            total += scoreForFrame;
          }
        
          return total;
    }
}
