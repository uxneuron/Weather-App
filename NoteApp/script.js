const noteInput=document.getElementById("note-input");
const addBtn = document.getElementById("add-btn");
const notesContainer = document.getElementById("notes-container");

// load notes from localStorage when page loads
window.onload=function(){
    showNotes();
};
  // Add new notes
  addBtn.addEventListener("click",()=>{
    const noteText = noteInput.value.trim();
     if(noteText==""){
        alert("Please writ somthing");
        return ;

     }
     // save to local storage
     let notes = JSON.parse(localStorage.getItem("notes")) || [];
     notes.push(noteText);
     localStorage.setItem("notes",JSON.stringify(notes));
     noteInput.value="";  // clear input field
     showNotes();

  });
  // Display notes
  function  showNotes(){
    let notes=JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML="";
    notes.forEach((note,index)=>{
        const noteEl=document.createElement("div");
        noteEl.className="note";
        noteEl.innerHTML=`
        ${note}
        <button class = "delete-btn" onclick="deleteNote(${index})">X</button>`;
        notesContainer.appendChild(noteEl);
    });
  }
  //Delete note
  function deleteNote(index){
    let notes=JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index,1); // remove note at index
    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes();
  }