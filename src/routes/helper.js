import * as tax_data from './data.js';
// @ts-ignore
import {yearlyIncome, year, marrStatus, taxes, afterTax} from "./+page.svelte"


// @ts-ignore
export function calcTaxes() {
    let intIncome = yearlyIncome //parseInt(yearlyIncome);
    let curr_taxes = 0;

    // grab correct tax data for year
    // @ts-ignore
    let currMap = tax_data.yearToTax[year];
    let rates = currMap["percents"];
    let salaries = currMap[marrStatus];
    // @ts-ignore
    let govtSpendingPercents = currMap["budget_percents"];

    // calculate income tax
    for (let i = 1; i < salaries.length; i++) {
        if (intIncome >= salaries[i]) {
            curr_taxes += (salaries[i] - salaries[i-1])*rates[i-1];
        } else {
            curr_taxes += (intIncome - salaries[i - 1])*rates[i-1];
        break;
        }
    }
    if (intIncome > salaries[salaries.length-1]) {
        curr_taxes += (intIncome - salaries[salaries.length-1])*rates[rates.length-1];
    }

    // calculate fica
    let socSec = 0;
    if (intIncome > currMap["ss"]) {
        socSec = currMap["ss"] * .062;
    } else {
        socSec = intIncome * .062;
    }
    let medicare = 0;
    if (marrStatus == "single" || marrStatus == "head") {
        if (intIncome > 200000) {
        medicare = intIncome * .0145
        medicare += (intIncome - 200000) * .0235;
        } else {
        medicare = intIncome * .0145;
        }
    } else if (marrStatus == "seperate") {
        if (intIncome > 125000) {
        medicare = intIncome * .0145
        medicare += (intIncome - 125000) * .0235;
        } else {
        medicare = intIncome * .0145;
        }
    } else if (marrStatus == "together") {
        if (intIncome > 250000) {
        medicare = intIncome * .0145
        medicare += (intIncome - 250000) * .0235;
        } else {
        medicare = intIncome * .0145;
        }
    }

    // update tax info
    // @ts-ignore
    taxes = curr_taxes + socSec + medicare;
    // @ts-ignore
    afterTax = intIncome - taxes;

    // code that fills in chart data
    /*let yourPayments = [medicare, socSec]
    for (let i = 2; i < govtSpendingPercents.length; i++) {
        yourPayments.push(govtSpendingPercents[i] * taxes);
    }*/
    //return taxes;
}