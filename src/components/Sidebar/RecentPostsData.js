let today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //As January is 0.
var yyyy = today.getFullYear();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const date = mm + "/" + dd + "/" + yyyy;

export default [
  {
    title: "Post1 Title",
    date,
    content:
      "This posts content today is about a recent event in the city of Philadelphia ...",
    published: "21 seconds ago",
  },
  {
    title: "Post2 Title",
    date,
    content:
      "This posts content today is about a recent event in the city of Philadelphia ...",
    published: "2 minutes ago",
  },
  {
    title: "Post3 Title",
    date,
    content:
      "This posts content today is about a recent event in the city of Philadelphia ...",
    published: "21 hours ago",
  },
  {
    title: "Post4 Title",
    date,
    content:
      "This posts content today is about a recent event in the city of Philadelphia ...",
    published: "2 days ago",
  },
  {
    title: "Post5 Title",
    date,
    content:
      "This posts content today is about a recent event in the city of Philadelphia ...",
  },
];




