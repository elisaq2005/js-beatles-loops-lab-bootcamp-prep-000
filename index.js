
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  while (0 < facts.length) {
    return facts(facts + "!!!")
  }
  return facts
}
