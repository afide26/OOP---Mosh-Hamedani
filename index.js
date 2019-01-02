//Exercise Stop Watch
//duration; property - 0;
// //reset, start, stop
// function Stopwatch() {
//   let startTime, endTime, running, duration = 0;

//   this.start = function () {
//     if (running)
//       throw new Error('The stopwatch is already running');
//     running = true;
//     startTime = new Date();
//     console.log(startTime.getTime()); //gets the seconds of the new Date instance;
//   };
//   this.stop = function () {
//     if (!running)
//       throw new Error('The stopwatch is not running.')
//     running = false;
//     endTime = new Date();
//     let totalTime = (endTime.getTime() - startTime.getTime()) / 1000;
//     return duration += totalTime;
//   };
//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     duration = 0;
//   };

//   Object.defineProperty(this, 'duration', {
//     get: function () {
//       return duration;
//     }
//   })
// }


// const sw = new Stopwatch();