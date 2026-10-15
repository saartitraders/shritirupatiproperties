'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation?.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); }
menuButton?.addEventListener('click', () => { const opened = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(opened)); });
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation?.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.querySelectorAll('[data-property]').forEach(link => link.addEventListener('click', () => { document.querySelector('#property').value = link.dataset.property; }));
document.querySelectorAll('[data-intent]').forEach(link => link.addEventListener('click', () => { document.querySelector(`input[name="intent"][value="${link.dataset.intent}"]`).checked = true; }));
const phone = document.querySelector('#phone');
phone?.addEventListener('input', () => phone.setCustomValidity(''));
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const digits = phone.value.replace(/\D/g, '');
  phone.setCustomValidity(digits.length < 10 || digits.length > 15 ? 'Please enter a valid phone number with 10 to 15 digits.' : '');
  const name = document.querySelector('#name');
  name.setCustomValidity(name.value.trim() ? '' : 'Please enter your name.');
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const text = ['Hello Shri Tirupati Properties,', '', `I would like to: ${values.get('intent')}`, `Name: ${values.get('name').trim()}`, `Phone: ${values.get('phone').trim()}`, `Property type: ${values.get('property')}`, `Preferred area: ${values.get('area')}`, `Requirement: ${values.get('message').trim() || 'Please help me explore suitable options.'}`].join('\n');
  window.location.assign(`https://wa.me/918130966987?text=${encodeURIComponent(text)}`);
});
document.querySelector('#name')?.addEventListener('input', event => event.target.setCustomValidity(''));
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
document.querySelector('#property-finder')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#property').value = document.querySelector('#find-type').value;
  document.querySelector('#area').value = document.querySelector('#find-area').value;
  const intent = document.querySelector('#find-intent').value;
  document.querySelector(`input[name="intent"][value="${intent}"]`).checked = true;
  document.querySelector('#contact').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  document.querySelector('#name').focus({preventScroll: true});
});
