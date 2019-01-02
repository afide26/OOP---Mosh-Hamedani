window.onload = function () {
  let docTitle = document.getElementById('doc-title');
  let title = document.getElementById('title');
  let titles = [title, docTitle];
  for (let item of titles) {
    item.innerHTML = 'Exercise: StopWatch';
  }

  let para = document.getElementById('para1');
  para.innerHTML = 'in-depth learning of Objects'
}

function StopWatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function () {
    if (running)
      throw new Error('The timer is already running');
    running = true;
    startTime = new Date();
  }

  this.stop = function () {
    if (!running)
      throw new Error('The timer has already stopped!')
    running = false;
    endTime = new Date();
    let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  }

  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      if (duration > 60)
        return `Time lapsed is ${Math.round(duration/60)} minutes`;
      return `Time lapsed is ${duration} seconds`;
    }
  })
}

const sw = new StopWatch();