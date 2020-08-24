function AgeInDays() {
	var birthday = prompt("what year were you born ... good freind ??");
	var ageInDayss = (2020 - birthday) * 365;
	var h1 = document.createElement("h1");
	var textAnswer = document.createTextNode("you are " + ageInDayss + " old.");
	h1.setAttribute("id", "AgeInDays");
	h1.appendChild(textAnswer);
	document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
	document.getElementById("AgeInDays").remove();
}
//challege 2
function generateCat() {
	var img = document.createElement("img");
	img.setAttribute(
		"src",
		"https://i.pinimg.com/originals/18/c2/15/18c2152d6324035f9f0761faac59132d.gif"
	);

	document.getElementById("flex-cat-gen").appendChild(img);
}
//challenge 3: rock , paper , scissors

function npsGame(yourChoice) {
	var humChoice, botChoice, random;
	humChoice = yourChoice.id;
	random = Math.floor(Math.random() * 3);
	botChoice = numbertochoice(random);
	console.log("humain choice :" + humChoice, "computer choice :" + botChoice);
	results = decideWinner(humChoice, botChoice);
	console.log(results);
	message = finalMessage(results);
	console.log(message);
	rpsFrontEnd(yourChoice.id, botChoice, message);
}
function numbertochoice(number) {
	return ["rock", "paper", "scissors"][number];
}

function decideWinner(hum, bot) {
	if (
		(hum == "rock" && bot == "rock") ||
		(hum == "paper" && bot == "paper") ||
		(hum == "scissors" && bot == "scissors")
	) {
		return [0, 0];
	} else {
		if (
			(hum == "rock" && bot == "paper") ||
			(hum == "scissors" && bot == "rock") ||
			(hum == "paper" && bot == "scissors")
		) {
			return [0, 1];
		} else {
			if (
				(hum == "rock" && bot == "scissors") ||
				(hum == "paper" && bot == "rock") ||
				(hum == "scissors" && bot == "paper")
			) {
				return [1, 0];
			}
		}
	}
}
function finalMessage(res) {
	if (res[0] === res[1]) {
		return { message: "you tied!", color: "yellow" };
	} else {
		if (res[0] - res[1] === 1) {
			return { message: "You Won!", color: "green" };
		} else {
			return { message: "you lost!", color: "red" };
		}
	}
}
function rpsFrontEnd(yourChoice, butChoice, Message) {
	var rpsdatabase = {
		rock: document.getElementById("rock").src,
		paper: document.getElementById("paper").src,
		scissors: document.getElementById("scissors").src,
	};

	document.getElementById("rock").remove();
	document.getElementById("paper").remove();
	document.getElementById("scissors").remove();

	var humainDiv = document.createElement("div");
	var botDiv = document.createElement("div");
	var MessageDiv = document.createElement("div");

	humainDiv.innerHTML =
		"<img src='" +
		rpsdatabase[yourChoice] +
		"' height=150 width=150  style ='box-shadow :0px 10px 50px blue'/>";
	botDiv.innerHTML =
		"<img src='" +
		rpsdatabase[butChoice] +
		"' height=150 width=150 style='box-shadow: 0px 10px 50px red'/>";
	MessageDiv.innerHTML =
		"<h1 style='color:" +
		Message["color"] +
		"; font-size: 60px ;padding: 30px'>" +
		Message["message"] +
		"</h1>";

	document.getElementById("flex-box-rps-div").appendChild(botDiv);
	document.getElementById("flex-box-rps-div").appendChild(MessageDiv);
	document.getElementById("flex-box-rps-div").appendChild(humainDiv);
}
//Challenge 4: chage the color of all buttons
var All_battons = document.getElementsByTagName("button");
var copyAllButton = [];

for (let i = 0; i < All_battons.length; i++) {
	copyAllButton.push(All_battons[i].classList[1]);
}
function buttonColorChange(choice) {
	switch (choice.value) {
		case "red":
			ChangeColorRed();
			break;
		case "green":
			ChangeColorGreen();
			break;
		case "random":
			RandomColors();
			break;
		case "reset":
			ButtonColorReset();
			break;
	}
}
function ChangeColorRed() {
	for (let i = 0; i < All_battons.length; i++) {
		All_battons[i].classList.remove(All_battons[i].classList[1]);
		All_battons[i].classList.add("btn-danger");
	}
}

function ChangeColorGreen() {
	for (let i = 0; i < All_battons.length; i++) {
		All_battons[i].classList.remove(All_battons[i].classList[1]);
		All_battons[i].classList.add("btn-success");
	}
}

function RandomColors() {
	var colors = ["btn-success", "btn-danger", "btn-warning", "btn-primary"];
	for (let i = 0; i < All_battons.length; i++) {
		All_battons[i].classList.remove(All_battons[i].classList[1]);
		All_battons[i].classList.add(colors[Math.floor(Math.random() * 4)]);
	}
}
function ButtonColorReset() {
	for (let i = 0; i < All_battons.length; i++) {
		All_battons[i].classList.remove(All_battons[i].classList[1]);
		All_battons[i].classList.add(copyAllButton[i]);
	}
}
//Challenge 5 : BlackJack
let BlackJackGame = {
	you: { scoreSpan: "Your-BlackJack-result", div: "#your-Box", score: 0 },
	dealer: {
		scoreSpan: "Dealer-BlackJack-result",
		div: "#dealer-box",
		score: 0,
	},
	cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K", "A"],
	ScoreMap: {
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		"10": 10,
		Q: 10,
		J: 10,
		K: 10,
		A: [1, 11],
	},
	wins: 0,
	losses: 0,
	drews: 0,
	isStand: false,
	turnsOn: false,
};

const YOU = BlackJackGame["you"];
const DEALER = BlackJackGame["dealer"];
const HitSound = new Audio("static/sounds/swish.m4a");
const winnerSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/aww.mp3");

document
	.querySelector("#blackJack-Hit-Buttun")
	.addEventListener("click", BlackJackHit);
document
	.querySelector("#blackJack-Deal-Buttun")
	.addEventListener("click", BlackJackDeal);
document
	.querySelector("#blackJack-Stand-Buttun")
	.addEventListener("click", dealerLogic);

function BlackJackHit() {
	if (BlackJackGame["isStand"] === false) {
		let card = RandomCard();
		if (YOU["score"] <= 21) {
			ShowCard(card, YOU);
			UpdateScore(card, YOU);
			ShowScoreCard(YOU);
		}
	}
}
function ShowScoreCard(activePlayer) {
	if (activePlayer["score"] > 21) {
		document.getElementById(activePlayer["scoreSpan"]).innerHTML = "BUST!";
		document.getElementById(activePlayer["scoreSpan"]).style.color = "red";
	} else {
		document.getElementById(activePlayer["scoreSpan"]).innerHTML =
			activePlayer["score"];
	}
}
function UpdateScore(card, activePlayer) {
	if (card === "A") {
		if (BlackJackGame["ScoreMap"][card][1] + activePlayer["score"] <= 21) {
			activePlayer["score"] += BlackJackGame["ScoreMap"][card][1];
		} else {
			activePlayer["score"] += BlackJackGame["ScoreMap"][card][0];
		}
	} else {
		activePlayer["score"] += BlackJackGame["ScoreMap"][card];
	}
}
function RandomCard() {
	let randomNum = Math.floor(Math.random() * 13);
	return BlackJackGame["cards"][randomNum];
}

function ShowCard(card, activePlayer) {
	let cardImage = document.createElement("img");
	cardImage.src = `static/images/${card}.png`;
	document.querySelector(activePlayer["div"]).appendChild(cardImage);
	HitSound.play();
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function BlackJackDeal() {
	if (BlackJackGame["turnsOn"] === true) {
		let DealerImages = document
			.querySelector("#dealer-box")
			.querySelectorAll("img");
		let YourImages = document
			.querySelector("#your-box")
			.querySelectorAll("img");
		for (let i = 0; i < YourImages.length; i++) {
			YourImages[i].remove();
		}
		for (let i = 0; i < DealerImages.length; i++) {
			DealerImages[i].remove();
		}
		YOU["score"] = 0;
		DEALER["score"] = 0;
		document.getElementById(YOU["scoreSpan"]).innerHTML = 0;
		document.getElementById(YOU["scoreSpan"]).style.color = "White";
		document.getElementById(DEALER["scoreSpan"]).innerHTML = 0;
		document.getElementById(DEALER["scoreSpan"]).style.color = "White";

		document.querySelector("#BlackJack-result").textContent = "Let's play";
		document.querySelector("#BlackJack-result").style.color = "black";
		BlackJackGame["turnsOn"] = false;
		BlackJackGame["isStand"] = false;
	}
}

async function dealerLogic() {
	if (BlackJackGame["turnsOn"] === false) {
		BlackJackGame["isStand"] = true;
		if (DEALER["score"] <= 21) {
			while (DEALER["score"] < 16 && BlackJackGame["isStand"] === true) {
				let card = RandomCard();
				ShowCard(card, DEALER);
				UpdateScore(card, DEALER);
				ShowScoreCard(DEALER);
				await sleep(1000);
			}
		}
		if (DEALER["score"] > 15) {
			showResult(computeWinner());
			BlackJackGame["turnsOn"] = true;
		}
	}
}
function computeWinner() {
	let winner;
	if (YOU["score"] <= 21) {
		if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
			BlackJackGame["wins"]++;
			winner = YOU;
		} else if (YOU["score"] < DEALER["score"]) {
			BlackJackGame["losses"]++;
			winner = DEALER;
		} else if (YOU["score"] === DEALER["score"]) {
			BlackJackGame["drews"]++;
		}
	} else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
		BlackJackGame["losses"]++;
		winner = DEALER;
	} else if (YOU["score"] > 21 && DEALER["score"] > 21) {
		BlackJackGame["drews"]++;
	}

	return winner;
}
function showResult(winner) {
	let message, messageColor;

	if (winner === YOU) {
		document.querySelector("#blackJack-reults-Wins").textContent =
			BlackJackGame["wins"];
		message = "YOU WON!";
		messageColor = "green";
		winnerSound.play();
	} else if (winner === DEALER) {
		document.querySelector("#blackJack-results-Loesses").textContent =
			BlackJackGame["losses"];
		message = "YOU LOST§";
		messageColor = "red";
		lossSound.play();
	} else {
		document.querySelector("#blackJack-results-Draws").textContent =
			BlackJackGame["drews"];
		message = "YOU DREW!";
		messageColor = "yellow";
	}
	document.getElementById("BlackJack-result").innerHTML = message;
	document.getElementById("BlackJack-result").style.color = messageColor;
}
