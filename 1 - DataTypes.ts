/*  Learning Data Types
    Tipos de Datos
*/
const side: number = 8;
const text: string = ", the result is: ";
const respond: boolean = true;

const user: {
  name: string;
  lastName: string;
  age: number;
} = {
  name: "Weishler",
  lastName: "Berman",
  age: 21,
};

const skills: string[] = ["HTML", "CSS", "Javascript"];

const file: [string, string] = ["archivo", "Valor"];

enum colors {
  red = "#ff0000",
  blue = "#00ff00",
  green = "#0000ff",
}

const anything: any = 12;