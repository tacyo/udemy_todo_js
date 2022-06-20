import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストからしての要素を削除
const deleteFromList = (id, target) => {
  document.getElementById(id).removeChild(target);
};

//未完了リストからしての要素を削除
const addToIncompleteList = (target) => {
  document.getElementById("incomplete-list").appendChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromList("incomplete-list", completeButton.parentNode);
    //完了リストに追加する要素
    const addTgt = completeButton.parentNode;
    //TODO内容テキストを取得
    const conpleteText = addTgt.firstElementChild.innerText;
    //div以下を初期化
    addTgt.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = conpleteText;

    // button(戻す)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      deleteFromList("complete-list", backButton.parentNode);
      //未完了リストに追加する要素のテキスト取得
      const backText = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(backText);
    });
    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromList("incomplete-list", deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  addToIncompleteList(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
