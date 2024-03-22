function scuberGreetingForFeet(feet) {
  // Write your code here!

  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet >= 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  // describe('ternaryCheckCity()', function () {
  //   it('returns "Ok, sounds good." when the city is NYC', function () {
  //     expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
  //   });

  //   it('should return "No go." if the destination city is not NYC', function () {
  //     expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
  //   });
  // });
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  // describe('switchOnCharmFromTip()', function () {
  //   it('should return "Thank you so much." if the tip is generous', function () {
  //     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
  //   });

  //   it('should return "Thank you." if the tip is not as generous', function () {
  //     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
  //   });

  //   it('should return "Bye." if anything else', function () {
  //     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
  //   });
  // });

  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
