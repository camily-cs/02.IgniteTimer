/* SOBRESCREVENDO TIPAGEM DO STYLED-COMPONENTS E INTEGRANDO ELE TOTALMENTE AO TYPESCRIPT

Nesse arquivos teremos apenas códigos de definição(d) typescript, ou seja, apenas código typescript 
Aqui estarão as DEFINIÇÕES DE TIPOS

No fim das contas, esse arquivo serve para que o vscode indique as propriedades(EX: primary: '#8257e6') 
que criamos no nosso tema(arquivo default.ts) quando a gente for chama-las ao estilizar algo. 
Tudo isso para facilitar a visualização das propriedades que criamos no nosso tema, 
sem ter que ficar voltando no arquivo do tema toda hora, e também para o vscode 
identificar erros caso a gente chame uma propriedade que não tenha sido criada no nosso tema.
*/

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';


/* Abaixo, criamos uma variavel 'ThemeType' 
para armazenar as propriedades existentes dentro do tema 'defaultTheme' criado no arquivo 'default.ts'*/
type ThemeType = typeof defaultTheme;


/* declarando uma tipagem para o modulo styled-components */
declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {}
}
