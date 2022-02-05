(function hankHill() {

  function init() {
    addStyles();
    document.addEventListener('keydown', handleHotkey);
  }

  function handleHotkey(e) {
    if (e.target.matches('input, textarea')) return;

    const commands = {
      'KeyH': displayHank,
      'KeyS': playSound
    };

    const enteredCommand = commands[e.code]; 
    if (enteredCommand) enteredCommand();
  }

  function addStyles() {
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        .hh {
          position: fixed;
          z-index: 99999999999999999999999999999999999;
          transform: scale(1.65);
        }
      </style>
    `);
  }


  function getRandomPosition() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const randomWidth = Math.floor(Math.random() * w);
    const randomHeight = Math.floor(Math.random() * h);
    return [randomWidth, randomHeight];
  }


  function displayHank() {
    const images = [
      '9H8k4mF/200w-1.gif', 
      '09T2y3p/giphy-4.gif', 
      'k3VYFZk/giphy-5.gif', 
      'pZzXXvP/200w-2.gif', 
      'DkxCmqz/mad.gif', 
      '8Bxxwpt/KvM.gif', 
      'h16swMd/bwah2.gif', 
    ]

    const image = images[randomIndex(images)];
    const [x, y] = getRandomPosition();

    document.body.insertAdjacentHTML('beforeend', `
      <img 
        class="hh"
        style="top: ${y}px; left: ${x}px"
        src="https://i.ibb.co/${image}"
      >
    `);
  }


  function playSound() {
    const baseURI = 'https://res.cloudinary.com/dzynqn10l/video/upload/v1644093214/Msc/';

    const sounds = [
      'bwaaah_ckyvbs.mp3',
      'dang-it-bobby_d8hvry_jh4civ.mp3',
      'jpeg_hwasj2.mp3'
    ];

    const audio = new Audio(`${baseURI}${sounds[randomIndex(sounds)]}`);
    audio.play();
  }


  function randomIndex(arr) {
    return Math.floor((Math.random() * arr.length));
  }

  init();
})();


