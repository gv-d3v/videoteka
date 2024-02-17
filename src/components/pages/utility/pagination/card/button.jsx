const CardButton = ({ id, button1, button2, buttonlabel, buttonlabel2 }) => {
    return (
        <div className='card-body-uniq'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='btn-group'>
                    <button
                        type='button'
                        className='btn btn-sm btn-outline-secondary-uniq'
                        target='_blank'
                        id={id}
                        href={button1}
                    >
                        {buttonlabel}
                    </button>
                    <button
                        type='button'
                        className='btn btn-sm btn-outline-secondary-uniq'
                        onClick={button2}
                    >
                        {buttonlabel2}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardButton;
