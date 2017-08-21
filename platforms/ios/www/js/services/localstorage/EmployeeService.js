var EmployeeService = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store sample data in Local Storage
        window.localStorage.setItem("employees", JSON.stringify(
            [
                {"id": 1,
                  "firstName": "William",
                  "lastName": "Kennedy",
                  "managerId": 0,
                  "managerName": "",
                  "title": "Owner of Ardan",
                  "department": "Engineering",
                  "cellPhone": "305-000-0001",
                  "officePhone": "305-000-0001",
                  "email": "bill@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "William_Kennedy.jpg",
                  "twitterId": "@goinggodotnet",
                  "blog": "https://www.goinggo.net/"},
                {"id": 2,
                  "firstName": "Ed",
                  "lastName": "Gonzalez",
                  "managerId": 0,
                  "managerName": "",
                  "title": "Owner of Ardan",
                  "department": "Engineering",
                  "cellPhone": "305-000-0002",
                  "officePhone": "305-000-0002",
                  "email": "ed@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Ed_Gonzalez.jpg",
                  "twitterId": "@wildlife_junkie",
                  "blog": "https://www.goinggo.net/"},
                {"id": 3,
                  "firstName": "John",
                  "lastName": "Dopazo",
                  "managerId": 1,
                  "managerName": "James King",
                  "title": "VP of Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0003",
                  "officePhone": "781-000-0003",
                  "email": "john@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "John_Dopazo.jpg",
                  "twitterId": "",
                  "blog": "https://www.goinggo.net/"},
                {"id": 4,
                  "firstName": "Erick",
                  "lastName": "Zelaya",
                  "managerId": 1,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0004",
                  "officePhone": "781-000-0004",
                  "email": "erick@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Erick_Zelaya.jpg",
                  "twitterId": "@fakejwilliams",
                  "blog": "https://www.goinggo.net/"},
                {"id": 5,
                  "firstName": "Manuel",
                  "lastName": "Ferro",
                  "managerId": 1,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Sales",
                  "cellPhone": "617-000-0005",
                  "officePhone": "781-000-0005",
                  "email": "manny@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Manuel_Ferro.jpg",
                  "twitterId": "@fakermoore",
                  "blog": "https://www.goinggo.net/"},
                {"id": 6,
                  "firstName": "Andres",
                  "lastName": "Rojas",
                  "managerId": 4,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0006",
                  "officePhone": "781-000-0006",
                  "email": "andres@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Andres_Rojas.jpg",
                  "twitterId": "@fakepjones",
                  "blog": "https://www.goinggo.net/"},
                {"id": 7,
                  "firstName": "Abdala",
                  "lastName": "Fernandez",
                  "managerId": 4,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0007",
                  "officePhone": "781-000-0007",
                  "email": "abdala@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Abdala_Fernandez.jpg",
                  "twitterId": "@fakepgates",
                  "blog": "https://www.goinggo.net/"},
                {"id": 8,
                  "firstName": "Jacob",
                  "lastName": "Walker",
                  "managerId": 2,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0008",
                  "officePhone": "781-000-0008",
                  "email": "jacob@ardanlabs.com",
                  "city": "Wichita, KS",
                  "pic": "Jacob_Walker.jpg",
                  "twitterId": "@fakelwong",
                  "blog": "https://www.goinggo.net/"},
                {"id": 9,
                  "firstName": "Wyatt",
                  "lastName": "Johnson",
                  "managerId": 2,
                  "managerName": "John Dopazo",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "617-000-0009",
                  "officePhone": "781-000-0009",
                  "email": "wyatt@ardanstudios.com",
                  "city": "Edmonton, Alberta",
                  "pic": "Wyatt_Johnson.jpg",
                  "twitterId": "@fakegdonovan",
                  "blog": "https://www.goinggo.net/"},
                {"id": 10,
                  "firstName": "Michal",
                  "lastName": "Nicpon",
                  "managerId": 5,
                  "managerName": "Ray Moore",
                  "title": "Engineering",
                  "department": "Engineering",
                  "cellPhone": "5872871047",
                  "officePhone": "5872871047",
                  "email": "michal@ardanlabs.com",
                  "city": "Edmonton, Alberta",
                  "pic": "Michal_Nicpon.jpg",
                  "twitterId": "@fakekbyrne",
                  "blog": "https://www.goinggo.net/"},
                {"id": 11,
                  "firstName": "Miguel",
                  "lastName": "Correa",
                  "managerId": 5,
                  "managerName": "Ray Moore",
                  "title": "Sales Representative",
                  "department": "Sales",
                  "cellPhone": "617-000-0011",
                  "officePhone": "781-000-0011",
                  "email": "miguel@ardanlabs.com",
                  "city": "Miami, FL",
                  "pic": "Miguel_Correa.jpg",
                  "twitterId": "@fakeajones",
                  "blog": "https://www.goinggo.net/"},

            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function (id) {

        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            employee = null,
            l = employees.length;

        for (var i = 0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }

        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            results = employees.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
        deferred.resolve(results);
        return deferred.promise();
    }

}
