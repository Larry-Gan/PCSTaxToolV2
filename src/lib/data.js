export const supportedYears = [
    {
      value: "2018",
      label: "2018",
    },{
      value:  "2019",
      label:  "2019",
    }, {
      value: "2020",
      label: "2020",
    }, {
      value: "2021",
      label: "2021",
    }, {
      value: "2022",
      label: "2022",
    }];
export const personType = [{
      value: "Single",
      label: "Single",
    }, {
      value: "Seperate",
      label: "Seperate",
    }, {
      value: "Together",
      label: "Together",
    }, {
      value: "Head",
      label: "Head",
    }];

export const mappings2018 = {
"percents" : [.1, .12, .22, .24, .32, .35, .37],
"single": [0, 9525, 38700, 82500, 157500, 200000, 500000],
"seperate": [0, 9525, 38700, 82500, 157500, 200000, 300000],
"together": [0, 19050, 77400, 165000, 315000, 400000, 600000],
"head": [0, 13600, 51800, 82500, 157500, 200000, 500000],
"ss": 128400,
"budget": 6300000000000,
"budgetPercents": [.1678, .1646, .1577, .1103, .0868, .0848, .0685, .0326, .0209, .0205, .0184, .0134, .0122, .0121, .0090, .0060, .0045, .0029, .0069,],
"standardDeduction": {
  "single": 12000,
  "seperate": 12000,
  "together": 24000,
  "head": 18000
}
};

export const mappings2019 = {
"percents" : [.1, .12, .22, .24, .32, .35, .37],
"single": [0, 9700, 39475, 84200, 160725, 204100, 510300],
"seperate": [0, 9700, 39475, 84200, 160725, 204100, 306175],
"together": [0, 19400, 78950, 168400, 321450, 408200, 612350],
"head": [0, 13850, 52850, 84200, 160700, 204100, 510300],
"ss": 132900,
"budget": 6600000000000,
"budgetPercents": [.1756, .1651, .1597, .1098, .0859, .0884, .0608, .0328, .0195, .0235, .0181, .0092, .0110, .0124, .0079, .0059, .0061, .0037, .0048,],
"standardDeduction": {
  "single": 12200,
  "seperate": 12200,
  "together": 24400,
  "head": 18350
}
};

export const mappings2020 = {
"percents" : [.1, .12, .22, .24, .32, .35, .37],
"single": [0, 9875, 40125, 85525, 163300, 207350, 518400],
"seperate": [0, 9875, 40125, 85525, 163300, 207350, 311025],
"together": [0, 19750, 80250, 171050, 326600, 414700, 622050],
"head": [0, 14100, 53700, 85500, 163300, 207350, 518400],
"ss": 137700,
"budgetPercents": [0.1452, 0.1261, 0.1203, 0.1038, 0.1592, 0.0604, 0.0649, 0.0269, 0.0102, 0.0313, 0.0215, 0.0201, 0.0084, 0.0101, 0.0714, 0.0045, 0.0045, 0.0034, 0.0077],
"standardDeduction": {
  "single": 12400,
  "seperate": 12400,
  "together": 24800,
  "head": 18650 
}
};

export const mappings2021 = {
"percents" : [.1, .12, .22, .24, .32, .35, .37],
"single": [0, 9950, 40525, 86375, 164925, 209425, 523600],
"seperate": [0, 9950, 40525, 86375, 164925, 209425, 314150],
"together": [0, 19900, 81050, 172750, 329850, 418850, 628301],
"head": [0, 14200, 54200, 86350, 164900, 209400, 523600],
"ss": 142800,
"budgetPercents": [.1374, .1178, .1111, .0998, .1987, .0576, .0696, .0256, .0195, .0505, .0218, .0125, .0078, .0087, .0387, .0041, .0036, .0018, .0131],
"standardDeduction": {
  "single": 12550,
  "seperate": 12550,
  "together": 25100,
  "head": 18800
}
};

export const mappings2022 = {
"percents" : [.1, .12, .22, .24, .32, .35, .37],
"single": [0, 10275, 41775, 89075, 170050, 215950, 539900],
"seperate": [0, 10275, 41775, 89075, 170050, 215950, 332925],
"together": [0, 20550, 83550, 178150, 340100, 431900, 647850],
"head": [0, 14650, 55900, 89050, 170050, 215950, 539900],
"ss": 147000,
"budgetPercents": [.1649, .1528, .1395, .1305, .104, .0894, .0513, .033, .0094, .0254, .0332, .0111, .0098, .0106, .0086, .0049, .0037, .0019, .016],
"standardDeduction": {
  "single": 12950,
  "seperate": 12950,
  "together": 25900,
  "head": 19400
}
};

export const yearToTax = {
"2018" : mappings2018,
"2019" : mappings2019,
"2020" : mappings2020,
"2021" : mappings2021,
"2022" : mappings2022,
}

export const budgetGroup = [
"Medicare",
"Social Security",
"National Defense",
"Health",
"Income Security",
"Net Interest",
"General Government",
"Veterans Benefits and Services",
"International Affairs",
"Education, Training, Employment, Social Services",
"Transportation",
"Community and Regional Development",
"Natural Resources and Environment",
"Administration of Justice",
"Commerce and Housing Credit",
"General Science, Space, Technology",
"Agriculture",
"Energy",
"Unreported",
]

export const defaultSpend2022 =  {
  labels: budgetGroup,
  datasets: [{
    data: [1057140000000, 1036980000000, 993510000000, 694890000000, 546840000000, 534240000000, 431550000000.00006, 205379999999.99997, 131669999999.99998, 129150000000, 115920000000, 84420000000, 76860000000, 76230000000, 56699999999.99999, 37800000000, 28349999999.999996, 18270000000, 43470000000],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
    ],
    hoverOffset: 4
  }]
};

export const test = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: [
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
        '#AC64AD',
      ],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774',
        '#DA92DB',
      ],
    },
  ],
};

/**
 *   Citations:
 *   Standard deduction: https://en.wikipedia.org/wiki/StandardDeduction
 * 
 *  */
