class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter / 2;
  }

/**
 * Draw SVG space
 */

  drawSVGSpace(){
    const svgSpace = document.createElementNS('http://www.w3.org/2000/svg','rect');

    svgSpace.setAttribute('id', this.id);
    svgSpace.setAttribute('cx', (this.x * this.diameter) + this.radius);
    svgSpace.setAttribute('cy', (this.y * this.diameter) + this.radius);
    svgSpace.setAttribute('r', this.radius - 8);
    svgSpace.setAttribute('fill', '#fff');
    svgSpace.setAttribute('stroke', 'none');

    const mask = document.getElementById('mask');
    mask.appendChild(svgSpace);
  }
}