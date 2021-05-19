import React from 'react';
import './addAsset.css';
import GroupOrientation from './groupOrientation'

const AddAsset=()=> {
    return (
        <div>
            <div>באיזו קטגוריה נפרסם היום?</div>
            <div className="category">
            <div>מכירה</div>
            <div>השכרה</div>
            <div>דירות שותפים</div>
            <div>מסחרי</div>
            <GroupOrientation></GroupOrientation>
            </div>
        </div>
    )
}
export default AddAsset;
