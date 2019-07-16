var drawerCount = 0;
document.addEventListener('DOMContentLoaded', function () {
    let fullScreenBtn = document.getElementById('fullScreenBtn');
    let fullScreenWindowBtn = document.getElementById('fullScreenWindowBtn');
    fullScreenBtn.onclick = function (element) {
        function modifyDOM() {
            function setToFullScreen(iteration, drawer) {
                drawer.style.left = '0';
                drawer.style.top = '0';
                drawer.style.borderRadius = '0';
                drawer.style.width = '100%';
                drawer.style.height = '100vh';

                document.getElementsByClassName('modal-dialog-content')[iteration].style.height = '100vh';

                var iframe = drawer.getElementsByTagName("IFRAME")[0]
                iframe.width = '100%';
                iframe.height = '100%';

                var canvas = iframe.contentWindow.document.getElementById('canvas-container');

                canvas.style.borderLeft = 'solid 2px red';
				canvas.style.borderRight = 'solid 2px red';
                

            }

            var drawers = document.getElementsByClassName('modal-dialog');
            let drawerCount = drawers.length;
            if (drawerCount) {
                for (let i = 0; i < drawerCount; i++) {
                    setToFullScreen(i, drawers[i]);
                }
            } else {
                alert('First off all open the drawer!')
            }
            return document.body.innerHTML;
        }

        chrome.tabs.query({ active: true }, function (tabs) {
            var tab = tabs[0];
            chrome.tabs.executeScript(tab.id, {
                code: '(' + modifyDOM + ')();'
            }, (results) => {
                // console.log(results[0]);
            });

        });
    };

    fullScreenWindowBtn.onclick = function (element) {
        function modifyDOM() {
            var elem = document.body;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox it is not necessary*/
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge it is not necessary*/
                elem.msRequestFullscreen();
            }
            return document.body.innerHTML;
        }

        chrome.tabs.query({ active: true }, function (tabs) {
            var tab = tabs[0];
            chrome.tabs.executeScript(tab.id, {
                code: '(' + modifyDOM + ')();'
            }, (results) => {
                // console.log(results[0]);
            });

        });
    };

});

