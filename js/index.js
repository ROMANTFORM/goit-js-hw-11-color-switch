const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyEl: document.querySelector('body'),
    btnStart: document.querySelector('.start'),
    btnStop: document.querySelector('.stop'),
};

const startColors = {
  intId: null,
  start() {
    this.intId = setInterval(() => {
      refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
      // colors.map((color, ind) => {
      //   if (ind === randomIntegerFromInterval(0, ind)) {
      //     refs.bodyEl.style.backgroundColor = color;
      //   }
      // });
    
    }, 1000);
  },
  stop() {
    clearInterval(this.intId);
  },
};

refs.btnStart.addEventListener('click', () => {
  startColors.start();
});

refs.btnStop.addEventListener('click', () => {
  startColors.stop();
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};