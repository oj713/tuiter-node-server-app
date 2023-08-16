use('tuiter-su2-2023');
db.users.drop();

db.users.insertMany([
    {'_id': '1', 'name': 'Alice', 'type': 'admin'},
    {'_id': '2', 'name': 'Bob', 'type': 'user'},
    {'_id': '3', 'name': 'Charlie', 'type': 'user'}
]);