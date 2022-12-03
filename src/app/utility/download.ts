export const download = (filename: string, text: string) => {
  const downloader = document.createElement('a');
  downloader.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
  downloader.download = filename;
  downloader.style.display = 'none';
  document.body.appendChild(downloader);
  downloader.click();
  document.body.removeChild(downloader);
};
