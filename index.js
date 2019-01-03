//Exercise - Moving methods to prototype 

//duration; property - 0;
// //reset, start, stop
function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  Object.defineProperties(this, {
    duration: {
      get: function () {
        return duration;
      },
      set: function (value) {
        return duration = value;
      }
    },
    running: {
      get: function () {
        return running;
      },
      set: function (bool) {
        return running = bool;
      }
    },
    endTime: {
      get: function () {
        return endTime;
      },
      set: function (value) {
        return endTime = value;
      }
    },
    startTime: {
      get: function () {
        return startTime;
      },
      set: function (value) {
        return startTime = value;
      }
    }
  })
}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('The stopwatch is already running');
  this.running = true;
  this.startTime = new Date();
};
Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('The stopwatch is not running.')
  this.running = false;
  this.endTime = new Date();
  let totalTime = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  return this.duration += totalTime;
};
Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.duration = 0;
  this.running = false;
};

const sw = new Stopwatch();