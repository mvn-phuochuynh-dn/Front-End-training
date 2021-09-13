var projectInfo;
var projectDescription;
var projects = [];
var projects2;
var tasks = [];

const $btnAdd = document.getElementById('btn-add-new');
const $divContentProject = document.querySelector('.content-project');
const $formAddNewProject = document.getElementById("form-add-new");
const $btnCancel = document.getElementById('btn-cancel');
const $btnSave = document.getElementById('btn-save');
const $inpProjectName = document.getElementById("inpName");
const $txtDescription = document.getElementById("txtDescription");
const $inpDayCreate = document.getElementById('dayStart');
const $dayEnd = document.getElementById('dayEnd');
const $OTExpected = document.getElementById('otExpected');
const $statusProcessing = document.getElementById('status');
const $projectListContainer = document.querySelector(".project-list-container");

const $formEdit = document.querySelector(".form-edit-project");
const $inpProjectNameEdit = document.getElementById("inpEditName");
const $txtDescriptionEdit = document.getElementById("txtEditDescription");
const $inpDayCreateEdit = document.getElementById('dayEditStart');
const $dayEndEdit = document.getElementById('dayEditEnd');
const $OTExpectedEdit = document.getElementById('otEditExpected');
const $statusProcessingEdit = document.getElementById('statusEdit');
const $btnEdit = document.querySelector("#btn-edit");
const $btnEditCancel = document.getElementById("btn-edit-cancel");

const $formShowInfoProject = document.getElementById("show-info-project");
const $infoProjectTitle = document.getElementById("info-project-title");
const $infoDescription = document.querySelector(".info-project-description");
const $infoDayStart = document.querySelector(".info-project-day-start");
const $infoDayEnd = document.querySelector(".info-project-day-end");
const $infoOT = document.querySelector(".info-project-ot");
const $infoStatus = document.querySelector(".info-project-status");
const $taskList = document.querySelector("#task-list");
const $btnBack = document.getElementById("btn-back");
const $btnEditProject = document.getElementById("btn-edit-project");
const $btnDeleteProject = document.getElementById("btn-delete-project");

$projectListContainer.innerHTML = `
    <h3 class="form-title">Your Projects</h3>
    <table id="table-project-list">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Description</th>
                <th>Day start</th>
                <th>Day end</th>
                <th>OT expected</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="project-list">
        </tbody>
    </table>
    `;

//hiển thị ds project name on sidebar
$divContentProject.innerHTML = `
    <h3 class="project-list-title">My Projects</h3>
    <ul class="project-name-list">
    </ul>
`

document.addEventListener("DOMContentLoaded", onLoad());


function getDayCreate() {
    var curDate = new Date();
    var curDay = curDate.getDate();
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();
    if (curDay < 10) {
        return curYear + "-" + curMonth + "-0" + curDay;
    }
    if (curMonth < 10) {
        return curYear + "-0" + curMonth + "-" + curDay;
    }
    else return curYear + "-" + curMonth + "-" + curDay;
}
//mặc định ngày start là ngày add
$inpDayCreate.value = getDayCreate();


function showForm(form) {
    form.style.display = "block";
}
function hiddenFrom(form) {
    form.style.display = " none";
}

$btnAdd.addEventListener('click', function () {
    //show form add project
    showForm($formAddNewProject);
    //hidden table of list product
    hiddenFrom($projectListContainer);
    //hidden form eidt
    hiddenFrom($formEdit);
    //hidden show info 
    hiddenFrom($formShowInfoProject);
});

//click cancel => close form
$btnCancel.addEventListener('click', function (e) {
    e.preventDefault();
    hiddenFrom($formAddNewProject);
    showForm($projectListContainer);
});
$btnSave.addEventListener('click', e => {
    e.preventDefault();
    createProject();
    onLoad();
    $formAddNewProject.reset();
    $inpDayCreate.value = getDayCreate();

});


function setToLocalStorage(localName, localValue) {
    return localStorage.setItem(localName, JSON.stringify(localValue));
}
function getLocalStorage(localName) {
    return JSON.parse(localStorage.getItem(localName));
}

function createProject() {
    let projectsLocal = getLocalStorage("projectsLocal");

    projectInfo = {
        name: $inpProjectName.value,
        description: $txtDescription.value,
        dayStart: $inpDayCreate.value,
        dayEnd: $dayEnd.value,
        OTExpected: $OTExpected.value,
        status: $statusProcessing.value

    }
    if (projectInfo == '') {
        alert("Write the project info!");
    } else {
        if (projectsLocal == null) {
            projects.push(projectInfo);
            setToLocalStorage("projectsLocal", projects);
        } else {
            projects = getLocalStorage("projectsLocal");
            projects.push(projectInfo);
            setToLocalStorage("projectsLocal", projects);
        }

    }
}

function onLoad() {
    projects2 = getLocalStorage("projectsLocal");
    let $projectList = document.querySelector("#project-list");
    let $projectNameList = document.querySelector(".project-name-list");
    $projectList.innerHTML = '';
    $projectNameList.innerHTML = '';
    if (projects2 !== null) {
        for (let i = 0; i < projects2.length; i++) {
            $projectList.innerHTML +=
                `
                <tr class="trProject">
                    <td>${projects2[i].name}</td>
                    <td>${projects2[i].description}</td>
                    <td>${projects2[i].dayStart}</td>
                    <td>${projects2[i].dayEnd}</td>
                    <td>${projects2[i].OTExpected}</td>
                    <td>${projects2[i].status}</td>
                    <td>
                        <button class="btn-action" onclick="ViewProject(${i})"><i class="far fa-eye color-blue"></i></button>
                        <button class="btn-action" onclick="UpdateProject(${i})"><i class="fa fa-pencil-square-o color-yellow" aria-hidden="true"></i></button>
                        <button class="btn-action" onclick="Delete(projects2,${i})"><i class="fa fa-trash-o color-red" aria-hidden="true"></i></button>
                    </td>
                </tr>
            `
            $projectNameList.innerHTML += `
            <li class="project-item" id="project-item">
                <a href="#" class="show-project flex-space-between btn-project">
                    <span class="aside-project-name">${projects2[i].name}</span>
                    <button class="btn-add-task" id="btn-add-task" ><i class="fas fa-plus"></i></button>
                </a>
            </li>
            `
        }
    }
}

function ViewProject(item) { 
    hiddenFrom($projectListContainer);
    infoProject(item);
    showForm($formShowInfoProject);
}
function UpdateProject(item) {
    let projects3 = getLocalStorage("projectsLocal");

    $inpProjectNameEdit.value = projects3[item].name;
    $txtDescriptionEdit.value = projects3[item].description;
    $inpDayCreateEdit.value = projects3[item].dayStart;
    $dayEndEdit.value = projects3[item].dayEnd;
    $OTExpectedEdit.value = projects3[item].OTExpected;
    $statusProcessingEdit.value = projects3[item].status;
    showForm($formEdit);
    hiddenFrom($projectListContainer);

    $btnEdit.addEventListener('click', e => {
        e.preventDefault();
        UpdateData(item);
        showForm($projectListContainer);
        // showForm($formShowInfoProject);
    });
    $btnEditCancel.addEventListener('click', e => {
        e.preventDefault();
        hiddenFrom($formEdit);
        showForm($projectListContainer);
        // showForm($formShowInfoProject);
    })

}
function UpdateData(item) {
    let projects4 = getLocalStorage("projectsLocal");
    projects4[item] = {
        name: $inpProjectNameEdit.value,
        description: $txtDescriptionEdit.value,
        dayStart: $inpDayCreateEdit.value,
        dayEnd: $dayEndEdit.value,
        OTExpected: $OTExpectedEdit.value,
        status: $statusProcessingEdit.value
    }
    if (projects4[item] == '') {
        alert("Write project info!");
    } else {
        setToLocalStorage("projectsLocal", projects4);
        onLoad();
        showForm($projectListContainer);
        hiddenFrom($formEdit);
    }
}
function Delete(projects5,item) {
    projects5.splice(item, 1);
    setToLocalStorage("projectsLocal", projects5);
    onLoad();
}
function DeleteItemLocal(itemName) {
    localStorage.removeItem(itemName);
}
function infoProject(i) {
    let projects6 = getLocalStorage("projectsLocal");
    let localTaskName = projects6[i].name + "Task";
    let getLocalTasks = getLocalStorage(localTaskName);
    $taskList.innerHTML = '';
    $infoProjectTitle.textContent = projects6[i].name;
    $infoDescription.textContent = projects6[i].description;
    $infoDayStart.textContent = projects6[i].dayStart;
    $infoDayEnd.textContent = projects6[i].dayEnd;
    $infoOT.textContent = projects6[i].OTExpected;
    $infoStatus.textContent = projects6[i].status;
    if (getLocalTasks !== null) {
        for (let j = 0; j < getLocalTasks.length; j++) {
            $taskList.innerHTML += `
            <li class="task-item flex-space-between">
                <span>${getLocalTasks[j].task}</span>
                <div class="action-on-task-item">
                    <button class="btn-task" onclick="DeleteTask(${i},${j})"><i class="fa fa-trash-o color-red"></i></button>
                </div>
            </li>
            `
        }
    }

    $btnEditProject.addEventListener('click', function (e) {
        e.preventDefault();
        UpdateProject(i);
        hiddenFrom($formShowInfoProject);
    });
    $btnDeleteProject.addEventListener('click', function (e) {
        e.preventDefault();
        Delete(projects6,i);
        DeleteItemLocal(localTaskName);
        hiddenFrom($formShowInfoProject);
        showForm($projectListContainer);
    });
    $btnBack.addEventListener('click', function(e) {
        e.preventDefault();
        hiddenFrom($formShowInfoProject);
        showForm($projectListContainer);
    })
}


const $projectItems = document.querySelectorAll("#project-item");
const $btnsShowInfoPProject = document.querySelectorAll(".show-project");
const $btnsAddTask = document.querySelectorAll("#btn-add-task");

for (let i = 0; i < $projectItems.length; i++) {
    $btnsAddTask[i].addEventListener('click', function (e) {
        e.preventDefault()
        AddTask(i);
        const $btnSaveTask = document.querySelector("#btn-action-save-task");
        const $btnCancelAddTask = document.querySelector("#btn-action-cancel-task");
        $btnSaveTask.addEventListener('click', function (e) {
            e.preventDefault();
            saveTask(i);
            infoProject(i);
            showForm($formShowInfoProject);
        });
        $btnCancelAddTask.addEventListener('click', function (e) {
            e.preventDefault();
            cancelTask();
            showForm($formShowInfoProject);
        })
    })
    $btnsShowInfoPProject[i].addEventListener('click', function (e) {
        e.preventDefault();
        hiddenFrom($projectListContainer);
        infoProject(i);
        showForm($formShowInfoProject);
    });
}

function AddTask(i) {
    $projectItems[i].innerHTML += `
    <form id="form-add-task">
        <input type="text" name="taskName" id="task-name" placeholder="New Task" class="inp-task"><br>
        <div class="actions-add-task flex-end">
            <button class="btn-action-add-task" id="btn-action-save-task"><i class="far fa-check-circle color-green"></i></button>
            <button class="btn-action-add-task" id="btn-action-cancel-task"><i class="far fa-window-close color-red"></i></button>
        </div>
    </form>
    `
}


function saveTask(item) {
    const $formAddTask = document.getElementById("form-add-task");
    const $inpsTaskName = document.querySelector("#task-name");
    let projects7 = getLocalStorage("projectsLocal");
    let tempt = projects7[item].name + "Task";
    let tasks1 = getLocalStorage(tempt);

    taskInfo = {
        task: $inpsTaskName.value
    }
    if ($inpsTaskName.value == '') {
        alert("Add the task on " + projects7[item].name);
    } else {
        if (tasks1 == null) {
            tasks.push(taskInfo);
            setToLocalStorage(tempt, tasks)
        } else {
            tasks = getLocalStorage(tempt);
            tasks.push(taskInfo);
            setToLocalStorage(tempt, tasks)
        }
        $formAddTask.reset();
    }
}
function cancelTask() {
    const $formAddTask = document.getElementById("form-add-task");
    hiddenFrom($formAddTask);
}
function DeleteTask(indexLocal, item) {
    let projects8 = getLocalStorage("projectsLocal");
    let tempt = projects8[indexLocal].name + "Task";
    let tasks1 = getLocalStorage(tempt);
    tasks1.splice(item, 1);
    setToLocalStorage(tempt, tasks1);
    infoProject(indexLocal);
}