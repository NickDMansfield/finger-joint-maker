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
const keyToothHeight = woodThickness;

const railThickness = 15; // arbitrary
const railLength = metric(4); // arbitrary
const wallHeight = HALF_INCH; //arbitrary - make sure it is >= your router's base height or there could be slippage

const stepKeyWidth = fingerWidth *2;
const stepKey = `
${STLCube(stepKeyWidth, railDepth, keyToothHeight)}
${STLCube(fingerWidth, fingerWidth, keyToothHeight, 0, 0, keyToothHeight)}
`;
const stepKeyGuardRailDepth = 25;
const stepKeyGuardRailLength = 100;

const stepKeyWithGuardOneBackTooth = `
${STLCube(stepKeyWidth, railDepth + stepKeyGuardRailDepth, fingerWidth, 0, 0, 0)}
${STLCube(fingerWidth, fingerWidth, keyToothHeight, 0, fingerWidth, woodThickness)} // woodside tooth
${STLCube(fingerWidth, fingerWidth, keyToothHeight, 0, railDepth + fingerWidth, woodThickness)} // railside corner tooth
${STLCube(stepKeyGuardRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
`;

const stepKeyWithGuardTwoBackTeeth = `
${STLCube(stepKeyWidth, railDepth + stepKeyGuardRailDepth, fingerWidth, 0, 0, 0)}
${STLCube(fingerWidth, fingerWidth, keyToothHeight, 0, fingerWidth, woodThickness)} // woodside tooth
${STLCube(fingerWidth, fingerWidth, keyToothHeight, 0, railDepth + fingerWidth, woodThickness)} // railside corner tooth
${STLCube(fingerWidth, fingerWidth, keyToothHeight, stepKeyWidth, stepKeyGuardRailDepth - fingerWidth, woodThickness)} // railside outside tooth
${STLCube(stepKeyGuardRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
`;

const keyRailLength = 100;
const keyRailToothDiameter = fingerWidth;
const attachableRail = `
${STLCube(keyRailLength, stepKeyGuardRailDepth, wallHeight, 0, 0, 0)} // rail
${STLCube(keyRailToothDiameter, keyRailToothDiameter, keyToothHeight, 0, keyRailToothDiameter, wallHeight)} // wallside tooth
${STLCube(keyRailToothDiameter, keyRailToothDiameter, keyToothHeight, fingerWidth * 2, keyRailToothDiameter, wallHeight)} // railside corner tooth
`;

const stepper = `
${STLCube(fingerWidth * 3, railDepth + railThickness, wallHeight, 0, 0, woodThickness)} // top platform
${STLCube(railLength, railThickness, wallHeight, fingerWidth *3, railDepth, woodThickness)} // rail
${STLCube(fingerWidth, keyToothHeight, fingerWidth, 0, 0, 0)} // tooth 1
${STLCube(fingerWidth, keyToothHeight, fingerWidth, fingerWidth *2, 0, 0)} // tooth 2
`;

const starterGuard = `
${STLCube(0, 0, 0)}
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