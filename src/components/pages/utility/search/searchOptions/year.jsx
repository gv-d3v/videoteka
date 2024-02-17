import React from 'react';

export default function YearList() {
    return (
        <React.Fragment>
            <option value=''>Svi</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2020-2023'>2020+</option>
            <option value='2010-2023'>2010+</option>
            <option value='2010-2019'>2010-2019</option>
            <option value='2000-2009'>2000-2009</option>
            <option value='1990-1999'>1990-1999</option>
            <option value='1980-1989'>1980-1989</option>
            <option value='1970-1979'>1970-1979</option>
            <option value='1900-1969'>1900-1969</option>
        </React.Fragment>
    );
}
