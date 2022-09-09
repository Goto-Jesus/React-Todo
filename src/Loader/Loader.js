import React from "react";
import "./Loader.css"

const styles = {
    loading:{
        display:'flex',
        justifyContent: 'center',
        margin: '.5rem'
    }  
}

export default ()=>
<div>
    <div className="text-loading">loading</div>
    <div style={styles.loading}>
        <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
</div>