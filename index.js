export function getStringPattern(regexp, string) {

  if(regexp.exec(string)) {
    var result = regexp.exec(string);
    return result[1];
  } else {
    return false;
  }
}

export function isSameDate(day1, day2) {

  return day1.getFullYear() === day2.getFullYear()
    && day1.getDate() === day2.getDate()
    && day1.getMonth() === day2.getMonth();
}

export function getURLParam(name) {

  let params = document.location.search.replace('?', '').split('&');
  let o = {};
  params.forEach(function(param) {
    if(param) {
      let elem = param.split('=');
      o[elem[0]] = elem[1];
    }
  });
  if(name) return o[name]; else return o;
}

export function sortArray(array, reference) {

  array.sort(function(a, b){
    return reference.indexOf(a.name) - reference.indexOf(b.name)
  });
  return array;
}
