export function calcIncomeTaxes(taxableIncome, currMap, marrStatus) {
    let incomeTaxes = 0;
    let rates = currMap["percents"];
    let salaries = currMap[marrStatus];

    // calculate income tax
    for (let i = 1; i < salaries.length; i++) {
        if (taxableIncome >= salaries[i]) {
            incomeTaxes += (salaries[i] - salaries[i-1])*rates[i-1];
        } else {
            incomeTaxes += (taxableIncome - salaries[i - 1])*rates[i-1];
        break;
        }
    }
    if (taxableIncome > salaries[salaries.length-1]) {
        incomeTaxes += (taxableIncome - salaries[salaries.length-1])*rates[rates.length-1];
    }
    return incomeTaxes;
}

export function calcFicaTaxes(grossIncome, currMap, marrStatus) {
// calculate social security tax
let socSec = 0;
if (grossIncome > currMap["ss"]) {
    socSec = currMap["ss"] * .062;
} else {
    socSec = grossIncome * .062;
}

// calculate medicare tax
let medicare = 0;
if (marrStatus == "single" || marrStatus == "head") {
    if (grossIncome > 200000) {
    medicare = 200000 * .0145
    medicare += (grossIncome - 200000) * .0235;
    } else {
    medicare = grossIncome * .0145;
    }
} else if (marrStatus == "separate") {
    if (grossIncome > 125000) {
    medicare = 125000 * .0145
    medicare += (grossIncome - 125000) * .0235;
    } else {
    medicare = grossIncome * .0145;
    }
} else if (marrStatus == "together") {
    if (grossIncome > 250000) {
    medicare = 250000 * .0145
    medicare += (grossIncome - 250000) * .0235;
    } else {
    medicare = grossIncome * .0145;
    }
}

return [socSec, medicare]
}
