import chalk from 'chalk';

const DEFAULT_COLOR = 'blue';

export const chalkLog = (output: string, color?: string): void => {
    const extraSpacers = output.replace(/\.*/, '*');
    const usedColor = color || DEFAULT_COLOR;

    // @ts-ignore
    console.log(chalk[usedColor](`*****${extraSpacers}*****`));
    console.log(`*    ${output}    *`);
    console.log(`*****${extraSpacers}*****`);
}