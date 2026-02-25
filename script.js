// 配置 marked 选项
marked.setOptions({
  breaks: true,
  gfm: true,
});

// 章节文件列表
const chapters = [
  '开局·铁幕降临.md',
  '迷阵·结盟与裂缝.md',
  '厮杀·背叛溢血.md',
  '黑幕·璞哥的手.md',
  '反转·胜利的代价.md',
  '关于作者.md',
  '开发计划.md',
];

// DOM 元素
const navButtons = document.querySelectorAll('.nav-btn');
const chapterContent = document.getElementById('chapter-content');
const loading = document.getElementById('loading');

// 加载章节内容
async function loadChapter(filename) {
  try {
    loading.style.display = 'block';
    chapterContent.style.display = 'none';

    const response = await fetch(filename);

    if (!response.ok) {
      throw new Error(`无法加载文件: ${filename}`);
    }

    const text = await response.text();
    const html = marked.parse(text);

    chapterContent.innerHTML = html;
    loading.style.display = 'none';
    chapterContent.style.display = 'block';

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    console.error('加载章节失败:', error);
    chapterContent.innerHTML = `
            <div style="text-align: center; padding: 50px; color: var(--text-secondary);">
                <h2>😞 抱歉，无法加载此章节</h2>
                <p>错误信息: ${error.message}</p>
                <p style="margin-top: 20px;">请确保 Markdown 文件与 HTML 文件在同一目录下。</p>
            </div>
        `;
    loading.style.display = 'none';
    chapterContent.style.display = 'block';
  }
}

// 导航按钮点击事件
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // 移除所有按钮的 active 类
    navButtons.forEach((btn) => btn.classList.remove('active'));

    // 给当前按钮添加 active 类
    button.classList.add('active');

    // 加载对应章节
    const filename = button.getAttribute('data-file');
    loadChapter(filename);

    // 保存当前章节到 localStorage
    localStorage.setItem('currentChapter', filename);
  });
});

// 页面加载时
window.addEventListener('DOMContentLoaded', () => {
  // 尝试从 localStorage 获取上次阅读的章节
  const savedChapter = localStorage.getItem('currentChapter');
  const initialChapter = savedChapter || chapters[0];

  // 设置对应按钮为 active
  navButtons.forEach((btn) => {
    if (btn.getAttribute('data-file') === initialChapter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 加载章节
  loadChapter(initialChapter);
});

// 键盘导航支持
document.addEventListener('keydown', (e) => {
  const activeBtn = document.querySelector('.nav-btn.active');
  const currentIndex = Array.from(navButtons).indexOf(activeBtn);

  if (e.key === 'ArrowLeft' && currentIndex > 0) {
    navButtons[currentIndex - 1].click();
  } else if (e.key === 'ArrowRight' && currentIndex < navButtons.length - 1) {
    navButtons[currentIndex + 1].click();
  }
});
