
// let group = {
//     title: "Our Group",
//     students: ["john","peter","Alice"],
//     showList: function(){
//         this.students.forEach(stu=>console.log(this.title,stu));
//     }
// }
// group.showList();

let group = {
    title: "Our Group",
    students: ["john","peter","Alice"],
    showList: function(){
        this.students.forEach(function(student){
            console.log(this.title + ": " + student);
    },this);
}
}

group.showList();
// let group = {
//     title: "Our Group",
//     students: ["john","peter","Alice"],
//     showList: function(){
//         const self = this;
//         this.students.forEach(function (student) {
//             console.log(self.title + ": " + student);
//     });
// }
// }
// group.showList();