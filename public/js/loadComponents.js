document.addEventListener('DOMContentLoaded', async () => {
  try {
    const [navRes, footerRes] = await Promise.all([
      fetch('../../../components/nav.html'),
      fetch('../../../components/footer.html')
    ]);

    const [navHtml, footerHtml] = await Promise.all([
      navRes.text(),
      footerRes.text()
    ]);

    document.getElementById('nav-placeholder').innerHTML = navHtml;
    document.getElementById('footer-placeholder').innerHTML = footerHtml;

    // Run scripts that depend on loaded components
    hamburgerAction();
    highlightActiveNav();
  } catch (error) {
    console.error('Error loading components:', error);
  }
});
