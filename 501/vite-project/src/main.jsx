document.getElementById('loadLogin')?.addEventListener('click', async () => {
  const { mountComponent } = await import('./activitiesEntry.jsx');
  mountComponent('login');
});

document.getElementById('loadTravel')?.addEventListener('click', async () => {
  const { mountComponent } = await import('./activitiesEntry.jsx');
  mountComponent('travel');
});
