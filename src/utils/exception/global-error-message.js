export const SERVER_CONNECTION_ERROR = {
    errorMessage: "Network Error",
    responseMessage : "현재 서비스에 오류가 발생하여 작동이 원할하지 않습니다. 고객센터(1588-1588)로 연락주시면 즉시 처리하겠습니다.",
    response() {
        alert(this.responseMessage)
    }
}
export const FILE_NOT_FOUND_ERROR = {
    responseMessage : "업로드 한 이미지 파일을 찾을 수 없습니다.",
    response() {
        alert(this.responseMessage)
    }
}
