const reveal = () => {
  let butt = document.getElementById('toggle');
  console.log(butt.children[0].textContent);
  if (butt.children[0].textContent === 'Open Menu') {
    butt.children[0].textContent = 'Close Menu';
    document.getElementById('nav').classList.remove('unActive');
    document.getElementById('nav').classList.toggle('active');
  } else if (butt.children[0].textContent === 'Close Menu') {
    butt.children[0].textContent = 'Open Menu';
    document.getElementById('nav').classList.remove('active');
    document.getElementById('nav').classList.toggle('unActive');
  }
};
