const slash = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
const spinner = () => {
  let delay = 0;
  for (const hand of slash) {
  setTimeout(() => {
    if (hand == '\r\\') {
      setTimeout(() => {spinner()})
    }
    process.stdout.write(hand)}, delay += 250)}
};