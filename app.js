const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav-links');

function startPostion() {
  navigation.classList.remove('active');
  navigation.classList.add('hidden');
  navToggle.classList.remove('active');
}

startPostion();

navToggle.addEventListener('click', function () {
  if (navigation.className.includes('active')) {
    navigation.classList.toggle('active');
    navigation.classList.add('hidden');
    navToggle.classList.toggle('active');
  } else {
    navigation.classList.toggle('active');
    navigation.classList.remove('hidden');
    navToggle.classList.toggle('active');
  }
});
