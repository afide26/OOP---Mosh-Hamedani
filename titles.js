window.onload = function () {
  let docTitle = document.getElementById('doc-title');
  let title = document.getElementById('title');
  let titles = [title, docTitle];
  for (let item of titles) {
    item.innerHTML = 'Exercise - Moving Methods to Prototype';
  }

  let para = document.getElementById('para1');
  para.innerHTML = 'Using the Stopwatch Exercise'
}