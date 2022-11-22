import {contract_car, contract_fire, contract_health, sales_car, sales_fire, sales_health} from "./url";
import {BuildingType, CarType} from "./global-variable";

export function convertValues(obj) {
    if (obj === undefined || obj === null) return [];
    return Object.keys(obj).map(function (key) {
        return obj[key];
    });
}

export function findCheckedIndex(arrayForm) {
    let index = 0;
    for (let element of arrayForm) {
        if (element.checked) {
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

export function convertUwStatus(status) {
    switch (status) {
        case 'APPROVAL':
            return "승인"
        case "RE_AUDIT" :
            return "보류"
        case "REFUSE" :
            return "거절"
        case "WAIT" :
            return "대기"
    }
}

export function convertIndexToCarType(index) {
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

export function convertIndexToBuildingType(index) {
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

export function getContractUrlByInsuranceType(type, id) {
    switch (type) {
        case 'HEALTH':
            return contract_health(id);
        case 'CAR':
            return contract_car(id);
        case 'FIRE':
            return contract_fire(id);
    }
}

export function getSalesUrlByInsuranceType(type, id) {
    switch (type) {
        case 'HEALTH':
            return sales_health(id);
        case 'CAR':
            return sales_car(id);
        case 'FIRE':
            return sales_fire(id);
    }
}

export function getDataByInsuranceType(type, customerDto, contractDto) {
    switch (type) {
        case 'HEALTH':
            return {
                customerDto,
                healthContractDto: contractDto
            };
        case 'CAR':
            return {
                customerDto,
                carContractDto: contractDto
            };
        case 'FIRE':
            return {
                customerDto,
                fireContractDto: contractDto
            };
    }
}

export function convertSSN(ssn) {
    if (ssn === undefined || ssn === null)
        return null;
    const slash = ssn.indexOf('-');
    return ssn.slice(0, slash + 2) + '******'
}

export function convertBuildingTypeToKorean(buildingType) {
    switch (buildingType) {
        case BuildingType.COMMERCIAL:
            return '상업용';
        case BuildingType.INSTITUTIONAL:
            return '기관용';
        case BuildingType.INDUSTRIAL:
            return '산업용';
        case BuildingType.RESIDENTIAL:
            return '거주용';
    }
}
export function convertCarTypeToKorean(carType) {
    switch (carType){
        case CarType.URBAN:
            return '경차';
        case CarType.SUBCOMPACT:
            return '소형';
        case CarType.COMPACT:
            return '준중형';
        case CarType.MIDSIZE:
            return '중형';
        case CarType.LARGESIZE:
            return '준대형';
        case CarType.FULLSIZE:
            return '대형';
        case CarType.SPORTS:
            return '스포츠카';

    }
}


export function convertBoolean(boolean){
    return boolean ? "예" : "아니오";
}