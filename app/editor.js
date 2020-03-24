/*
  Imaginary Teleprompter
  Copyright (C) 2019 Imaginary Sense Inc.

  This file is part of Imaginary Teleprompter.

  Imaginary Teleprompter is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Imaginary Teleprompter is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with Imaginary Teleprompter.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

// Import Bootstrap and other CSS files
import './scss/editor.scss';
// Import Bootstrap's JavaScript
import 'bootstrap';
// Bootstrap's optionals
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// Import Imaginary Teleprompter Library
import Teleprompter from './teleprompter';
import Hook from './hooks';
import Key from './inputs';

// Editor code starts here

export default class Editor {

  constructor(settings) {
    console.log("Editor");
    // Get teleprompter element
    this.domObject = document.getElementsByClassName( "teleprompter" )[0];
    
    this.editMode = true;
    this.WYSIWYG = true;

    // Initialize Teleprompter object
    this._teleprompter = new Teleprompter( this.domObject, settings );
    this._teleprompter.context = this;

    // // Assign UI event actions
    // document.getElementById( "start" ).addEventListener( "click", ()=> {
    //   this._teleprompter.start();
    // } );

    // Keyboard event actions
    Key.register( ['F2'], ()=> { this.toggleEditMode(); } );
  }

  toggleEditMode() {
    if (this.editMode)
      this.leaveEditMode();
    else
      this.enterEditMode();
  }

  leaveEditMode() {
    console.debug("Leaving Edit Mode");
    this.editMode = false;
    this._editor.destroy()
      .catch( error => {
          console.log( error );
      } );
    // console.log(this._editor);
  }

  enterEditMode() {
    console.debug("Entering Edit Mode");
    this.editMode = true;
    this.instantiateEditor();
  }

  enterWYSIWYGMode() {
    console.debug("Entering Edit Mode");
    this.WYSIWYG = true;
  }

  leaveWYSIWYGMode() {
    console.debug("Leaving Edit Mode");
    this.WYSIWYG = false;
  }

  teleprompterStarted() {
    console.log( "teleprompterStarted" );
  }

}
