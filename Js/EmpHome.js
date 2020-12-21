window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profilPic}"></td>
            < td > ${empPayrollData._name}</td >
        <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../Assets/icons/edit-black-18dp.svg">
        </td>
    </tr>
`;
        }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Vijay Kumar',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '6000000',
            _startDate: '19 sep 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/Ellipse -3.png'
        },
        {
            _name: 'Arun kumar',
            _gender: 'male',
            _department: [
                'Engineering',
                'Sales'
            ],
            _salary: '5000000',
            _startDate: '13 May 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/Ellipse -2.png'
        },
        {
            _name: 'Pallavi',
            _gender: 'female',
            _department: [
                'Engineering',
                'Hr'
            ],
            _salary: '10000000',
            _startDate: '02 Oct 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}