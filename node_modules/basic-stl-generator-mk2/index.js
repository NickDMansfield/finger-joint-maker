export function STLCube(x = 0, y = 0, z = 0, xsize = 25, ysize = 25, zsize = 25, xOffset = 0, yOffset = 0, zOffset = 0) {
  function n(number) {
    return Number(number).toFixed(1) * 25;
  }
  function nx(number) {
    return Number(number).toFixed(1) * xsize;
  }
  function ny(number) {
    return Number(number).toFixed(1) * ysize;
  }
  function nz(number) {
    return Number(number).toFixed(1) * zsize;
  }

  return `
solid BASICSTLCUBEX${x}Y${y}Z${z}
  facet normal  0.0   0.0  ${nz(-1.0)}
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0   0.0  ${nz(-1.0)}
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
    endloop
  endfacet
  facet normal  ${nx(-1.0)} 0.0   0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
    endloop
  endfacet
  facet normal  ${nx(-1.0)} 0.0   0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  ${ny(1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  ${ny(1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  ${nx(1.0)}  0.0 0.0
    outer loop
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  ${nx(1.0)}  0.0 0.0
    outer loop
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  ${ny(-1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  ${ny(-1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 0.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  0.0  ${nz(1.0)}
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
  facet normal  0.0  0.0  ${nz(1.0)}
    outer loop
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 0.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 1.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
      vertex    ${nx(x + 0.0) + xOffset}   ${ny(y + 1.0) + yOffset}   ${nz(z + 1.0) + zOffset}
    endloop
  endfacet
endsolid BASICSTLCUBEX${x}Y${y}Z${z}
`;
}
