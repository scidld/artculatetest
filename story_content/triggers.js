function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5knNgiOsqj9":
        Script1();
        break;
      case "5hO3P4OZDTQ":
        Script2();
        break;
      case "6U76Q1klXXV":
        Script3();
        break;
      case "6DdulKlj6QS":
        Script4();
        break;
      case "5Zkc0Io6HjI":
        Script5();
        break;
      case "6lqo66SFEb2":
        Script6();
        break;
      case "6CSP0Vn8A3V":
        Script7();
        break;
      case "6J5MgdECcc8":
        Script8();
        break;
      case "6i31pJ2zCAq":
        Script9();
        break;
      case "6aivGBdmbc2":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5YI5euEKxAm');
const duration = 750;
const easing = 'ease-out';
const id = '5gpWzYlT9j6';
const pulseAmount = 0.07;
const delay = 9521;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6LOv6NgVzSb');
const duration = 750;
const easing = 'ease-out';
const id = '5hrcwi7ljal';
const pulseAmount = 0.07;
const delay = 8021;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6LOv6NgVzSb');
const duration = 750;
const easing = 'ease-out';
const id = '5hrcwi7ljal';
const pulseAmount = 0.07;
const delay = 7104;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6EROZldRK2A');
const duration = 750;
const easing = 'ease-out';
const id = '6DGSe9NmTB3';
const pulseAmount = 0.07;
const delay = 13000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('6EROZldRK2A');
const duration = 750;
const easing = 'ease-out';
const id = '6DGSe9NmTB3';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5YI5euEKxAm');
const duration = 750;
const easing = 'ease-out';
const id = '6JTCjHN1v3i';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5wSSI9qCI71');
const duration = 750;
const easing = 'ease-out';
const id = '5qug2jtXoT9';
const pulseAmount = 0.07;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5wSSI9qCI71');
const duration = 750;
const easing = 'ease-out';
const id = '6T9dk6v0zxH';
const shakeAmount = 2;
const delay = 9250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5lwcoPSyxlE');
const duration = 750;
const easing = 'ease-out';
const id = '6MR2agG917w';
const pulseAmount = 0.07;
const delay = 750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6PFaCAyef76');
const duration = 750;
const easing = 'ease-out';
const id = '69GdngwQGYp';
const pulseAmount = 0.07;
const delay = 6750;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
