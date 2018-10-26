import { Component, ElementRef, ViewChild } from '@angular/core';
import { IRightTriangle, IPythagorasTriangle } from 'src/app/interfaces/triangle';

// Speeds rad/deg converters performance in iterations up
const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;
const FULL_ARC = Math.PI * 2;

@Component({
  selector: 'nologig-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent {

  /** Radians / Degrees converter
   * @description 1rad ≈ 57.29577951° or 17' or 45"
   * @example ƒ(deg) = rad × (180 / π)
   */
  rad2deg(rad: number): number { return rad * DEG; }

  /** Degrees / Radians converter
   * @description 1deg ≈ 0,017453293rad or 180° =	π ≈ 3.14159265359...
   * @example ƒ(rad) = deg × (π / 180)
   */
  deg2rad(deg: number): number { return deg * RAD; }

  /** Pythagoras' theorem
   * @description Often called the "Pythagorean equation".
   *  States that the square of the hypotenuse is equal to the sum of the squares of the other two sides.
   *  The theorem can be written as an equation relating the lengths of the catheti `a`, `b` and hypotenuse `c`.
   *#   ƒ(c²) = a² + b²
   **     `a`: Length of the adjacent cathetus
   **     `b`: Length of the opposite cathetus
   **     `c`: Length of the hypotenuse
   * @param triRight `{ adjacent, opposite, hypotenuse }` wich one of the parameter must be `undefined`.
   */
  pythagorean(triRight: IPythagorasTriangle): IRightTriangle {

    let { adjacent, opposite, hypotenuse } = triRight;

    if (!adjacent) {
      //      _______
      // a = √c² - b²
      adjacent = Math.sqrt((hypotenuse ** 2) - (opposite ** 2));
      return { adjacent, opposite, hypotenuse };
    }

    if (!opposite) {
      //      _______
      // b = √c² - a²
      opposite = Math.sqrt((hypotenuse ** 2) - (adjacent ** 2));
      return { adjacent, opposite, hypotenuse };
    }
    //      _______
    // c = √a² + b²
    hypotenuse = Math.sqrt((adjacent ** 2) + (opposite ** 2));
    return { adjacent, opposite, hypotenuse };
  }

}
