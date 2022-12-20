export async function getTabs() {
  const tabs = await global.chrome.tabs.query({});
  return tabs;
}

export function createCustomTab() {
  global.chrome.tabs.create({
    url: "dist/singlepage.html",
  });
}
