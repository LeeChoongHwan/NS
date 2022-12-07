export default function ReportedFilesList({_type, _fileUrls}) {


    const createFileDownloads = () => {

        switch (_type) {

            case 'car-accident':
                return <div>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.picture_of_site}>사고 현장 사진 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.car_accident_fact_confirmation}>교통사고 사실 확인서 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.medical_certification}>진단서 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.claim_comp}>보상금 청구 서류 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.confirm_admission_discharge}>입퇴원 확인서 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.payment_resolution}>자동차보험금 지급결의서 다운로드</a>
                    {_fileUrls?.investigate_accident !== undefined ?
                        <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                           href={_fileUrls?.investigate_accident}>사고 조사 보고서 다운로드</a>
                    : null}
                </div>

            case 'car-breakdown':
                return;
            case 'fire-accident':
                return <div>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.picture_of_site}>사고 현장 사진 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.claim_comp}>보상금 청구 서류 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.repair_estimate}>수리비 견적서 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.repair_receipt}>수리비 영수증 다운로드</a>
                    {_fileUrls?.investigate_accident !== undefined ?
                        <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                           href={_fileUrls?.investigate_accident}>사고 조사 보고서 다운로드</a>
                        : null}
                </div>
            case 'injury-accident':
                return <div>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.medical_certification}>진단서 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.claim_comp}>보상금 청구 서류 다운로드</a>
                    <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                       href={_fileUrls?.confirm_admission_discharge}>입퇴원 확인서 다운로드</a>
                    {_fileUrls?.investigate_accident !== undefined ?
                        <a className={"btn btn-warning w-100 mt-2 mb-2"} download={true}
                           href={_fileUrls?.investigate_accident}>사고 조사 보고서 다운로드</a>
                        : null}
                </div>

        }
    }
    return (
        <>
            {createFileDownloads()}
        </>
    )

}