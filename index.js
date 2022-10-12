// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start2, destination2) {
    let fare;
    let distance = distanceTravelledInFeet(start2, destination2);
    if (distance < 400) {
        fare = 0;
    }
    else if (distance >= 400 && distance <= 2000 ) {
        fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25.00;
    } else if (distance > 2500) {
        fare = `cannot travel that far`;
    }
    return fare;
}