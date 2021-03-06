// Oppgave 1. Få koden til å kompilere.

interface Person {
    firstName: string,
    lastName: string
}

function greeting(person: Person): String {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let covid: Person = { firstName: "Covid", lastName: "19" };

greeting(covid);

// Oppgave 2. Assign en type til typeWithShape som gjør at vi vet hvilke verdier som er tilgjengelige.

export function interfaceByShape(typeWithShape: {propertyOfType: string}): void {
    console.log(typeWithShape.propertyOfType)
}

interface LabeledValue{
    label: string
}

export function printLabel(labelledObject: LabeledValue){
    console.log(labelledObject.label)
}

//Oppgave 3. Som vi lærte så fokuserer typescript på structural typing.
// Lag et interface som er et supersett av LabelledValue og pass det til printLabel.

interface LabelledValueExpanded{
    label: string
    extraLabel: string
}

let temp: LabelledValueExpanded = {label: "test", extraLabel: "extra"};

printLabel(temp);

// Oppgave 4. Lag et interface som passer med koden under. Bruk optional typer

interface SquareConfig {
    color?: string,
    area?: number
    width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

console.log(mySquare);

const labeledValueWithMore = {label: 'MyLabel', extraLabel: 'ExtraLabel'};

printLabel(labeledValueWithMore);

// Oppgave 5. Funksjoner som typer. Assign mySearch til en funksjon som på en lovlig måte

interface SearchFunc {
    (source: string, target: string): boolean;
}

let mySearch: SearchFunc = (source: string, target: string): boolean => {
    return source === target
};