const starterTasks = [
  { id: 1, text: "Choose one thing worth finishing", done: false },
  { id: 2, text: "Protect a 25-minute focus window", done: false },
];

const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const greeting = document.querySelector("#greeting");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#new-task");
const timer = document.querySelector("#timer");
const timerToggle = document.querySelector("#timer-toggle");
const timerReset = document.querySelector("#timer-reset");
const timerProgress = document.querySelector("#timer-progress");

let tasks;
try {
  tasks = JSON.parse(localStorage.getItem("orbit-desk-tasks")) || starterTasks;
} catch {
  tasks = starterTasks;
}

let seconds = 25 * 60;
let timerId = null;

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  clock.dateTime = now.toISOString();
  date.textContent = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });
  greeting.textContent = now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";
}

function saveTasks() {
  localStorage.setItem("orbit-desk-tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.replaceChildren();
  for (const task of tasks) {
    const item = document.createElement("li");
    if (task.done) item.className = "done";
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      saveTasks();
      renderTasks();
    });
    const text = document.createElement("span");
    text.textContent = task.text;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${task.text}`);
    remove.addEventListener("click", () => {
      tasks = tasks.filter((candidate) => candidate.id !== task.id);
      saveTasks();
      renderTasks();
    });
    label.append(checkbox, text);
    item.append(label, remove);
    taskList.append(item);
  }
  taskCount.textContent = `${tasks.filter((task) => task.done).length}/${tasks.length}`;
}

function renderTimer() {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  timer.textContent = `${minutes}:${remainder}`;
  timerProgress.style.width = `${100 - (seconds / 1500) * 100}%`;
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  timerToggle.textContent = seconds === 0 ? "Run it again" : "Start focus";
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now(), text, done: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
});

timerToggle.addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    return;
  }
  if (seconds === 0) seconds = 25 * 60;
  timerToggle.textContent = "Pause mission";
  timerId = setInterval(() => {
    seconds -= 1;
    renderTimer();
    if (seconds <= 0) stopTimer();
  }, 1000);
});

timerReset.addEventListener("click", () => {
  stopTimer();
  seconds = 25 * 60;
  renderTimer();
});

updateClock();
renderTasks();
renderTimer();
setInterval(updateClock, 1000);

