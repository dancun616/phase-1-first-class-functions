const drivers= ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= (drivers) => {
    return(drivers.slice(0, 2));
}
console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers= (drivers) => {
    return(drivers.slice(2, 4));
}
console.log(returnLastTwoDrivers(drivers));
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]);
console.log(selectingDrivers[1]);
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));
const createFareMultiplier = function (a) {
    return function (fare) {
    return(fare*a);
    }
}
console.log(createFareMultiplier(2));
const fareQuintupler= createFareMultiplier(5);
console.log(fareQuintupler(5));
const fareDoubler= createFareMultiplier(2);
console.log(fareDoubler);
const fareTripler= createFareMultiplier(3);
console.log(fareTripler)
const selectDifferentDrivers= function (list,a) {
    return a(list);
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))