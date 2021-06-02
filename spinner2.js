const slash = ['\r|', '\r/', '\r-', '\r\\', ];
let delay = 0;

const spinner = () => {
  for (let i = 0; i < slash.length * 2; i++) {
    delay += 250;
    setTimeout(() => {process.stdout.write(slash[i])}, delay)
  }
};

spinner();