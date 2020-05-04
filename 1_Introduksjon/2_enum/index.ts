
// Enums og never
// Nyttige linker:
// https://www.typescriptlang.org/docs/handbook/enums.html

// 1. Lag Enum for Media, få koden til å kompilere og sett typer på resten

enum Media {

}

function getMedia(mediaName): Media {
    if (mediaName === 'VG' || mediaName == 'Dagbladet') {
        return Media.Newspaper;
    }

    if (mediaName === 'Se og Hør') {
        return Media.Magazine;
    }

    return "Ukjent media";
}

let mediaType: Media = getMedia('VG');


// 2. Lag en Enum som heter Color. Den skal ha tre mulige verdier, de dere ser i
// oppgaven. Rett opp eventuelle feil så ting kompilerer fint.
// 3. Se hva som skjer når man legger til ett nytt alternativ i enumen som ikke
// håndteres av funksjonen.

export function colorsAreCool() {
    console.log(switchOnEnums());
}

export function switchOnEnums(color: Color){
    switch (color) {
        case Color.YELLOW: {
        }
        case Color.GREEN: {
        }
        case Color.BLUE: {
        }
        default:
            neverHappens(color);
    }
}

export function neverHappens(neverEver: never): void {
    throw new Error("Didn't expect to get here");

}