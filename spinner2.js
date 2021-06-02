const slash = ['\r|', '\r/', '\r-', '\r\\', ];
let delay = 0;

const spinner = () => {
  for (const hand of slash) {
  setTimeout(() => {process.stdout.write(hand)}, delay += 250)}
};

spinner();