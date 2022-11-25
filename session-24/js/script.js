const btn = document.getElementById('advice-btn');
const adviceText = document.getElementById('advice-text');
const adviceTitle = document.getElementById('advice-title');

btn.addEventListener('click', (e) => {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { id, advice } = data.slip;
      adviceTitle.innerText = `Advice #${id}`;
      adviceText.innerText = '"' + advice + '"';
    });
});
