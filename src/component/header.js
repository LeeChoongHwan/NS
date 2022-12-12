export default function Header({_content, _class}){
    return (
        <div className={`flex_box center mt-3 mb-3 ${_class}`}>
            <h4>{_content}</h4>
        </div>
    )
}
