(() => {
  'use strict';
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const externalLink = (work, className) => {
    const link = element('a', className);
    link.href = work.storeUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  };
  function card(work) {
    const article = element('article', 'work-card');
    article.id = `work-${work.id}`;
    const imageLink = externalLink(work, 'thumbnail');
    imageLink.setAttribute('aria-label', `${work.name}の販売ページ（新しいタブで開きます）`);
    const fallback = () => imageLink.replaceChildren(element('span', 'image-placeholder', '画像準備中'));
    if (work.thumbnail) {
      const image = element('img');
      image.src = work.thumbnail;
      image.alt = `${work.name}のメイン画像`;
      image.width = 240;
      image.height = 240;
      image.loading = 'lazy';
      image.addEventListener('error', fallback, { once: true });
      imageLink.append(image);
    } else fallback();
    const content = element('div', 'card-content');
    const heading = element('h3');
    const title = externalLink(work, 'product-name');
    title.textContent = work.name;
    title.setAttribute('aria-label', `${work.name}（新しいタブで開きます）`);
    heading.append(title);
    const creator = element('p', 'creator', work.creator);
    const comment = element('p', 'comment', work.comment);
    const button = externalLink(work, 'store-button');
    button.append(document.createTextNode('LINE STOREで見る'), element('span', 'external-icon', '↗'));
    button.lastChild.setAttribute('aria-hidden', 'true');
    button.setAttribute('aria-label', `${work.name}をLINE STOREで見る（新しいタブで開きます）`);
    content.append(heading, creator, comment, button);
    article.append(imageLink, content);
    return article;
  }
  const works = window.STAMP_WORKS || [];
  const groups = [];
  const samples = works.filter(w => w.category === 'sample');
  if (samples.length) groups.push({ id: 'sample', label: 'サンプル', works: samples });
  const cohorts = [...new Set(works.filter(w => w.category === 'student').map(w => w.cohort))].sort((a,b) => a-b);
  cohorts.forEach(cohort => {
    const members = works.filter(w => w.category === 'student' && w.cohort === cohort);
    const years = [...new Set(members.map(w => w.year).filter(y => y !== null && y !== undefined))].sort((a,b) => a-b);
    const label = `${cohort}期生${years.length ? `（${years.join('・')}）` : ''}`;
    groups.push({ id: `cohort-${cohort}`, label, cohort, years, works: members });
  });
  const sections = document.querySelector('#collections');
  const navigation = document.querySelector('#navigation');
  groups.forEach(group => {
    const item = element('li');
    const anchor = element('a', '', group.label);
    anchor.href = `#${group.id}`;
    item.append(anchor);
    navigation.append(item);
    const section = element('section', `work-section ${group.id === 'sample' ? 'sample-section' : 'cohort-section'}`);
    section.id = group.id;
    section.setAttribute('aria-labelledby', `${group.id}-heading`);
    const sectionHead = element('div', 'section-head');
    const heading = element('h2', '', group.label);
    heading.setAttribute('aria-label', group.label);
    heading.id = `${group.id}-heading`;
    sectionHead.append(heading, element('span', 'work-count', `${group.works.length}作品`));
    const grid = element('div', 'work-grid');
    [...group.works].sort((a,b) => a.order-b.order).forEach(work => grid.append(card(work)));
    section.append(sectionHead, grid);
    sections.append(section);
  });
  const hero = document.querySelector('.hero');
  const schoolLinks = document.querySelector('.school-links');
  if (hero && schoolLinks) {
    // Keep the bottom-right rail clear of the hero, even in a tall first view.
    const updateSchoolLinks = () => {
      const hidden = hero.getBoundingClientRect().bottom + 12 > schoolLinks.getBoundingClientRect().top;
      schoolLinks.classList.toggle('is-hidden', hidden);
      schoolLinks.inert = hidden;
      schoolLinks.setAttribute('aria-hidden', String(hidden));
    };
    let scheduled = false;
    window.addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        updateSchoolLinks();
      });
    }, { passive: true });
    window.addEventListener('resize', updateSchoolLinks);
    window.addEventListener('pageshow', updateSchoolLinks);
    const observer = new ResizeObserver(updateSchoolLinks);
    observer.observe(hero);
    observer.observe(schoolLinks);
    updateSchoolLinks();
  }
})();
