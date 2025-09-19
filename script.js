document.addEventListener('DOMContentLoaded', () => {
const navbarList = document.getElementById('navbar__list');
const sectionsContainer = document.querySelector('main');
const sections = document.querySelectorAll('section');

/** Navigation bar using JavaScript **/
sections.forEach(section => {
  const navItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = `#${section.id}`;
  anchor.textContent = section.dataset.nav;
  anchor.classList.add('navbar__link');
  navItem.classList.add('navbar__item');
  navItem.appendChild(anchor);
  navbarList.appendChild(navItem);
});

/** Smooth scrolling **/
document.querySelectorAll('.navbar__link').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

/** Active state **/
const setActiveSection = () => {
  sections.forEach(section => {
    const bounding = section.getBoundingClientRect();
    const link = navbarList.querySelector(`[href="#${section.id}"]`);
    if (bounding.top >= 0 && bounding.top < 300) {
      section.classList.add('active');
      link.classList.add('active');
    } else {
      section.classList.remove('active');
      link.classList.remove('active');
    }
  });
};
window.addEventListener('scroll', setActiveSection);

/** Sections added **/
const addSection = (id, navText, content) => {
  const section = document.createElement('section');
  section.id = id;
  section.dataset.nav = navText;
  section.innerHTML = `
    <div class="landing__container">
      <h2>${navText}</h2>
      <p>${content}</p>
    </div>
  `;
  sectionsContainer.appendChild(section);
  const navItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = `#${id}`;
  anchor.textContent = navText;
  anchor.classList.add('navbar__link');
  navItem.classList.add('navbar__item');
  navItem.appendChild(anchor);
  navbarList.appendChild(navItem);
};
addSection(
  'section4',
  'Section 4',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
  dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
  imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
  bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
  elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
  nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
  semper in tellus. Sed congue et odio sed euismod.            
  Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
  luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
  porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
);
addSection(
  'section5',
  'Section 5',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
  dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
  imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
  bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
  elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
  nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
  semper in tellus. Sed congue et odio sed euismod.
  Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
  luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
  porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
);

/** Comment form **/
const footer = document.querySelector('footer');

/** Create comments container **/
const commentsContainer = document.createElement('div');
commentsContainer.id = 'comments-container';
commentsContainer.style.marginBottom = '2rem';
commentsContainer.style.padding = '1rem';
commentsContainer.style.backgroundColor = '#f8f9fa';
commentsContainer.style.borderRadius = '4px';

/** Create comment form **/
const commentForm = document.createElement('form');
commentForm.classList.add('comment-form');
commentForm.innerHTML = `
  <h3 class="comment-form__title">Leave a Comment</h3>
  <label for="name" class="comment-form__label">Name:</label>
  <input type="text" id="name" name="name" required class="comment-form__input">
  <label for="comment" class="comment-form__label">Comment:</label>
  <textarea id="comment" name="comment" rows="4" required class="comment-form__textarea"></textarea>
  <button type="submit" class="comment-form__button">Submit</button>
`;

commentForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const commentText = document.getElementById('comment').value;
  
  /** Create new comment element **/
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.style.marginBottom = '1rem';
  commentElement.style.color = '#000';
  commentElement.style.padding = '1rem';
  commentElement.style.backgroundColor = '#fff';
  commentElement.style.borderRadius = '4px';
  commentElement.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  commentElement.innerHTML = `
    <strong>${name}</strong>
    <p>${commentText}</p>
    <small>${new Date().toLocaleString()}</small>
  `;
  
  /** Add comment to the container **/
  commentsContainer.appendChild(commentElement);
  
  /** Reset form **/
  commentForm.reset();
  
  /** Optional: Scroll to the new comment **/
  commentElement.scrollIntoView({ behavior: 'smooth' });
});

/** Add elements to footer **/
footer.insertBefore(commentsContainer, footer.firstChild);
footer.appendChild(commentForm);
});