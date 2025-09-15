// Optional: Smooth scroll for anchor links if added later
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-btn, .btn-primary');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', e => {
      e.target.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', e => {
      e.target.style.transform = 'translateY(0)';
    });
  });
});
