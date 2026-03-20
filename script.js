  document.addEventListener('DOMContentLoaded', function() {

    // 이메일 우회
    const u = 'tomtomato';
    const d = 'naver.com';
    const el = document.getElementById('contact-email');
    if (el) { el.href = 'mailto:' + u + '@' + d; el.textContent = u + '@' + d; }

    // PDF 모달
    window.openPdf = function(src, title) {
      document.getElementById('pdf-iframe').src = src;
      document.getElementById('pdf-modal-title').textContent = title;
      document.getElementById('pdf-modal').classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    document.getElementById('pdf-modal-close').addEventListener('click', () => {
      document.getElementById('pdf-modal').classList.remove('open');
      document.getElementById('pdf-iframe').src = '';
      document.body.style.overflow = '';
    });
    document.getElementById('pdf-modal').addEventListener('click', (e) => {
      if (e.target === document.getElementById('pdf-modal')) {
        document.getElementById('pdf-modal-close').click();
      }
    });

    // 스크롤 진행 바
    const bar = document.getElementById('scroll-bar');
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / total * 100) + '%';
    });

    // TOC 활성화 - 스크롤 위치 기준
    const sections = document.querySelectorAll('section[id], .project-card[id]');
    const tocLinks = document.querySelectorAll('.toc-sidebar a');

    function updateToc() {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      tocLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
    }
    window.addEventListener('scroll', updateToc);
    updateToc();

  });