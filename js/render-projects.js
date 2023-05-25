import projects from './projects.json' assert { type: 'json' };
const projectsEl = document.querySelector('.projects');
const filterEl = document.querySelector('.filter');

let btnFilter = filterEl.querySelector('button[data-name="all"]');
btnFilter.classList.add('filter__button--active');

projectsEl.insertAdjacentHTML('beforeend', renderProjects(projects));

filterEl.addEventListener('click', selectionCategory);

function selectionCategory(e) {
  const elem = e.target;

  if (elem.nodeName != 'BUTTON') {
    return;
  }

  if (btnFilter.getAttribute('data-name') !== elem.getAttribute('data-name')) {
    elem.classList.add('filter__button--active');
    btnFilter.classList.remove('filter__button--active');
    btnFilter = elem;

    if (btnFilter.textContent === 'Все') {
      projectsEl.innerHTML = '';
      projectsEl.insertAdjacentHTML('beforeend', renderProjects(projects));
    } else {
      projectsEl.innerHTML = '';
      projectsEl.insertAdjacentHTML('beforeend', renderProjects(renderCategory(projects)));
    }
  }
}

function renderCategory(projects) {
  return projects.filter(({ dataname }) => {
    return dataname === btnFilter.getAttribute('data-name');
  });
}

function renderProjects(projects) {
  return projects
    .map(({ name, alt, overlaytext, title, category }) => {
      return `<li class="projects__item">
              <a href="" class="projects__link link">
                <div class="projects__overlay">
                  <picture>
                    <source
                      srcset="
                        ./images/portfolio/desktop/${name}.jpg    1x,
                        ./images/portfolio/desktop/${name}@2x.jpg 2x
                      "
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcset="
                        ./images/portfolio/tab/${name}-tab.jpg    1x,
                        ./images/portfolio/tab/${name}-tab@2x.jpg 2x
                      "
                      media="(min-width: 768px)"
                    />

                    <img
                      srcset="
                        ./images/portfolio/mob/${name}-mob.jpg    1x,
                        ./images/portfolio/mob/${name}-mob@2x.jpg 2x
                      "
                      src="./images/portfolio/mob/${name}-mob.jpg"
                      alt="${alt}"
                      width="450"
                      height="294"
                    />
                  </picture>

                  <p class="projects__overlay-text">
                    ${overlaytext}
                  </p>
                </div>

                <div class="projects__meta">
                  <h2 class="projects__title">${title}</h2>
                  <p class="projects__text">${category}</p>
                </div>
              </a>
            </li>`;
    })
    .join('');
}
