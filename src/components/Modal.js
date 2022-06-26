


const Modal = props =>{
    return (
        <div>
            <div className="backdrop"></div>

            <div className="modal">
                <div className="content">{props.children}</div>
            </div>
        </div>
    )
}


export default Modal;