const themeSelect = document.getElementById("theme");
const yearEl = document.getElementById("year");

function setTheme(value) {
  document.documentElement.dataset.theme = value;
  localStorage.setItem("theme", value);
}

(function init() {
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const saved = localStorage.getItem("theme") || "system";
  if (themeSelect) themeSelect.value = saved;

  if (saved === "system") {
    document.documentElement.dataset.theme = "system";
  } else {
    setTheme(saved);
  }

  themeSelect?.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "system") {
      document.documentElement.dataset.theme = "system";
      localStorage.setItem("theme", "system");
      return;
    }
    setTheme(value);
  });
})();
