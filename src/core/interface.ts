// This only deals in the resizing for now, but it's uniform in use

const rootNode = document.querySelector(':root') as HTMLElement;
const deviceClass = [ 'd-device-mobile', 'd-device-tablet', 'd-device-computer' ] as const;

function checkDeviceWidth() {
   for (const device of deviceClass) rootNode?.classList.remove(device);
   const deviceWidth = window.innerWidth;
   if (deviceWidth < 420) {
      rootNode.classList.add(deviceClass[0]);
   } else if (deviceWidth < 960) {
      rootNode.classList.add(deviceClass[1]);
   } else {
      rootNode.classList.add(deviceClass[2]);
   };
};

window.addEventListener('resize', checkDeviceWidth);
window.dispatchEvent(new Event("resize"));