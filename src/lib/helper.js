export let formatting_options = {
    style: 'currency',
    currency: 'USD',
  };

export function calcIncomeTaxes(taxableIncome, currYearTaxData, marrStatus) {
    let incomeTaxes = 0;
    let rates = currYearTaxData["percents"];
    let salaries = currYearTaxData[marrStatus];

    // Loop through tax brackets and apply tax rates to corresponding brackets
    for (let i = 1; i < salaries.length; i++) {
        if (taxableIncome >= salaries[i]) {
            incomeTaxes += (salaries[i] - salaries[i-1])*rates[i-1];
        } else {
            incomeTaxes += (taxableIncome - salaries[i - 1])*rates[i-1];
            break;
        }
    }

    // Loop misses taxes in the largest salary bands, this if statement takes care of that issue
    if (taxableIncome > salaries[salaries.length-1]) {
        incomeTaxes += (taxableIncome - salaries[salaries.length-1])*rates[rates.length-1];
    }

    return incomeTaxes;
}

export function calcFicaTaxes(grossIncome, marrStatus, currYearTaxData, medicareInfo) {
    // Calculate social security tax
    let socSec = 0;
    if (grossIncome > currYearTaxData["ss"]) {
        socSec = currYearTaxData["ss"] * .062;
    } else {
        socSec = grossIncome * .062;
    }

    // Calculate medicare tax, honestly this can be improved
    let medicare = 0;
    let medicareCutoff = medicareInfo[marrStatus]["cutoff"];
    let medicarePercents = medicareInfo["percents"]
    if (grossIncome > medicareCutoff) {
        medicare = medicareCutoff * medicarePercents[0];
        medicare += (grossIncome - medicareCutoff) * medicarePercents[1];
    } else {
        medicare = grossIncome * medicarePercents[0];
    }

    // Return both social security tax and medicare tax, to be split up later
    return [socSec, medicare];
}

export function generateRandomColors(numColors) {
    // Make two colors with different opacity, pie body color is less opaque
    // Start off with the color red for medicare and blue for social security
    const pieColor = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];
    const pieOutlineColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'];

    // Generate another random color for each additional category we need
    for (let i = 0; i < numColors-2; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      pieColor.push(`rgba(${r}, ${g}, ${b}, ${0.2})`);
      pieOutlineColor.push(`rgba(${r}, ${g}, ${b}, ${1})`);
    }

    // Return the color of the pie and the pie outline
    return [pieColor, pieOutlineColor];
}

  
export function turnToDollar(num) {
    // num.toLocaleString errors when run on null values, there's probably a better way to fix this issue
    if (num == null) {
        num = 0;
    }
    
    return num.toLocaleString("en-US", formatting_options);
}

export function calcEffectiveTaxRate(totalIncome, totalTax) {
    // Calculate effective tax rate
    let rate = 100 * totalTax / totalIncome;

    // Round effective rate
    rate = +rate.toFixed(2);
    return rate;
}

  // plugin made to add spacing to charts
  export const legendMargin = {
    id: "legendMargin",
    beforeInit: function (chart) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return (this.height += 10);
      };
    }
  };
