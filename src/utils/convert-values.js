export  function convertValues(obj) {
    if(obj===undefined || obj===null) return [];
  return Object.keys(obj).map(function(key){
        return obj[key];
    });
}

export function findCheckedIndex(arrayForm){
    let index = 0;
    for (let element of arrayForm) {
        if(element.checked){
            break;
        }
        index++;
    }
    return index;
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
export function convertIndexToCarType(index){
    switch (index) {
        case 0:
            return 'URBAN';
        case 1:
            return 'SUBCOMPACT';
        case 2:
            return 'COMPACT';
        case 3:
            return 'MIDSIZE';
        case 4:
            return 'LARGESIZE';
        case 5:
            return 'FULLSIZE';
        case 6:
            return 'SPORTS';
    }
}

export function convertIndexToBuildingType(index){
    switch (index) {
        case 0:
            return 'COMMERCIAL';
        case 1:
            return 'INDUSTRIAL';
        case 2:
            return 'INSTITUTIONAL';
        case 3:
            return 'RESIDENTIAL';
    }
}

export function getBuildingTypeFromCheckedForm(form) {
    let index = findCheckedIndex(form);
    return convertIndexToBuildingType(index);
}

export function getCarTypeFromCheckedForm(form) {
    let index = findCheckedIndex(form);
    return convertIndexToCarType(index);
}

export function getUrlByInsuranceType(type,id){
    switch (type) {
        case 'HEALTH':
            return `/contract/register-health/${id}`;
        case 'CAR':
            return `/contract/register-car/${id}`;
        case 'FIRE':
            return `/contract/register-fire/${id}`;
    }
}

export function getDataByInsuranceType(type, customerDto, contractDto){
    switch (type) {
        case 'HEALTH':
            return {
                customerDto,
                healthContractDto : contractDto
            };
        case 'CAR':
            return {
                customerDto,
               carContractDto : contractDto
            };
        case 'FIRE':
            return {
                customerDto,
                fireContractDto : contractDto
            };
    }
}