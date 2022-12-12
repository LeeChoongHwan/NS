import {FILE_NOT_FOUND_ERROR, SERVER_CONNECTION_ERROR} from "./global-error-message";
import {SERVER_CONNECTION_ERROR} from "./global-error-message";

export const handleConnectionError = (errMessage) => {
    switch (errMessage) {
        case SERVER_CONNECTION_ERROR.errorMessage :
            SERVER_CONNECTION_ERROR.response();
            break;
    }
}
export const handleFileNotFoundError = () => {
    FILE_NOT_FOUND_ERROR.response();
}

export const handleError = (error) => {
    if (error.response?.data.errorMessage !== undefined)
        alert(error.response.data.errorMessage);
    if(error.response.status === 403)
        alert("접근할 권한이 없습니다.");
    else
        handleConnectionError(error.message);
}