const layout = (props) => {
    return (
        <div>
            <div>Cabecera</div>
            <div>Side Drawer</div>
            {props.children}
        </div>
    )
}

export default layout;