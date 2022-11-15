export  function convertValues(obj) {
  return Object.keys(obj).map(function(key){
        return obj[key];
    });
}

export function convertInsuranceType(type) {
    switch (type) {
        case 'HEALTH':
            return '건강보험';
        case 'CAR':
            return '자동차보험';
        case 'FIRE':
            return '화재보험';
    }
}