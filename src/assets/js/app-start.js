function Roll20AppStart() {
  const angularStart = '<div id="app-roll20-rolls" class="mat-typography">' +
      '<app-root-roll20-rolls id="app-root-roll20-rolls"></app-root-roll20-rolls>' +
    '</div>';
  if (!document.getElementById('app-root-roll20-rolls')) {
    document.body.insertAdjacentHTML('afterbegin', angularStart);
  }
  const head  = document.getElementsByTagName('head')[0];
  if (!document.getElementById('app-roll20-roboto')) {
    const roboto  = document.createElement('link');
    roboto.id   = 'app-roll20-roboto';
    roboto.rel  = 'stylesheet';
    roboto.type = 'text/css';
    roboto.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap';
    roboto.media = 'all';
    head.appendChild(roboto);
  }

  if (!document.getElementById('app-roll20-icon')) {
    const icon  = document.createElement('link');
    icon.id   = 'app-roll20-icon';
    icon.rel  = 'stylesheet';
    icon.type = 'text/css';
    icon.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    icon.media = 'all';
    head.appendChild(icon);
  }

}

Roll20AppStart();
