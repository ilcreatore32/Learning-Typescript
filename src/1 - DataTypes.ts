/*  Learning Data Types
    Tipos de Datos
*/
 export const side: number = 8;
 export const text: string = ", the result is: ";
 export const respond: boolean = true;

 export const user: {
  name: string;
  lastName: string;
  age: number;
} = {
  name: "Weishler",
  lastName: "Berman",
  age: 21,
};

 export const skills: string[] = ["HTML", "CSS", "Javascript"];

 export const file: [string, string] = ["archivo", "Valor"];

 export enum colors {
  red = "#ff0000",
  blue = "#00ff00",
  green = "#0000ff",
}

 export const anything: any = 12;
