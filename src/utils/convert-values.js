export default function convertValues(obj) {
  return Object.keys(obj).map(function(key){
        return obj[key];
    });
}