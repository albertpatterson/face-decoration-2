import { getFacePoint } from '../do_not_touch/util';

export function getBBox(face) {
  const leftEye = getFacePoint(face, 'leftEye');
  const rightEye = getFacePoint(face, 'rightEye');
  const mouthCenter = getFacePoint(face, 'mouthCenter');
  const rawWidth = rightEye.x - leftEye.x;
  const width = 1.75 * rawWidth;
  const offset = 0.5 * (width - rawWidth);

  const x = leftEye.x - offset;
  const y = mouthCenter.y - 20;
  const height = 40;

  return { x, y, height, width };
}
