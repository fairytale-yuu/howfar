function loadAddress() {
	var storage = JSON.parse(localStorage.getItem('AddressList'));

	if (!storage) {
		storage = [];
		localStorage.setItem('AddressList', JSON.stringify(storage));
	}

	var displayList = document.getElementById("bookmarklist");
	
	displayList.innerHTML = "";
	for ( var i = 0; i < storage.length; i = i + 2) {
		(function() {
			var address = storage[i+1];
			var inputElement = document.createElement('li');
				inputElement.addEventListener('click', function(){
					clickBookmark(address);
				});

			inputElement.innerHTML = storage[i];
			displayList.appendChild(inputElement);
		}());
	}
}

// 휴대폰에서 전달 받은 bookmark list를 그대로 저장
function addBookmark(bookmarkList) {
	localStorage.setItem('AddressList', bookmarkList);
	loadAddress();
}

// 원하는 북마크를 클릭하여 휴대폰에 전송
function clickBookmark(address) {
	address = 'A' + address;
	fetch(address);
}

function addDummy() {
	var storage = JSON.parse(localStorage.getItem('AddressList'));
	var arrayLength = storage.length;
	
	if (!storage) {
		storage = [];
		localStorage.setItem('AddressList', JSON.stringify(storage));
	}
	
	storage[arrayLength] = "seoul" + arrayLength;
	localStorage.setItem('AddressList', JSON.stringify(storage));
}
/*
onload = function() {
	dummyList();
	loadNotes();
}
*/
