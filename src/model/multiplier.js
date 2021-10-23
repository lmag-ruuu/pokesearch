export const multiplierFuntion = (pokemonType, types) => {
  let inmune = [];
  let strongly = [];
  let weak = [];
  let veryWeak = [];
  const multiplier = {};
  const defTypeOne = types[pokemonType[0]].defense;
  let defTypeTwo;
  const defenses = [];
  //Exist other type?
  if (pokemonType.length > 1) {
    defTypeTwo = types[pokemonType[1]].defense;
  }
  //Create defenses both types
  if (defTypeTwo !== undefined) {
    defenses.push(defTypeOne);
    defenses.push(defTypeTwo);
  } else {
    defenses.push(defTypeOne);
  }

  // console.log(defenses);
  //INMUNE?
  let zeero = [];
  if (defenses.length > 1) {
    zeero = defenses[0]["zero"].concat(defenses[1]["zero"]);
  } else {
    zeero = defenses[0]["zero"];
  }
  inmune = zeero.slice();

  //STRONGLY resist?
  // console.log(defenses.length);
  const halfOne = defenses[0]["half"];
  halfOne.forEach((half) => {
    if (defenses.length > 1) {
      let stronglie = defenses[1]["half"].find((el) => el === half);
      if (stronglie !== undefined) {
        strongly.push(stronglie);
      }
    }
  });

  //just RESISTS

  let resists = [];
  defenses.map((el) => {
    el["half"].forEach((el) => {
      if (!inmune.includes(el)) {
        if (!strongly.includes(el)) {
          if (!resists.includes(el)) {
            resists.push(el);
          }
        }
      }
    });
  });
  //weak
  defenses.forEach((el) => {
    el["double"].forEach((e) => {
      if (!inmune.includes(e)) {
        if (!strongly.includes(e)) {
          if (!weak.includes(e)) {
            weak.push(e);
          }
        }
      }
    });
  });
  //very weak
  let weakArr = defenses[0]["double"];
  for (let i = 0; i < weakArr.length; i++) {
    if (defenses.length > 1) {
      let weak = defenses[1]["double"].find((el) => el === weakArr[i]);
      if (weak !== undefined) {
        veryWeak.push(weak);
      }
    }
  }

  //Remove repeat type
  let doubleTemp = weak.filter((el) => !veryWeak.includes(el));
  let resistsTemp = resists.filter((el) => !weak.includes(el));
  weak = doubleTemp.filter((el) => !resists.includes(el));
  resists = resistsTemp;

  if (inmune.length > 0) {
    multiplier.inmune = inmune;
  }
  if (resists.length > 0) {
    multiplier.resists = resists;
  }
  if (strongly.length > 0) {
    multiplier.strongly = strongly;
  }
  if (weak.length > 0) {
    multiplier.weak = weak;
  }
  if (veryWeak.length > 0) {
    multiplier.veryWeak = veryWeak;
  }

  return multiplier;
};
