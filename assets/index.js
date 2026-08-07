const book = document.querySelector('#portfolio-book');
const bookTriggers = document.querySelectorAll('[data-open-book]');
let open = false;
let isAnimating = false;
const ANIMATION_DURATION_MS = 2200; // Matches your ~2s CSS transition duration

function setBook(state) {
  // Prevent re-triggering while animation is in progress or state hasn't changed
  if (isAnimating || open === state) return;

  open = state;
  isAnimating = true;

  book.classList.toggle('is-open', open);
  book.setAttribute('aria-expanded', open);
  book.setAttribute('aria-label', open ? 'Close portfolio book' : 'Open portfolio book');

  // Lock interaction until the full flip/open animation finishes
  setTimeout(() => {
    isAnimating = false;
  }, ANIMATION_DURATION_MS);
}

book.addEventListener('click', () => setBook(!open));

book.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    setBook(!open);
  }
});

bookTriggers.forEach(trigger => trigger.addEventListener('click', () => setBook(true)));

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') setBook(true);
  if (event.key === 'ArrowLeft' || event.key === 'Escape') setBook(false);
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));