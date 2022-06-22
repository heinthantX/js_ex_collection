let students = [
  {
    name: 'David Rayy',
    mark: 12,
  },
  {
    name: 'NYAN Rayy',
    mark: 1,
  },
  {
    name: 'KO Rayy',
    mark: 2,
  },
  {
    name: 'LIN Rayy',
    mark: 40,
  },
  {
    name: 'TIN Rayy',
    mark: 90,
  },
  {
    name: 'DEOK Rayy',
    mark: 1,
  },
  {
    name: 'KOOO Rayy',
    mark: 100,
  },
];

function findTopStudent(arr) {
  let topMark = 0;
  let topMarkstudent = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].mark > topMark) {
      topMark = arr[i].mark;
      topMarkstudent = i;
    }
  }

  return arr[topMarkstudent].name;
}

const topMarkstudent = findTopStudent(students);
console.log(topMarkstudent);
