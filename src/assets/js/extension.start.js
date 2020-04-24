function ExtensionStart() {
  const angularStart = '<div id="app-chrome-extension-template" class="mat-typography">' +
      '<app-chrome-extension-template></app-chrome-extension-template>' +
    '</div>';
  if (!document.getElementById('app-chrome-extension-template')) {
    document.body.insertAdjacentHTML('afterbegin', angularStart);
  }
  const head  = document.getElementsByTagName('head')[0];
  if (!document.getElementById('app-chrome-extension-template-fonts-roboto')) {
    const roboto  = document.createElement('link');
    roboto.id   = 'app-chrome-extension-template-fonts-roboto';
    roboto.rel  = 'stylesheet';
    roboto.type = 'text/css';
    roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap';
    roboto.media = 'all';
    head.appendChild(roboto);
  }

  if (!document.getElementById('app-chrome-extension-template-fonts-icon')) {
    const icon  = document.createElement('link');
    icon.id   = 'app-chrome-extension-template-fonts-icon';
    icon.rel  = 'stylesheet';
    icon.type = 'text/css';
    icon.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    icon.media = 'all';
    head.appendChild(icon);
  }

}

ExtensionStart();
