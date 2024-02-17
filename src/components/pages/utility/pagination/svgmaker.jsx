const SVGMaker = ({className, d, fill, strokeWidth, stroke, strokeMiterlimit}) => {
    return ( 
        <path
            className={className}
            d={d}
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeMiterlimit={strokeMiterlimit}
          />
     );
}
 
export default SVGMaker;