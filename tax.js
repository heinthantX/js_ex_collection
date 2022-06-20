function calcPercentage(value, percentage) {
  return value * (percentage / 100);
}

function calcParentRelief(numberOfParent) {
  if (numberOfParent > 0 && numberOfParent <= 2) {
    return numberOfParent * 1000000;
  } else {
    return 0;
  }
}

function calcSelfRelief(yearlyIncome) {
  return calcPercentage(yearlyIncome, 20);
}

function calcMarryAndChildReief(isMarried, numberOfChild) {
  if (isMarried === true) {
    let x = 0;
    x = x + 1000000;
    if (numberOfChild > 0) {
      x = x + numberOfChild * 500000;
    }
    return x;
  } else {
    return 0;
  }
}

function calcTotalRelief(
  yearlyIncome,
  numberOfParent,
  isMarried,
  numberOfChild
) {
  const selfRelief = calcSelfRelief(yearlyIncome);
  const parentRelief = calcParentRelief(numberOfParent);
  const marryAndChildRelief = calcMarryAndChildReief(isMarried, numberOfChild);
  const ssb = 72000;

  console.log('self relief:', selfRelief.toLocaleString());
  console.log('parent relief:', parentRelief.toLocaleString());
  console.log('marry and child relief:', marryAndChildRelief.toLocaleString());
  console.log('ssb:', ssb);

  return selfRelief + parentRelief + marryAndChildRelief + ssb;
}

function calcTax(yearlyIncome, numberOfParent, isMarried, numberOfChild) {
  const totalRelief = calcTotalRelief(
    yearlyIncome,
    numberOfParent,
    isMarried,
    numberOfChild
  );
  console.log('totalRelief:', totalRelief.toLocaleString());

  const taxableIncome = yearlyIncome - totalRelief;
  console.log('taxableIncome:', taxableIncome.toLocaleString());

  if (yearlyIncome >= 4800000) {
    let taxRate;
    let x;
    let y = taxableIncome;
    let totalTax = 0;

    if (taxableIncome >= 1) {
      y = y - 2000000;
    }

    if (taxableIncome >= 2000001) {
      taxRate = 5;
      if (y >= 3000000) {
        x = 3000000;
        y = y - x;
        totalTax = totalTax + calcPercentage(x, taxRate);
      } else {
        x = y;
        totalTax = totalTax + calcPercentage(x, taxRate);
      }
    } else {
      console.log("You don't need to pay tax.");
      return totalTax;
    }

    if (taxableIncome >= 5000001) {
      taxRate = 10;
      if (y >= 5000000) {
        x = 5000000;
        y = y - x;
        totalTax = totalTax + calcPercentage(x, taxRate);
      } else {
        x = y;
        totalTax = totalTax + calcPercentage(x, taxRate);
      }
    }

    if (taxableIncome >= 10000001) {
      taxRate = 15;
      if (y >= 10000000) {
        x = 10000000;
        y = y - x;
        totalTax = totalTax + calcPercentage(x, taxRate);
      } else {
        x = y;
        totalTax = totalTax + calcPercentage(x, taxRate);
      }
    }

    if (taxableIncome >= 20000001) {
      taxRate = 20;
      if (y >= 10000000) {
        x = 10000000;
        y = y - x;
        totalTax = totalTax + calcPercentage(x, taxRate);
      } else {
        x = y;
        totalTax = totalTax + calcPercentage(x, taxRate);
      }
    }

    if (taxableIncome >= 30000001) {
      taxRate = 25;
      x = y;
      totalTax = totalTax + calcPercentage(x, taxRate);
    }

    return totalTax;
  }
}

let totalTax = calcTax(19584000, 2, true, 2);
console.log('totalTax:', totalTax.toLocaleString());
