{
  console.log(0b111110111);
  console.log(0o767);
}

{
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1 / 0', Number.isFinite(1 / 0));
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));
}

{
  console.log('25', Number.isInteger(25));
  console.log('25.1', Number.isInteger(25.1));
}
