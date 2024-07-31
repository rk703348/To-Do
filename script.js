document.getElementById('add-task-button').addEventListener('click', function () {
    const taskinput = document.getElementById('task-input');
    const dateinput = document.getElementById('date-input');
    const timeinput = document.getElementById('time-input');
    const ampminput = document.getElementById('ampm-input');


    const tasktext = taskinput.value.trim();
    const taskdate = dateinput.value;
    const tasktime = timeinput.value;
    const taskampm = ampminput.value;


    if (tasktext && taskdate && tasktime) {


        const tasklist = document.getElementById('task-list');
        const newtask = document.createElement('li');

        newtask.innerHTML = `
        
     <div class ="task-info">

        <span><i class="fas fa-tasks"></i> ${tasktext}</span>
        <span><i class="fas fa-calendar-alt"></i> ${taskdate}</span>
        <span><i class="fas fa-clock"></i> ${tasktime} ${taskampm}</span>
        
     </div>

        <div class ="task-action">
        <button class ="delete-button"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        tasklist.appendChild(newtask);

        const deletebutton = newtask.querySelector('.delete-button');

        deletebutton.addEventListener('click', function(){
            tasklist.removeChild(newtask);
        });

        taskinput.value ='';
        dateinput.value ='';
        timeinput.value ='';
    }

});