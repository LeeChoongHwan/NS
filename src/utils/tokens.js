export default function saveToken(token){
    sessionStorage.setItem("access-token",token);
}