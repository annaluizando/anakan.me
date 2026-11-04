const bayer = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21,
];
const ink = [52, 85, 219];
const paper = [247, 247, 242];

export function createVideoRenderer(canvas: HTMLCanvasElement) {
  const sample = document.createElement("canvas");
  const input = sample.getContext("2d", { willReadFrequently: true })!;
  const output = canvas.getContext("2d")!;

  return (video: HTMLVideoElement) => {
    if (video.readyState < 2 || !video.videoWidth || !canvas.clientWidth) return;
    const width = Math.round(canvas.clientWidth * Math.min(devicePixelRatio, 2));
    const height = Math.round(width * .625);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    const columns = Math.round(Math.max(180, Math.min(320, canvas.clientWidth * .6)));
    const rows = Math.round(columns * .625);
    if (sample.width !== columns || sample.height !== rows) {
      sample.width = columns;
      sample.height = rows;
    }
    const cropWidth = Math.min(video.videoWidth, video.videoHeight * 1.6);
    const cropHeight = cropWidth / 1.6;
    input.drawImage(video, (video.videoWidth - cropWidth) / 2, (video.videoHeight - cropHeight) / 2,
      cropWidth, cropHeight, 0, 0, columns, rows);
    const frame = input.getImageData(0, 0, columns, rows);
    const luminance = (index: number) => {
      const value = (.2126 * frame.data[index] + .7152 * frame.data[index + 1] + .0722 * frame.data[index + 2]) / 255;
      return Math.max(0, Math.min(1, (value - .5) * 1.45 + .55));
    };
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const i = (y * columns + x) * 4;
        const color = luminance(i) > (bayer[(y % 8) * 8 + x % 8] + .5) / 64 ? paper : ink;
        frame.data[i] = color[0];
        frame.data[i + 1] = color[1];
        frame.data[i + 2] = color[2];
        frame.data[i + 3] = 255;
      }
    }
    input.putImageData(frame, 0, 0);
    output.imageSmoothingEnabled = false;
    output.drawImage(sample, 0, 0, width, height);
  };
}
