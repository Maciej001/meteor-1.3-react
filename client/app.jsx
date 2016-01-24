import React from 'react';
import estimote from 'phonegap-estimotebeacons';

estimote.beacons.startRangingBeaconsInRegion(
    {}, // Empty region matches all beacons.
    function(result) {
        console.log('*** Beacons ranged ***')
        estimote.beacons.printObject(result) },
    function(errorMessage) {
        console.log('Ranging error: ' + errorMessage) });

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
        <h1>My App</h1>
        <hr />
        <div>{content}</div>
    </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);