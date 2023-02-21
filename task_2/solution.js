function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum
    let shippingSum;

    // если productSum равно 0,
    // то shippingSum присвоить значение 0
    if (productSum == 0) {
        shippingSum = 0;
    }

    // если productSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
    if (productSum >= freeShippingMinSum) {
        shippingSum = 0;
    }

    // если productSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice
    if ((productSum > 0) && (productSum < freeShippingMinSum)) {
        shippingSum = shippingPrice;
    }

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountSum
    let discountSum;

    // если productSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productSum,
    // иначе присвойте discountSum значение 0
    if (productSum >= discountMinSum) {
        discountSum = (discountPart * productSum) / 100;
    }
    else {
        discountSum = 0;
    }

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum
    let totalSum;

    // присвойте totalSum значение productSum
    totalSum = productSum;

    // уменьшите totalSum на discountSum
    totalSum -= discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum
    totalSum += shippingSum;

    // создайте переменную freeShipping
    let freeShipping;

    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false
    freeShipping = (shippingSum == 0);

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
