import projects from './projects.json' assert { type: 'json' };
const projectsEl = document.querySelector('.projects');

projectsEl.insertAdjacentHTML('beforeend', renderProjects(projects));

function renderProjects(projects) {
  return projects
    .map(({ name, alt, overlaytext, title, category }) => {
      console.log(name);
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
