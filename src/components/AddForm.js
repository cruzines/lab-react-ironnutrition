import React from 'react';

function AddFood(props) {

    const {btnSubmit} = props;

    return (
        <div>
        <h1>Add an item</h1>
        <form onSubmit={btnSubmit}>
             <div class="field">
                 <label class="label">Name</label>
                 <div class="control">
                 <input name="title" class="input" type="text" placeholder="Enter name" />
                 </div>
             </div>
     
             <div class="field">
                 <label class="label">Calories</label>
                 <div class="control has-icons-left has-icons-right">
                 <input name="price" class="input is-success" type="text" placeholder="Enter Calories"/>
                 </div>
             </div>
             <div class="field">
                 <label class="label">Image</label>
                 <div class="control has-icons-left has-icons-right">
                 <input
                 name="image"
                 class="input is-success"
                 type="text"
                 placeholder="Enter image"
                 />
                 </div>
             </div>
             <div class="field is-grouped">
                 <div class="control">
                 <button class="button is-link">Submit</button>
                 </div>
             </div>
         </form>
        </div>
      );
     }

export default AddFood;
