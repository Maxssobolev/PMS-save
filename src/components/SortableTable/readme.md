Обязательно требует два массива:

массив с заголовками

<const tableHeaders = [
{
title: "User", //Название поля, заголовок
bindedCol: 'user', //КЛЮЧ связанного с заголовком поля в массиве со строками, по которому будет сортировка
isSorted: true
},
...
]>

и массив с самой базой
<const rowData = [
{
id: '',
user: 'Maxim',
patient: 'Vasya',
personContact: 'telephone',
companyContact: 'email',
subject: '-',
phone: '-',
date: '-',
time: '13:00',
sentDate: '-',
actions: 'play',
},
]>
