let allSmiles = document.querySelectorAll('.all-smile');
let count = document.querySelector('.count');
let allCount = {};
allSmiles.forEach(smile => {
  smile.addEventListener('click', () => {
    allCount[smile.id] = (allCount[smile.id] || 0) + 1;
    updateCount();
  });
});
function updateCount() {
  count.innerHTML = '';
  for (let smileId in allCount) {
    let countElement = document.createElement('div');
    countElement.textContent = allCount[smileId];
    count.appendChild(countElement);
  }
}