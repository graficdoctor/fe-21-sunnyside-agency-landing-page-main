const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.header-menu');
const sidebar = document.querySelector('.sidebar');

function startPostion() {
  sidebar.classList.add('hidden');
  navigation.classList.remove('active');
}

startPostion();

navToggle.onclick = function () {
  if (navigation.className.includes('active')) {
    sidebar.classList.add('hidden');
    navigation.classList.toggle('active');
  } else {
    sidebar.classList.remove('hidden');
    navigation.classList.toggle('active');
  }
};
