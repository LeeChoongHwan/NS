export function InsuranceListSample() {
    return {
        head: {
            num: "상품번호",
            name: "보험이름",
            type: "보험종류"
        },
        body: [
            {
                id: 1,
                name: "건강보험1",
                type: "건강보험"
            },
            {
                id: 2,
                name: "자동차보험1",
                type: "자동차보험"
            },
            {
                id: 3,
                name: "화재보험1",
                type: "화재보험"
            }
        ],
        modalHead: {
            name: "보장 이름",
            description: "보장 내역",
            amount: "보장 금액"
        },
        modalBody: [
            {
                name: "건강보험보장1",
                description: "건강보험보장1 설명입니다",
                amount: "10000000원"
            },
            {
                name: "건강보험보장2",
                description: "건강보험보장2 설명입니다",
                amount: "20000000원"
            }
        ]
    }
}
