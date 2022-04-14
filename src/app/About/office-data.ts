import { Office } from "./Office";

export class OfficeData {
    
    static offices: Office[] = [
        {
            id: 1,
            name: 'London',
            desc: 'A beatiful office in the center of Mayfair Square',
            street: 'Park Lane',
            height: 200,
            parkingAccess: true
        },
        {
            id: 2,
            name: 'Madrid',
            desc: 'A beatiful office near the Real Mardid Stadium',
            street: 'Madrid Lane',
            height: 400,
            parkingAccess: false
        },
        {
            id: 3,
            name: 'Paris',
            desc: 'A beatiful office in the heart of Paris with a view of the Eiffel Tower',
            street: 'Paris Lane',
            height: 240,
            parkingAccess: true
        },
        {
            id: 4,
            name: 'Denver',
            desc: 'A proper American style office in downtown Denver City',
            street: 'Howl Lane',
            parkingAccess: true
        },
    ]
}