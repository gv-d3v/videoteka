import React, { useState } from 'react';

const LoginModal = ({ center, setCenter }) => {
   const [show, setShow] = useState('');

   const handleClose = () => {
      setCenter('');
      setShow('');
      document.getElementById('myform').reset();
   };

   return (
      <div
         class={`modal fade ${center}`}
         id='staticBackdrop'
         data-bs-backdrop='static'
         data-bs-keyboard='false'
         tabindex='-1'
         aria-labelledby='staticBackdropLabel'
         aria-hidden='true'
      >
         <div class='modal-dialog'>
            <div class='modal-content'>
               <div class='modal-header logo'>
                  <h1
                     class='modal-title fs-5'
                     id='staticBackdropLabel'
                  >
                     VideoZone
                  </h1>
               </div>
               <div class='modal-header signin'>
                  <h1
                     class='modal-title fs-5'
                     id='staticBackdropLabel'
                  >
                     Prijavi se
                  </h1>
               </div>
               <div class='modal-body'>
                  <form id='myform'>
                     <div className='container'>
                        <div className='row username'>
                           Korisnicko ime:
                           <input
                              type='text'
                              placeholder=''
                              onChange={() => setShow('')}
                           />
                        </div>
                        <div className='row password'>
                           Lozinka:
                           <input
                              type='password'
                              placeholder=''
                              onChange={() => setShow('')}
                           />
                        </div>
                     </div>
                  </form>
                  <div className={`row err ${show}`}>
                     {' '}
                     <span>Uneseni podatci su netačni, molimo vas pokušajte ponovo!</span>
                  </div>
               </div>
               <div class='modal-footer'>
                  <button
                     type='button'
                     class='btn btn-secondary exitButton'
                     data-bs-dismiss='modal'
                     onClick={() => handleClose()}
                  >
                     Zatvori
                  </button>
                  <button
                     type='button'
                     class='btn btn-primary loginButton'
                     onClick={() => setShow('show')}
                  >
                     Prijavi se
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginModal;
