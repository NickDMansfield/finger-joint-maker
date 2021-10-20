'use strict'

import { STLCube } from "basic-stl-generator-mk2";

import  * as fs from "fs";

const HALF_INCH = 12.5;

const metric = function(inches) {
    return inches * 25;
}

const routerDepth = 100; // 4"
const fingerWidth = HALF_INCH; // 0.5"
const woodThickness = HALF_INCH; // 0.5"
const routerFlatsideBitDistance = 62.5; // 2.5"
const routerBitSideEdge = (routerDepth-fingerWidth) / 2;
const railDepth = routerBitSideEdge + woodThickness; // 56.25; // 2.25"
const railThickness = 15; // arbitrary
const railLength = metric(4); // arbitrary
const wallHeight = HALF_INCH; //arbitrary - make sure it is >= your router's base height or there could be slippage
const keyToothHeight = woodThickness;

const stepKeyWidth = fingerWidth *2;
const stepKey = `
${STLCube(0,0,0, stepKeyWidth, railDepth, keyToothHeight)}
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, 0, 0, keyToothHeight)}
`;
const stepKeyGuardRailDepth = 25;
const stepKeyGuardRailLength = 100;

const stepKeyWithGuardOneBackTooth = `
${STLCube(0,0,0, stepKeyWidth, railDepth + stepKeyGuardRailDepth, fingerWidth, 0, 0, 0)}
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, 0, fingerWidth, woodThickness)} // woodside tooth
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, 0, railDepth + fingerWidth, woodThickness)} // railside corner tooth
${STLCube(0,0,0, stepKeyGuardRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
`;

const stepKeyWithGuardTwoBackTeeth = `
${STLCube(0,0,0, stepKeyWidth, railDepth + stepKeyGuardRailDepth, fingerWidth, 0, 0, 0)}
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, 0, fingerWidth, woodThickness)} // woodside tooth
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, 0, railDepth + fingerWidth, woodThickness)} // railside corner tooth
${STLCube(0,0,0, fingerWidth, fingerWidth, keyToothHeight, stepKeyWidth, stepKeyGuardRailDepth - fingerWidth, woodThickness)} // railside outside tooth
${STLCube(0,0,0, stepKeyGuardRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
`;

const keyRailLength = 100;
const keyRailToothDiameter = fingerWidth;
const attachableRail = `
${STLCube(0,0,0, keyRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
${STLCube(0,0,0, keyRailToothDiameter, keyRailToothDiameter, keyToothHeight, 0, keyRailToothDiameter, wallHeight)} // wallside tooth
${STLCube(0,0,0, keyRailToothDiameter, keyRailToothDiameter, keyToothHeight, fingerWidth * 2, keyRailToothDiameter, wallHeight)} // railside corner tooth
`;

const stepper = `
${STLCube(0,0,0, fingerWidth * 3, railDepth + railThickness, wallHeight, 0, 0, woodThickness)} // top platform
${STLCube(0,0,0, railLength, railThickness, wallHeight, fingerWidth *3, railDepth, woodThickness)} // rail
${STLCube(0,0,0, fingerWidth, keyToothHeight, fingerWidth, 0, 0, 0)} // tooth 1
${STLCube(0,0,0, fingerWidth, keyToothHeight, fingerWidth, fingerWidth *2, 0, 0)} // tooth 2
`;

fs.writeFile("./stepkey.stl", stepKey, () => {
    fs.writeFile("./stepper.stl",stepper, () => {
        fs.writeFile("./stepKeyWithGuardOneBackTooth.stl", stepKeyWithGuardOneBackTooth, () => {
            fs.writeFile("./stepKeyWithGuardTwoBackTeeth.stl", stepKeyWithGuardTwoBackTeeth, () => {
                fs.writeFile("./attachableRail.stl", attachableRail, () => {

                })
            })

        })
    })
});