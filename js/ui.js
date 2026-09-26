// Display changes use CSS classes, never inline style attributes.
export function setDisplay(element, display) {
  element.classList.remove('is-hidden', 'display-block', 'display-flex', 'display-inline-block');
  element.classList.add(display === 'none' ? 'is-hidden' : `display-${display}`);
}
