const cTest = [];
const Data0 = [];
const Data1 = [];

cTest.push("Credit Suisse", "Thurgauer Kantonalbank")
Data0.push("20.11.2023 Display 1:00", "22.11.2023 MagicInfo 1:30")
Data1.push("10.11.2023 Stromausfall 4:00", "15.11.2023 MagicInfo 0:30", "19.11.2023 Contentfehler 2:00", "21.11.2023 Bedienerfehler 0:30")

var nameStore = {   
    getName: function () {
        return JSON.parse(localStorage.getItem("name"));                
    },
    setName: function (name) {
        localStorage.setItem("name", JSON.stringify(name));
    },
};

function replace() {
    document.getElementById("h1top").innerHTML = "Hello, " + nameStore.getName(name) + "!";
};

function tableBuilder(cName) {
    return '<div> \
        <table>  \
            <thead>  \
                <tr>  \
                    <td colspan="3">  \
                        <label for="TKB">' + cName + '</label>  \
                        <input type="checkbox" name="accounting" id="accounting" data-toggle="toggle">  \
                    </td>  \
                </tr>  \
            </thead> \ ';
}

function headBuilder() {
    return  '<tbody>  \
        <tbody class="labels">  \
            <tr>  \
                <th class="date">' + "Datum" + '</th>  \
                <th class="reason">' + "Supportgrund" + '</th>  \
                <th class="time">' + "Zeitaufwand" + '</th>  \
            </tr>  \
        </tbody> \
        <tbody class="hide"> \ '
}

function stringBuilder(date, reason, time) {
    return '<tr>  \
                <td class="date">' + date + '</td>  \
                <td class="reason">' + reason + '</td>  \
                <td class="time">' + time + '</td>  \
            </tr>  \ ';
}

function endBuilder() {
    return '</tbody>  \
        </tbody> \
    </table> \ </div>';
}

function mainBuilder() {
    var mainString;
    var headString = headBuilder();
    var detailString;
    var endString = endBuilder();
    let cLength = cTest.length;
    for (i = 0; i < cLength; i++) {
        mainString = tableBuilder(cTest[i]);
        let tLength = Data0.length;
        for (a = 0; a < tLength; a++) {
            let details = Data0[a];
            let values = details.split(" ");
            detailString += stringBuilder(values[0], values[1], values[2]);
        }
        return mainString + headString + detailString + endString;
    }
}

function asyncBuilder() {
    let cTable = document.createElement('div');
    cTable.classList.add('kunde');
    cTable.innerHTML = mainBuilder();
    document.body.appendChild(cTable);
}