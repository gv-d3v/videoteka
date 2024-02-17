import React from 'react';

export default function OrderBy() {
    return (
        <React.Fragment>
            <option value='yeardsc'>Najnoviji</option>
            <option value='yearasc'>Najstariji</option>
            <option value='bestrated'>Najbolje ocijenjeni</option>
            <option value='alphabetical'>Abacedno</option>
        </React.Fragment>
    );
}
